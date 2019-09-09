import React from 'react'


class Productform extends React.Component{
	
	render(){
		return(
		<form>
		    <h4>Enter a +'new'+ Product</h4>
			<label>Name
			    <input type="text" name="name"/>
			</label>
            <label>Category</label>
            <input type="text" name="category"/>
            <label>Price</label>
            <input type="text" name="price"/>
            <label>In stock?</label>
            <input type="text"  name="stocked"/>
            <input type="submit" value="submit"/>
        </form>);
	}
}

export default Productform;