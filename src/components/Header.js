import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { CgDisplayGrid, CgDisplayFullwidth } from "react-icons/cg";
import Context from "../Context"

function Header() {
    const { cartItems, changeDisplay, display } = useContext(Context)
    const cartClassName = cartItems.length > 0 ? "ri-shopping-cart-fill" : "ri-shopping-cart-line"
    return (
        <header>
            <Link to="/"><h2>PhotoShop</h2></Link>
            {
                display ? <CgDisplayFullwidth size={30} onClick={changeDisplay} className="display-icon" /> :
                    <CgDisplayGrid size={30} className="display-icon" onClick={changeDisplay} />
            }
            <Link to="/cart">
                <i className={`${cartClassName} ri-fw ri-2x `}></i>
            </Link>
        </header>
    )
}

export default Header
