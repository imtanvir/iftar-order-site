
const addToDb = (id) => {
        let shoppingCart;
        const isExist = localStorage.getItem('shoppingCart');
        if (isExist) {
            shoppingCart = JSON.parse(isExist);
        } else {
            shoppingCart = {};
        }
    
        const quantity = shoppingCart[id];
        if (quantity) {
            const newQuantity = quantity + 1;
            shoppingCart[id] = newQuantity;
        } else {
            shoppingCart[id] = 1;
        }
        localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
            let total = 0;
        for (let ValueIs in shoppingCart) {
            total = total + shoppingCart[ValueIs];
        }
        console.log(total);
        setCartData(total);
    }
    const setCartData = (value) => {
        localStorage.setItem('selectedItemTotal', JSON.stringify(value));
    }
    const getCartData = () => {
        const o = localStorage.getItem('selectedItemTotal');
    }
const getStoredCart =() => {
    let shoppingCart;
    const isExist = localStorage.getItem('shoppingCart');
    if (isExist) {
        shoppingCart = JSON.parse(isExist);
    } else {
        shoppingCart = {};
    }
         return shoppingCart;
    }
export {addToDb,getCartData,getStoredCart};