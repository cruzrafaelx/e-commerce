import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useState } from "react"
// import type { Product } from "./types"

//Contexts
import { CartProvider } from "./context/CartContent";

//Hooks
import useProducts from "./hooks/useProducts"

//Components
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"

//Pages
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart"


function App() {

  // Loading and error state, product listing from useProducts hook
  const { products, loading, error } = useProducts()

  return (
    <Router>
      <div className="min-h-screen flex flex-col">

      <CartProvider>
        {/* Render of head */}
        <Header/>
      
        <Routes>

          {/* Dynamic rendering of loading, error and main page */}
          <Route path="/" element=
            {loading ? (
              <div className="flex-1 flex flex-col justify-center items-center gap-4">
                <div className="w-10 h-10 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin "></div>
                <p className="text-gray-500">Loading products...</p>
              </div>
            ) : (
              error ? (
                <p className="flex flex-1 font-bold text-xl text-center justify-center items-center text-red-500">{error}</p>
              ) : (
                <Main products={products}/>
              )
            )}
          />

          {/* Page for single products */}
          <Route path="/products/:id" element={<ProductDetails/>}/>

          {/* Page for cart */}
          <Route path="/cart" element={<Cart products={products}/>}/>

        </Routes>
      </CartProvider>

      {/* Render of footer */}
      <Footer />
      </div>
    </Router>
  )
}

export default App

