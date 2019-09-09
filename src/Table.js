import React from 'react';
import Productheader from './productheader.js';
import Productrow from './productrow.js';

class Producttable extends React.Component{
	render(){
		let productstoArray=Object.keys(this.props.products).map((pid)=>this.props.products[pid]);
		let rows=[];
		productstoArray.forEach((product)=>{rows.push(<Productrow product={product} key={product.id}></Productrow>);});
		return(
		<div>
		    <table>
			    <thead>
				    <tr>
		                <Productheader column="name"></Productheader>
		                <Productheader column="price"></Productheader>
					</tr>
				</thead>
		        <tbody>{rows}</tbody>
			</table>
		</div>
		);
	}
}
export default Producttable;