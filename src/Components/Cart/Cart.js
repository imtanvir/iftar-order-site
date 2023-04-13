import React from 'react';
import './Cart.css';
const Cart = ({ cart,handleCart,allItems }) => {
    let total = 0;
    for (const cartItem of cart) {
        total = total + cartItem.quantity;
    }
    const chooseForMe = () => {
        let randomIndex = Math.floor(Math.random() * allItems.length);
        let randomPick = allItems[randomIndex];
        console.log(randomPick)
        return randomPick;
    }
    return (
        <div>
            <h4 className='cart-header text-dark'>Selected Items: <span className='text-white'>{total}</span></h4>
            <div className="selected-items">
            {
                    cart.map(singleCart => (
                            <div key={singleCart.idMEal} className="position-relative single-item d-flex align-items-center">
                                <img className='rounded-circle w-25 me-3' src={singleCart.strMealThumb} alt={singleCart.strMeal} />
                                <span className="item-name">{singleCart.strMeal}</span>
                                <span className='selected-quantity text-primary position-absolute'>{singleCart.quantity}</span>
                            </div>
                    ))
            }
            </div>
            <button onClick={() => { handleCart(chooseForMe()) }} className="btn-rspnsv btn btn-light border-primary d-block w-75 p-1 mt-4 mb-2 fs-6">Choose 1 for me</button>
            <button onClick={() => localStorage.clear()} className="btn-rspnsv btn btn-light border-primary d-block w-75 p-1 fs-6">Choose Again</button>
            
        </div>
    );
};
export default Cart;