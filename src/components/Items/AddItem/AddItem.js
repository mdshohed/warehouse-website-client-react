import PageTitle from '../../Shared/PageTitle/PageTitle';
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const AddItem = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) =>{
    const url = `http://localhost:5000/products`; 
    fetch(url,{
      method: 'POST', 
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(data=>{
      toast("successfully added product");
      
    });  
    reset(); 
  };

  // const handleAddProducts = event =>{
  //   event.preventDefault(); 
  //   const product = {
  //     itemName: event.target.itemName.value,
  //     imgLink: event.target.imgLink.value,
  //     description: event.target.description.value,
  //     price: event.target.price.value,
  //     quantity: event.target.quantity.value,
  //     supplierName: event.target.supplierName.value,
  //   }
  //   axios.post('http://localhost:5000/products', product)
  //   .then(res=>{
  //     const {data} = res;
  //     if(data.insertedId){
  //       toast("successfully added product");
  //       console.log(data);
  //       event.target.reset(); 
  //     }
  //   })
  // }

  return (
    <div className='container border-2'>
      <PageTitle title={"Add Product"}></PageTitle>
      <div className="">
        <h4 className='mt-5'>Add Items</h4><hr />
        <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column w-50 mx-auto">
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