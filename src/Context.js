import React, { useState, useEffect } from "react"


const Context = React.createContext()

function ContextProvider({ children }) {
    const [allPhotos, setAllPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])
    const [clickedImg, setClickedImg] = useState(false)

    const [display, setDisplay] = useState(true)

    function changeDisplay() {
        setDisplay(prevDisplay => !prevDisplay)
        console.log(display)
    }

    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setAllPhotos(data))
    }, [])

    function toggleFavorite(id) {
        toggleClickedImg()
        const updatedArr = allPhotos.map(photo => {
            if (photo.id === id) {
                return { ...photo, isFavorite: !photo.isFavorite }
            }
            return photo
        })

        setAllPhotos(updatedArr)
    }

    function addToCart(newItem) {
        setCartItems(prevItems => [...prevItems, newItem])
    }

    function removeFromCart(id) {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id))
    }

    function emptyCart() {
        setCartItems([])
    }


    function toggleClickedImg() {
        setClickedImg((prevclickedImg) => !prevclickedImg)

    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [value, setValue] = React.useState(95);


    return (
        <Context.Provider value={{
            allPhotos,
            toggleFavorite,
            cartItems,
            addToCart,
            removeFromCart,
            emptyCart,
            changeDisplay,
            display,
            value,
            handleChange
        }}>
            {children}
        </Context.Provider>
    )
}
export default Context
export { ContextProvider }