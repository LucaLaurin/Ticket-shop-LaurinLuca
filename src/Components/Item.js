
const Item = () => {
    return (
        <div>
            <div>
                <div>
                    <div />{stock} unid.
                </div>
                <div style={{cursor: "pointer"}}>
                    <Link to={`/item/${id}`}><InfoOutlined />Details</Link>
                </div>
            </div>
        </div>
    );
}

export default Item;