import { CartContext } from "../Contexts/CartContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css"
const Cart = () => {
    const {myCart, totalPrice, addToCart, setTotalPrice} = useContext(CartContext);
    const resetCart = () => {
        setTotalPrice(0);
        addToCart([{}]);
    }
    const navigate = useNavigate();
    const backHome = () => {
        navigate("/")
    }
    return ( 
        <>
            <section className="cart-container">
                <div className="cart-header">CHECKOUT:</div>
                <div className="cart-items">
                    {myCart.slice(1).map((cart) => {
                        return (
                            <div className="cart-item">
                                <img src={cart.imageUrl} alt={cart.name} className="cart-item-img"/>
                                <div className="cart-item-info">
                                    {cart.name}: {cart.price}$
                                </div>
                            </div>
                        );
                    })}
                    {totalPrice ? (
                        <div className="separate-line"></div>
                    ) : (<div className="none-display"></div>)}
                    <div className="cart-item-total-box"><div className="cart-total">Total: {totalPrice}$</div></div>
                </div>
                <button className="cart-done" onClick={resetCart}>DONE</button>
                <button className="cart-return-home" onClick={backHome}>Return Home</button>
            </section>
        </>
    );
}
export default Cart;