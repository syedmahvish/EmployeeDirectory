import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Paper from '@material-ui/core/Paper';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Moment from 'moment';

function compareString(employee1, employee2, orderBy) {

    if(orderBy === "Id"){
        let idString1 = employee1.id.name + " " + employee1.id.value
        let idString2 = employee2.id.name + " " + employee2.id.value
        return descendingComparator(idString1, idString2)
    } 

    if(orderBy === "Name"){
        let idString1 = employee1.name.title + "."+ employee1.name.first + " " + employee1.name.last
        let idString2 = employee2.name.title + "."+ employee2.name.first + " " + employee2.name.last
        return descendingComparator(idString1, idString2)
    } 

    if(orderBy === "Email"){
        let idString1 = employee1.email
        let idString2 = employee2.email
        return descendingComparator(idString1, idString2)
    }

    if(orderBy === "Phone"){
        let idString1 = employee1.phone + "/" + employee1.cell
        let idString2 = employee2.phone + "/" + employee2.cell
        return descendingComparator(idString1, idString2)
    }

    if(orderBy === "Nationality"){
        let idString1 = employee1.location.country
        let idString2 = employee2.location.country
        return descendingComparator(idString1, idString2)
    }

    if(orderBy === "Gender"){
        let idString1 = employee1.gender
        let idString2 = employee2.gender
        return descendingComparator(idString1, idString2)
    }

    if(orderBy === "Username"){
        let idString1 = employee1.login.username + "(" + employee1.login.password + ")"
        let idString2 = employee2.login.username + "(" + employee2.login.password + ")"
        return descendingComparator(idString1, idString2)
    }

    if(orderBy === "Address"){
        let idString1 = employee1.location.street.number + " " + employee1.location.street.name + ", " + 
                        employee1.location.state + ", " + employee1.location.country + ", " + 
                        employee1.location.postcode
        let idString2 = employee2.location.street.number + " " + employee2.location.street.name + ", " + 
                        employee2.location.state + ", " + employee2.location.country + ", " + 
                        employee2.location.postcode
        return descendingComparator(idString1, idString2)
    }
    return 0
}

function descendingComparator(element1, element2){
    if (element1 < element2) {
        return -1;
      }
      if (element1 > element2) {
        return 1;
      }
      return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => compareString(a, b, orderBy)
    : (a, b) => -compareString(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  { id: 'ProfilePicture', numeric: false, disablePadding: true, label: 'ProfilePicture' },
  { id: 'Id', numeric: false, disablePadding: true, label: 'ID' },
  { id: 'Name', numeric: false, disablePadding: false, label: 'Name' },
  { id: 'Email', numeric: false, disablePadding: false, label: 'Email' },
  { id: 'Phone', numeric: true, disablePadding: false, label: 'Phone/Cell' },
  { id: 'Nationality', numeric: false, disablePadding: false, label: 'Nationality' },
  { id: 'DOB', numeric: false, disablePadding: false, label: 'Date Of Birth' },
  { id: 'Gender', numeric: false, disablePadding: false, label: 'Gender' },
  { id: 'Username', numeric: false, disablePadding: false, label: 'Username (Password)' },
  { id: 'Address', numeric: false, disablePadding: false, label: 'Address' },
];

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

function EnhancedTableHead(props) {
  const { classes, order, orderBy, onRequestSort } = props;

  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <StyledTableCell
            key={headCell.id}
            align= 'left'
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >

            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ?  (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </StyledTableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: { 
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
}));

export default function EnhancedTable(inputemployeeData) {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('Id');
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
 
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };


  const emptyRows = rowsPerPage - Math.min(rowsPerPage, inputemployeeData.employeeData.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <TableContainer style={{ maxHeight: 500 }}>
          <Table
            stickyHeader
            className={classes.table}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={inputemployeeData.employeeData.length}
            />
            <TableBody>
              {stableSort(inputemployeeData.employeeData, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((employee) => {
                  return ( 
                    <TableRow>
                        <TableCell align="left" ><img src={employee.picture && employee.picture.medium ? employee.picture.medium : ""} alt={"profilepicture"}/></TableCell>
                        <TableCell align="left" >{employee.id.name + " "+ employee.id.value}</TableCell>                      
                        <TableCell align="left" >{employee.name.title + "."+ employee.name.first + " " + employee.name.last}</TableCell>
                        <TableCell align="left" >{employee.email}</TableCell>
                        <TableCell align="left" >{employee.phone + "/" + employee.cell}</TableCell>
                        <TableCell align="left">{employee.location.country}</TableCell>
                        <TableCell align="left">{Moment(employee.dob.date).format('d MMM, YYYY') + "(" + employee.dob.age + ")"}</TableCell>
                        <TableCell align="left">{employee.gender}</TableCell>
                        <TableCell align="left">{employee.login.username + "(" + employee.login.password + ")"} </TableCell>
                        <TableCell align="left"> {employee.location ? employee.location.street.number + " " + 
                                employee.location.street.name + ", " + 
                                employee.location.state + ", " + 
                                employee.location.country + ", " + 
                                employee.location.postcode
                            : "--"}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 20]}
          component="div"
          count={inputemployeeData.employeeData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </div>
  );
}
