import React from 'react';
import { makeStyles} from '@material-ui/core';

const useStyles = makeStyles({
	searchBar: {
		width: '50%',
		height : 40,
		marginLeft: 'auto',
		marginRight: 'auto',
		borderRadius: 5,
		border: '1px solid #1e8678',
		boxShadow: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);'
	},
});
const SearchItem = (props) => {
	const classes = useStyles();
	const handleChange = (e) => {
		props.searchValue(e.target.value);
	};
	return (
		<form
			method='POST'
			onSubmit={(e) => {
				e.preventDefault();
			}}
			name='formName'
			className='center'
		>
			<label>
				<span>Search : </span>
				<input class = {classes.searchBar}
						placeholder='Search by Employee`s first name'
						autoComplete='off' type='text' 
						name='searchTerm' onChange={handleChange} />
			</label>
		</form>
	);
};

export default SearchItem;
