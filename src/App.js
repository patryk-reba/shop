import React from "react"
import { Routes, Route } from "react-router-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { ContextProvider } from "./Context"
import "./styles.css"

import Header from "./components/Header"
import Cart from "./pages/Cart"
import Photos from "./pages/Photos"

function App() {
    return (
        <Router>
            <ContextProvider>


                <div>
                    <Header />
                    <Routes>
                        <Route exact path="/" element={<Photos />} />



                        <Route path="/cart" element={<Cart />} />

                    </Routes>
                </div>
            </ContextProvider>
        </Router >

    )
}

export default App