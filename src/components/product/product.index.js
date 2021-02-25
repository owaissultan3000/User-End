import React from "react";
import Card from "./card";

const Product = (props) => {
  return (
    <div className="container">
      <div className="row">
        <Card ProductData={props.ProductData} />
      </div>
    </div>
  );
};

export default Product;
