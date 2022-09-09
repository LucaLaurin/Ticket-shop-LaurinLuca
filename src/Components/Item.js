import React from 'react'
const Item = ({stock, name, pictureUrl }) => {
    return (
        <div>
            <div/> src={pictureUrl} 
            <div>
                <div>
                    <div />{name} 
                    <div />{stock} unid.
                </div>
                <div style={{cursor: "pointer"}}>
                </div>
            </div>
        </div>
    );
}

export default Item;