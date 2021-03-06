import React from 'react';
import Productfilters from './filter.js';
import Producttable from './Table.js';
import Productform from  './productform.js';

var PRODUCTS = {
  '1': {id: 1, category: 'Musical Instruments', price: '£459.99', stocked: true, name: 'Clarinet'},
  '2': {id: 2, category: 'Musical Instruments', price: '£5,000', stocked: true, name: 'Cello'},
  '3': {id: 3, category: 'Musical Instruments', price: '£11,000', stocked: false, name: 'Fortepiano'},
  '4': {id: 4, category: 'Furniture', price: '£799', stocked: true, name: 'Chaise Lounge'},
  '5': {id: 5, category: 'Furniture', price: '£1,300', stocked: false, name: 'Dining Table'},
  '6': {id: 6, category: 'Furniture', price: '£100', stocked: true, name: 'Bean Bag'}
};
class Products extends React.Component{
	constructor(props){
		super(props);
		this.handleFilter =this.handleFilter.bind(this);
		this.state={products:PRODUCTS, searchText:'',instockCheckbox:false};
	}
	handleFilter(filterInput){
		this.setState(filterInput);
	}
	render()
	{
		return(
			<div>
			<Productfilters searchText={this.state.searchText} instockcheckbox={this.state.instockCheckbox} fiLter={this.handlerFilter}></Productfilters>
			<Producttable products={PRODUCTS} searchText={this.state.searchText} instockcheckbox={this.state.instockCheckbox} fiLter={this.handlerFilter}></Producttable>
			<Productform></Productform>
			</div>
		);
		
	}
	
}

export default Products;