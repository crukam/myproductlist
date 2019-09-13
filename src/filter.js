import React from 'react';

class Productfilters extends React.Component
{
	constructor(props){
		super(props);
		this.handleChange=this.handleChange.bind(this);
	}
	handleChange(e){
	const value= e.target[e.target.type==="checkbox"? "checked":"value"]
	const name=e.target.name;
	this.props.filter({[name]:value});
	}
	render(){
		return(
		<form>
		 <input name= "textboxfilter"type="text" placeholder="search..." value= {this.props.searchText}/>
		  <div >
				<input name= "instockOnly"type="checkbox" checked={this.props.instockcheckbox}/> only show products in stock
		  </div>
		</form>
		);
	}
}
export default Productfilters;