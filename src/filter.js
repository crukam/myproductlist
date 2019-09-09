import React from 'react';

class Productfilters extends React.Component
{
	render(){
		return(
		<form>
		 <input type="text" placeholder="search..."/>
		  <div >
				<input type="checkbox"/> only show products +'in'+ stock
		  </div>
		</form>
		);
	}
}
export default Productfilters;