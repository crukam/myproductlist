import React from 'react'


class Productform extends React.Component{
	
	render(){
		return(
		<form>
		    <h3>Enter a new Product</h3>
			<div>
			    <label>Name <br/>
			        <input type="text" name="name"/>
				</label>
				
			</div>
			<div>
                <label>Category <br/> 
                    <input type="text" name="category"/>
				</label>
			</div>
			<div>
                <label>Price <br/> 
			        <input type="text" name="price"/>
				</label>
			</div>
			<div>
                <label>In stock? <br/>
                    <input type="text"  name="stocked"/>
				</label>
			</div>
            <input type="submit" value="submit"/>
        </form>);
	}
}

export default Productform;