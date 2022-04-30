import React from 'react';
import { useParams } from 'react-router-dom';
import useProductDetails from '../../../Hooks/useProductDetails';

const ProductDetail = () => {
  const {productId} = useParams();
  const [product] = useProductDetails(productId);
  const {_id, itemName, imgLink, description, price, quantity, supplierName} = product;

  return (
    <div className='container'>
      <div className="row">
        <div className="col-12 col-md-5 col-lg-5">
          <img src={imgLink} style={{width:'300px'}} alt="" />
        </div>
        <div className="col-12 col-md-5 col-lg-5">
          <h5>{itemName}</h5>
          <p>{description}</p>
          <p><small className='fw-bold'>Supplier: </small>{supplierName}</p>
          
          <button className='' id='custom-btn'>Delivered</button>
          <div className="">
            <input className='w-25' type="number" name="restock" id="" />
            <button className='btn btn-danger'>Restock</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;