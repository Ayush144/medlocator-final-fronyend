import React from "react";
// import list from "../data";
// import Product from "./Product";
import Cards from "./Cards";
import "../styles/amazon.css";
import { products } from "./products";

const Amazon = ({ handleClick }) => {
  return (
    <section>
      {products.map((item)=> (
        <Cards key={item.id} item={item} handleClick={handleClick} />
      ))}
    </section>
  );
};

export default Amazon;