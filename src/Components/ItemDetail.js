import ItemCount from './ItemCount';
import Spinner from './Spinner';
import { DetailCont, DetailDiv, ImgCont, Detailimg, InfoCont, Title, Desc, Price, Spindit } from './styles';

const ItemDetail = ({ item }) => {

    const onAdd = (qty) => {
        alert("Usted selecciono " + qty + " items.");
    }

    return (
        <>
        {
            item && item.image
            ? 
            <DetailCont>
                <DetailDiv>
                    <ImgCont>
                        <Detailimg src={item.image[0]} />
                    </ImgCont>
                    <InfoCont>
                        <Title>{item.name}</Title>
                        <Desc>{item.description}</Desc>
                        <Price>$ {item.cost}</Price>
                        <Desc>{item.stock} unidades en stock</Desc>
                    </InfoCont>
                    <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
                </DetailDiv>
            </DetailCont>
            : <Spindit><Spinner /></Spindit>
        }
        </>
    );
}

export default ItemDetail;