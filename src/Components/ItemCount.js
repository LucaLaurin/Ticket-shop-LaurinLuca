import { useEffect, useState } from 'react';

const ItemCount = ({ stock = 0, initial = 1, onAdd }) => {
    const [numero, setNumero] = useState(0);

    useEffect(() => {
        setNumero(initial);
    },[]);

    const increment = () => {
        if (numero < stock) {
            setNumero(numero +1);
        }
    }

    const decrement = () => {
        if (numero > initial) {
            setNumero(numero - 1);
        }
    }
 
    return (
        <div>
            <button onClick={increment}> + </button> {numero} 
            <div> {numero} </div> 
            <button onClick={decrement}> - </button> {numero} 
            {
                stock
                ?  <button onClick={() => onAdd(numero)}> Add to Cart </button>
                :  <button disable> Add to Cart </button>
            }
        </div>
    );
}

export default ItemCount;