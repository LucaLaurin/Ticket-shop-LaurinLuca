import Item from "./Item";

const ItemList = ({ items }) => {
    return (
        <div>
        {
            items.length > 0
            ? items.map(item => <Item key={item.id} id={item.id} title={item.name} price={item.cost}  stock={item.stock} />) 
            : <p> Cargando... </p>
        }
        </div>
    );
}

export default ItemList; 