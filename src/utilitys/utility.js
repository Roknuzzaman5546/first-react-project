const inputData = () => { 
    const stringCart = localStorage.getItem('cart');
    if(stringCart){
        return JSON.parse(stringCart)
    }
    return [];
}

const pusedataToLs = (cart) =>{
    const cartStrifyed = JSON.stringify(cart);
    localStorage.setItem('cart', cartStrifyed);
}

const addDataLs = (id) =>{
    const cart = inputData();
    cart.push(id);
    pusedataToLs(cart);
}

const removeLs = id => {
    const cart = inputData();
    const remaing = cart.filter(idx => idx !== id)
    pusedataToLs(remaing);
}

export { addDataLs, inputData, removeLs};