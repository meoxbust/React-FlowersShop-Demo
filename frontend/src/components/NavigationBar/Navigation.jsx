import { Link, useLocation } from "react-router-dom";
import "./Navigation.css"

const menu = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "Flowers",
        path: "/flowers"
    },
    {
        name: "My Cart",
        path: "/cart",
    }
]

const Navigation = () => {
    const location = useLocation();
    return ( 
        <>
        <nav className="nav-bar">
            <div className="nav-bar-logo">
                Kiwi
            </div>
            <div className="nav-bar-link">
            {
                menu.map((item) => <Link style={{color: location.pathname === item.path ? "#027373": "#807B7B", fontWeight:600}} to={item.path}>{item.name}</Link>)
            }
            </div>
        </nav>
        </>
    );  
}
export default Navigation;