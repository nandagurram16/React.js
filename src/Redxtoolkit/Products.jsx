import React from 'react';
import JsonData from '../Redxtoolkit/Data/JsonData.json';
import { useDispatch } from 'react-redux';
import { decrementcart, incrementcart } from './Reducer/CartReducer';

const Products = () => {
  const dispatch =useDispatch()
  return (
    <div className='container'>
      <div className='row'>
        {JsonData.products.map((products) => (  // Fixed typo in `products`
          <div className='col' key={products.id}>
            <div className='card m-1 text-center' style={{ width: "14rem", height: "30rem" }}>
              <img
                className='card-img-top mx-auto d-block'
                src={products.src}
                alt={products.name} // Added alt for accessibility
                style={{ width: "12rem", height: "20rem" }}
              />
              <p className='card-title'>{products.name}</p>
              <h4><p className='card-title'> Price: {products.price}</p></h4>
              <div className='card-body'>
                <button className='btn btn-primary mx-1'
                onClick={() => dispatch(incrementcart({
                  productName: products.name,
                  productPrice: products.price
                }))}>Add</button>
                <button className='btn btn-danger mx-1'
                onClick={() => dispatch(decrementcart({
                  productName: products.name,
                  productPrice: products.price
                }))}>Remove</button> {/* Changed to danger for remove */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
