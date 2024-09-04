import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './views/Home.jsx'
import Todos from './views/Todos.jsx'
import Products from './views/Products.jsx'
import Contact from './views/Contact.jsx'
import NotFound from './views/NotFound.jsx'
import Navbar from './component/Navbar.jsx'
import ProductDetail from './component/ProductDetail.jsx'



const Layout = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path='/todos' element={<Todos />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/product/:id" element={<ProductDetail />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<NotFound />} />

                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Layout;