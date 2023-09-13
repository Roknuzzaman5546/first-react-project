import { useEffect, useState } from "react";
import Bottol from "../Bottol/bottol";
import './Bottols.css'
import { addDataLs, inputData, removeLs } from "../../utilitys/utility";
import Cart from "./cart";

const Bottols = () => {
    const [bottols, setBottls] = useState([])
    const [order, setorder] = useState([])

    useEffect(() => {
        fetch('Watchs.js')
        .then(res => res.json())
        .then(data => setBottls(data))
    }, []); 

    useEffect(() => {
        if(bottols.length){
            const soterCart = inputData();
            const savecart = [];
            for(const id of soterCart){
                console.log(id);
                const bottole = bottols.find(bottole => bottole.id == id);
                if(bottole){
                    savecart.push(bottole);
                }
            }
            setorder(savecart);
        }
    }, [bottols]);
    
    const handleorder = bottole => {
        const newbottole = [...order, bottole];
        setorder(newbottole);
        addDataLs(bottole.id);
    }

    const handleremovefromcart = id => {
        const cartremaing = order.filter(bottole => bottole.id !== id);
        setorder(cartremaing);
        removeLs(id);
    }

    return (
        <div>
            <h3>Bottles {bottols.length}</h3>
            <h3>Cart {order.length}</h3>
            <Cart cart={order} handleremovefromcart={handleremovefromcart}></Cart>
            <div className="bottols">
                {
                    bottols.map(bottole => <Bottol 
                        key={bottole.id}
                        bottole={bottole}
                        handleorder={handleorder}
                        ></Bottol>)
                }
            </div>
        </div>
    );
};

export default Bottols;