import React, { useState, useContext } from "react"
import PropTypes from "prop-types"

import Context from "../Context"
import useHover from "../hooks/useHover"

function Image({ className, img }) {
    const [hovered, ref] = useHover()
    const [clickedImg, setClickedImg] = useState(false)

    const { toggleFavorite, addToCart, cartItems, removeFromCart, display, value } = useContext(Context)

    function toggleClickedImg() {
        setClickedImg((prevclickedImg) => !prevclickedImg)

    }

    function heartIcon() {

        if (img.isFavorite) {
            return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)}></i>
        } else if (hovered) {
            return <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>
        }
    }

    function cartIcon() {

        const alreadyInCart = cartItems.some(item => item.id === img.id)
        if (alreadyInCart) {
            return <i className="ri-shopping-cart-fill cart " onClick={() => removeFromCart(img.id)}></i>
        } else if (hovered) {
            return <i className="ri-add-circle-line cart" onClick={() => addToCart(img)}></i>
        }
    }


    return (
        // <div
        //     className={`${className} image-container`} onClick={toggleClickedImg}
        //     ref={ref}
        // >


        <div

            className={`${className} image-container `}
            ref={ref}
        >

            <img src={img.url} className={`image-grid`} onClick={toggleClickedImg} />

            {/* {display && clickedImg &&


                <img src={img.url} className={`clicked-photo-popup image-container`} onClick={toggleClickedImg} />


            } */}
            {heartIcon()}
            {cartIcon()}

        </div >




    )
}

Image.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
}

export default Image


// className={`${className} image-container`} onClick={togglePopup}
// ref={ref}
// >
// <div>

//     {isOpen && <Popup
//         content={
//             <img src={img.url} className={`image-grid`} />
//         }
//         handleClose={togglePopup}
//     />}
// </div>
// <img src={img.url} className={`image-grid`} />
// {/* {clickedImg && <img src={img.url} className={` clicked-photo-popup`} />} */}
// {heartIcon()}
// {cartIcon()}
// </div >