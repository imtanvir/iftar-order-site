import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Product.css'; 
const Product = ({itemDetails,handleCart,product}) => {
    const { strMealThumb, strMeal, idMeal } = itemDetails;
    return (
        <div>
            <div className="product-single-item p-2 m-2">
                <img style={{ width: '100%' }} src={strMealThumb} alt="food Items" />
                <h5 className='mt-3 mb-2'>{strMeal}</h5>
                <button onClick={()=>{handleCart(product)}} className="addToLh w-100 btn btn-primary fs-6">Add to cart <FontAwesomeIcon icon={faCartPlus} /> </button>
            </div>
        </div>
    );
};

export default Product;