import React from 'react';
import logo from './logo.svg';
import Products from './Product.js'
import './App.css';

class App extends React.Component{
	render(){
		return(
		<div>
		    <header className="app-header"><h1>My product list application</h1></header>
			<section>
			    <Products/>
			</section>
		</div>
		);
	}
}

export default App;
