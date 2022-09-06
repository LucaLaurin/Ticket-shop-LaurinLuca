import ItemCount from "./ItemCount";

const ItemListContainer = ({greeting}) => {

    return (
        <div>
         <div>{greeting}</div>
         <ItemCount />  
        </div>
    );
}

export default ItemListContainer;