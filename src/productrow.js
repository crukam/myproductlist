import React from 'react';
import './productrow.css';

class Productrow extends React.Component{
	render(){
		return(
		<tr>
		   <td>
		       <span className={this.props.product.stocked ? '' : 'productrow-out-of-stock'}>
                   {this.props.product.name}
               </span>
		   </td>
		   <td>
		       {this.props.product.price}
		   </td>
		   <td>
		       <button onclick={this.removeItem}>x</button>
		   </td>
		</tr>
		);
	}
}
export default Productrow;