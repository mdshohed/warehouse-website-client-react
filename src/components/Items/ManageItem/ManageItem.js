
import React from 'react';
import { Table, ToastContainer } from 'react-bootstrap';
import useProducts from '../../../Hooks/useProducts';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import Delete from '../../../images/logos/delete.png'; 
import useItems from '../../../Hooks/useItems';
import { toast } from 'react-toastify';

const ManageItem = () => {
  const [items, setItems] = useItems();

  

  const handleItemDelete = async(id) =>{
    const proceed = window.confirm('Are you sure you want to delete this Product'); 
    if(proceed) {
      const url = `https://salty-escarpment-11127.herokuapp.com/items/${id}`;
      fetch(url,{
        method: 'DELETE'
      })
      .then(res=>res.json())
      .then(data=>{  
        const remaining =  items.filter(item=>item._id !== id);
        setItems(remaining); 
        toast('Successfully deleted'); 
      })
    }  
  }
  
  return (
    <div className='container'>
      <PageTitle title={"Manage Items"}></PageTitle>
      <h2>All delivered list: {items.length}</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th className='text-center'>Image</th>
            <th className='text-center'>Name</th>
            <th className='text-center'>Email</th>
            <th className='text-center'>Price</th>
            <th className='text-center'>Supplier</th>
            <th className='text-center'>Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            
            items.map(item=>
            // item = items.filter(t=>t.itemName===val.itemName)
            <tr>
              <td className='text-center'><img src={item.imgLink} style={{width:'100px'}} alt="" /></td>
              <td className='text-center'>{item.itemName}</td>
              <td className='text-center '>{item.email===null? <h5 className='text-danger'>Social Login</h5>: item.email}</td>
              <td className='text-center'>{item.price}</td>
              <td className='text-center'>{item.supplierName}</td>
              <td className='text-center'> <button className='btn btn-danger px-3'  onClick={()=>handleItemDelete(item._id)}> <img style={{width:'25px'}} src={Delete} alt="" /> </button></td>
            </tr>
            )
          }
        </tbody>
      </Table>
      <ToastContainer />
    </div>
  );
};

export default ManageItem;