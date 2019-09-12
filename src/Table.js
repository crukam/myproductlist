import React from 'react';
import Productheader from './productheader.js';
import Productrow from './productrow.js';

class Producttable extends React.Component{
	constructor(props){
		super(props);
		this.state={sort:{column:'name', direction:'asc'}};
		this.sortCallbackbykey=this.sortCallbackbykey.bind(this);
	}
	sortCallbackbykey(objectA, objectB){
		let isDesc = this.state.sort.direction === 'desc' ? -1 : 1;
        let [a, b] = [objectA[this.state.sort.column], objectB[this.state.sort.column]];
        if (this.state.sort.column === 'price') {
        [a, b] = [a, b].map((value) => parseFloat(value.replace(/[^\d\.]/g, ''), 10));
        }
        if (a > b) {
          return 1 * isDesc;
        }
        if (a < b) {
          return -1 * isDesc;
        }
        return 0;

   	}
	sortProductArray()
	{
		let productstoArray=Object.keys(this.props.products).map((pid)=>this.props.products[pid]);
		return productstoArray.sort(this.sortCallbackbykey);
	}
	render(){
		
		let rows=[];
		this.sortProductArray().forEach((product)=>{ 
		                                              if(product.name.indexOf(this.props.searchText)===-1 || (!product.stocked && this.props.instockcheckbox))
														  return;
		                                              rows.push(<Productrow product={product} key={product.id}></Productrow>);
										    }
								);
		
		return(
		<div>
		    <table>
			    <thead>
				    <tr>
		                <Productheader column="name" sortingType={this.state.sort}></Productheader>
		                <Productheader column="price" sortingType={this.state.sort}></Productheader>
					</tr>
				</thead>
		        <tbody>{rows}</tbody>
			</table>
		</div>
		);
	}
}
export default Producttable;