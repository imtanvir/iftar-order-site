import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getStoredCart } from '../ShopDB/ShopDB';

const Shop = () => {
    const [foods, setFoods] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setFoods(data.meals))
        
    }, [foods]);
    useEffect(() => {
        const storedCart = getStoredCart();
        const saveCart = [];
        for (const id in storedCart) {
            const addedProduct = foods.find(food => food.idMeal === id);
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                saveCart.push(addedProduct);
            }
        }
        setCart(saveCart)
    },[foods])
    const handleCart = (product) => {
        const newArray = [...cart, product];
        setCart(newArray);
        addToDb(product.idMeal);
    }
    return (
        <div>
            <div className="food-item-box d-flex">
            <div className="container shop_items pt-2 pb-5" style={{width:"80%"}}>
                {
                   foods.map(food =><Product product={food} handleCart={handleCart} itemDetails={food} key={food.idMeal}></Product>)
                }
            </div>
            <div className="cart-container bg-warning p-3" style={{width:"20%"}}>
                <Cart allItems={foods} handleCart={handleCart} cart={cart}></Cart>
            </div>
            </div>
        </div>
    );
};

export default Shop;
// https://www.themealdb.com/api/json/v1/1/filter.php?a=British