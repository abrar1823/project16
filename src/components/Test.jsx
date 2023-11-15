import React from "react";
import { useSelector } from "react-redux";

const Test = () => {
  const selProds = useSelector((state) => state.productReducer.filtProd);

  return (
    <div>
      <h1>Test</h1>
      <h1>{selProds}</h1>
    </div>
  );
};

export default Test;
