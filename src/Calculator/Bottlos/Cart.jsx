import PropTypes from 'prop-types'
import './Bottols.css'
const Cart = ({cart, handleremovefromcart}) => {
    return (
        <div>
            <h3>cart: {cart.length}</h3>
            <div className="cart-container">
                {
                    cart.map(bottole => 
                    <div key={bottole.id}>
                        <img src={bottole.img} ></img>
                        <button onClick={() => handleremovefromcart(bottole.id)}>Remove</button>
                    </div>)
                }
            </div>
            
        </div>
    );
};
Cart.propTypes = {
    cart: PropTypes.array.isRequired,
    handleremovefromcart: PropTypes.func.isRequired
}

export default Cart;