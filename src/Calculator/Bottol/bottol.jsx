import Proptypes from 'prop-types'
import './bottol.css'

const Bottol = ({bottole, handleorder}) => {
    const {name, img, price} = bottole;
    return (
        <div className='bottole' >
            <h3>Bottole: {name}</h3>
            <img src={img} alt="" />
            <h3>price:{price}</h3>
            <button onClick={() => handleorder(bottole)}>Click</button>
        </div>
    );
};

Bottol.propTypes = {
    bottole: Proptypes.object.isRequired,
    handleorder: Proptypes.func.isRequired
}

export default Bottol;