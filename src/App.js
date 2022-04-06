import React, { useContext } from "react"
import { Routes, Route } from "react-router-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { ContextProvider } from "./Context"
import "./styles.css"
import Context from "./Context"


import Header from "./components/Header"
import Cart from "./pages/Cart"
import Photos from "./pages/Photos"
import Favorites from "./pages/Favorites"

function App() {


    return (
        <Router>
            <ContextProvider>


                <div>
                    <Header />

                    <Routes>
                        <Route exact path="/" element={<Photos />} />

                        <Route path="/Favorites" element={<Favorites />} />

                        <Route path="/cart" element={<Cart />} />

                    </Routes>
                </div>
            </ContextProvider>
        </Router >

    )
}

export default App