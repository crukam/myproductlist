import React from 'react';

class Productfilters extends React.Component
{
	render(){
		return(
		<form>
		 <input type="text" placeholder="search..." value= {this.props.searchText}/>
		  <div >
				<input type="checkbox" checked={this.props.instockcheckbox}/> only show products in stock
		  </div>
		</form>
		);
	}
}
export default Productfilters;