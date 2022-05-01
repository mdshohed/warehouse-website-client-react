
import { useEffect, useState } from "react";

const useProductDetails = (productId) =>{
  const [product, setProduct] = useState({});

  useEffect(()=>{
    const url = `https://salty-escarpment-11127.herokuapp.com/product/${productId}`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>setProduct(data));
  },[productId]);  

  return [product,setProduct]; 
}
export default useProductDetails;