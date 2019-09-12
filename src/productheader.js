import React from 'react';
import './productheader.css'



class Productheader extends  React.Component
{
	render(){
		let currentSortingButton = this.props.sortingType.column===this.props.column? this.props.sortingType.direction:false;
		return(
		<th>
	       {this.props.column}
           <button className= {currentSortingButton==='asc' ? 'productheader': ''}>&#x25B2;</button>
           <button className= {currentSortingButton==='desc' ? 'productheader': ''}>&#x25BC;</button>
		</th>
		);
	}
}

export default Productheader;