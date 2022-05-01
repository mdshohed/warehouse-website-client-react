import PageTitle from '../../Shared/PageTitle/PageTitle';
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import product from '../../../images/logos/product.png'

const AddItem = () => {
  const navigate = useNavigate(); 
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) =>{
    const url = `https://salty-escarpment-11127.herokuapp.com/products`; 
    fetch(url,{
      method: 'POST', 
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(data=>{
      toast("successfully added product")
    });  
    reset(); 
  };

  const navigateToAllProducts = () =>{
    navigate('/product'); 
  }

  return (
    <div className='container border-2'>
      <PageTitle title={"Add Product"}></PageTitle>
      <div className="">
      <div className="product-title">
        <h3 className='text-info'>Add Items</h3>
        <button onClick={navigateToAllProducts} className='btn btn-info me-5'><img className='mb-1 me-2' style={{width:'20px'}} src={product} alt="" />All Product</button>
      </div> <hr />
        <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column w-50 mx-auto border p-5 rounded">
          <input className='mb-3 p-1' type="text" name="itemName" placeholder='Item Name' {...register("itemName", { required: true })}/>
          <input className='mb-3 p-1' type="text" name="imgLink" placeholder='Image URL' {...register("imgLink", { required: true })}/>
          <input className='mb-3 p-1' type="textarea" name="description" placeholder='Product Description' {...register("description", { required: true })}/>
          <input className='mb-3 p-1' type="number" name="price" placeholder='Product Price' {...register("price", { required: true })}/>
          <input className='mb-3 p-1' type="number" name="quantity" placeholder='Quantity' {...register("quantity", { required: true })}/>
          <input className='mb-3 p-1' type="text" name="supplierName" placeholder='Supplier Name' {...register("supplierName", { required: true })}/>
          <input type="submit" value="Add Item" className='btn btn-primary' />
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddItem;