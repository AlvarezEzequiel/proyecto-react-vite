import { HeaderCart } from "./HeaderCart";
import { ProductListCart } from "./ProductListCart";
import './Carrito.css';
import { useState } from "react";

function Carrito (){

  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);

  return(
    <>
      <HeaderCart 
      allProducts = {allProducts}
      setAllProducts = {setAllProducts}
      total = {setTotal}
      setTotal = {setTotal}
      countProducts = {countProducts}
      setCountProducts = {setCountProducts}
      />
      
      <ProductListCart 
      allProducts = {allProducts}
      setAllProducts = {setAllProducts}
      total = {setTotal}
      setTotal = {setTotal}
      countProducts = {countProducts}
      setCountProducts = {setCountProducts}
      />
    </>
  )
}
export default Carrito;