import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';
import Error from './Error';
import EnhancedTable from './EmployeeDirectoryTable'
import SearchItem from './Search';


const ListingPage = (props) => {
	const [characterdata, setCharacterData] = useState({ data: null, loading: true });
	const [errorData, setErrorData] = useState({ data: false });
	const [searchTerm, setSearchTerm] = useState();
	const [searchedEmployeedata, setSearchedEmployeedata] = useState();
	
	
	const url = `https://randomuser.me/api/?results=5000`;

	const useAxios = (url) => {
		useEffect(() => {
			setCharacterData((data) => ({ data: data, loading: true }));
			axios.get(url).then(({ data }) => {
				setCharacterData({ data: data.results, loading: false });
			})
				.catch(err => {
					setErrorData({ data: true });
				})
		}, []);
		return characterdata;
	};

	const updateSearchEmployee = async (searchedEmployeeName) =>{
		setSearchTerm(searchedEmployeeName)
		const filteredEmployee = characterdata.data
        						.filter(employee =>  employee.name && employee.name.first ?
									employee.name.first.toLowerCase().includes(searchedEmployeeName.toLowerCase()) : false)
        						.map(employee => employee)
		setSearchedEmployeedata(filteredEmployee)
	}

	let {loading } = useAxios(url);

	if(searchTerm && searchedEmployeedata && searchedEmployeedata.length > 0){
		return(
			<div>
			<SearchItem searchValue = {updateSearchEmployee} />
				<br />
				<br />
			<EnhancedTable employeeData = {searchedEmployeedata}/>
			</div>
		);
	} 
	
	if (errorData.data || (!loading && Object.keys(characterdata.data).length === 0)) {
		return (
			<div> <Error /> </div>
		);
	}

	if (loading) {
		return (
			<div>
				<h2>Loading....</h2>
			</div>
		);
	} else {
		return (
			<div>
				<SearchItem searchValue = {updateSearchEmployee} />
				<br />
				<br />
				<EnhancedTable employeeData = {characterdata.data}/>
			</div>

		);
	}
};

export default ListingPage;