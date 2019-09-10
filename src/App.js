import React from 'react';
import Products from './Product.js'
import './App.css';

class App extends React.Component{
	render(){
		return(
		<div>
		    <header className="App-header"><h1>My products list application</h1></header>
			<section>
			    <Products/>
			</section>
		</div>
		);
	}
}

export default App;
