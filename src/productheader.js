import React from 'react';
import './productheader.css'



class Productheader extends  React.Component
{
	render(){
		return(
		<th>
	       {this.props.column}
           <button className="productheader">&#x25B2;</button>
           <button>&#x25BC;</button>
		</th>
		);
	}
}

export default Productheader;