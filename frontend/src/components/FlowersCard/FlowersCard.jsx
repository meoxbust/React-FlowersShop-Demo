import { useContext, useState } from "react";
import { CartContext } from "../Contexts/CartContext";
import "./FlowersCard.css"
const FlowersCard = (props) => {
    const {flower} = props;
    const {addToCart, setTotalPrice} = useContext(CartContext);
    const [isAdded, setIsAdded] = useState(false);
    const handleClick = () => {
        setIsAdded(true)
        const pickedItem = {
            id: flower.id,
            name: flower.name,
            description: flower.description,
            imageUrl: flower.imageUrl,
            price: flower.price,
        };
        addToCart((item) => [...item, pickedItem]);
        setTotalPrice((total) => (total += pickedItem.price));
    }
    return (
        <>
            <section className="flower-card">
                <div className="flower-card-img"><img src={flower.imageUrl} alt="MAUVE FREESIA" /></div>
                <div className="flower-card-content">
                    <div className="flower-card-detail">
                        <h2 className="flower-card-name">{flower.name}</h2>
                        <p className="flower-card-desc">{flower.description}</p>
                    </div>
                    <div className="flower-card-price-and-buy">
                        <h3 className="flower-card-price">{flower.price}$</h3>
                        {isAdded ? (
                            <button className="flower-card-buy-btn-disabled">Added</button>
                        ) : (
                            <button className="flower-card-buy-btn" onClick={handleClick}>Add To Cart</button>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}
export default FlowersCard;