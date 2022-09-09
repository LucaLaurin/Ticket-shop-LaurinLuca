import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import customFetch from "../Other/customFetch";
import { useEffect, useState } from "react";
const { products } = require('../Other/products');


const ItemListContainer = ({greeting}) => {
    const[datos, setDatos] = useState([]);

    useEffect(() => {
        customFetch(2000, products)
            .then(result => setDatos(result))
            .catch(err => console.log(err))
    }, []);

    const onAdd = (qty) => {
        alert("Seleccionaste " +qty+ " items.");
    }

    return (
        <div>
         <div>{greeting}</div>
         <ItemList items={datos} />  
         <ItemCount stock={5} initial={0} onAdd={onAdd} />  
        </div>
    );
}

export default ItemListContainer;