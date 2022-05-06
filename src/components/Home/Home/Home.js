import React from 'react';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import Loading from '../../Shared/Loading/Loading';
import useProducts from '../../../Hooks/useProducts';
import { useNavigate } from 'react-router-dom';
import Banner from '../Banner/Banner'; 
import Contact from '../Contact/Contact';
import WareHouseSuccess from '../WareHoueSuccess/WareHouseSuccess';

const Home = () => {
  const [products, sertProducts] = useProducts(); 
  const navigate = useNavigate();
  const {_id, itemName, imgLink, description, price, quantity, supplierName} = products; 

  const navigateToProductDetails = (id) =>{
    navigate(`/product/${id}`);  
  }
  const navigateToProduct = () =>{
    navigate('/product'); 
  }
  return (
    <div className=''>
      <PageTitle title={"Home"}></PageTitle>
      <div className="container">
        <Banner></Banner>
        <div className="">
          <h3 className='text-center text-info m-3'>Warehouse Product list:</h3>
          <div className="product-container">
          {
            products.map(product=>
              <div className='container product-card bg-white' >
                <div className="row p-2" >
                  <div className="col-5 col-md-5 col-lg-5">
                    <img className='img-fluid' style={{width: '170px'}} src={product.imgLink} alt="" />
                  </div>
                  <div className="col-7 col-md-7 col-lg-7" style={{height:'220px'}}>
                    <h5>{product.itemName}</h5>
                    <p>{product.description}</p>
                    <p><span className='fw-bold'>Price:</span>{product.price}</p>
                    <p> <span className='fw-bold'>Quantity:</span> {product.quantity}</p>
                    <p><span className='fw-bold'>Supplier Name:</span> {product.supplierName}</p>
                  </div>
                </div>
                <div className="">
                  <button className='btn btn-primary mb-2 w-50 me-3' id='custom-btn' onClick={()=>navigateToProductDetails(product._id)}>Stock Update</button>
                </div>
              </div>
            )
          }
          </div>
          <div className="text-center m-3 ">
            <button onClick={navigateToProduct} className='btn w-25' id='custom-btn'>All Products</button>
          </div>
        </div>
      </div>
      <WareHouseSuccess></WareHouseSuccess>
      <Contact></Contact>
    </div>
  );
};

export default Home;