import React, { Children } from "react";

const Product = (props) => {
  return (
    <div>
<p>Product name:{props.tile}</p> 
<p onClick={props.click}>product price</p>
<p>{props.Children}</p>
<input type="text" onChange={props.Change}></input>
   </div>
  );
};

export default Product;
