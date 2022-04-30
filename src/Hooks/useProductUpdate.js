import useProducts from "./useProducts";

const useProductUpdate = (newQuantity) => {
  const [products, setProducts] = useProducts(); 
  let {quantity} = products;
  quantity = quantity + newQuantity; 
  const updatedProduct = {quantity}; 
  const url = `http://localhost:5000/product/${id}`; 
  fetch(url,{
    method:'PUT', 
    headers:{
      'content-type': 'application/json'
    }, 
    body: JSON.stringify(updatedProduct)
  })
  .then(res=>res.json())
  .then(data=>{
    alert('users added successfully!!!'); 
    setProducts(updatedProduct); 
  }); 
  // return [products]; 
};

export default useProductUpdate;