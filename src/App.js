import React from 'react';
import './App.css';
import Error from './components/Error';
import Home from './components/Home';
import ListingPage from './components/ListingPage';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
			<div className='App'>
        <header className='App-header'>
					<h1 className='App-title'>......PostLight Employees Directory......</h1>
					<Link className = 'App-link' to='/'>Home	</Link>
          <Link className = 'App-link' to='/employees/'>Employees</Link>
				</header>
				<br />
				<br />
        <Switch>      
        <Route  path='/' exact component={Home} />
		 			<Route  path='/employees/' exact component={ListingPage} /> 
          <Route path='*' exact component={Error} status={404} />
        </Switch>		   		
			</div>
		</Router>
    
  );
};

export default App;
