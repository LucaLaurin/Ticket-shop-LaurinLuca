import { useState } from 'react';

const ItemCount = () => {
    const [numero, setnumero] = useState(0);
    const [stock, setStock] = useState(5);


    const handleClick = () => {
        setnumero(numero+1)
        if(numero === stock ) {
            setnumero(numero+0)
        } 
    }
    const handleClick2 = () => {
        setnumero(numero-1); 
        if(numero === 0 ) {
            setnumero(numero+0)
        }
    }
 
    return (
        <div className="item-count">
            <h3> Componente {numero} </h3>
            <button onClick={handleClick2}> - </button> {numero} 
            <button onClick={handleClick}> + </button> {numero} 
        </div>
    )
};

export default ItemCount;