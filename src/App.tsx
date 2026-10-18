import axios from "axios"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react"
import type { Product } from "./types"


//Components
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"

//Pages
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart"


function App() {

  //State for products from API
  const [products, setProducts] = useState<Product[]>([])

  //State for loading pages
  const [loading, setLoading] = useState<boolean>(true)

  //State for error handling
  const [error, setError] = useState<string | null>(null)

  // State for the cart
  const [cart, setCart] = useState<Product[]>([]);

  // Function to add a product to the cart
  const handleAddToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
    console.log(`Added ${product.title} to cart. Total items in cart: ${cart.length + 1}`)
    console.log("Current cart contents:", [...cart, product]);
  };



  //Fetch data from fake API
  useEffect(() => {
    async function fetchProducts() {
        try{
            const response = await axios.get<Product[]>("https://fakestoreapi.com/products")
            
            //Main difference between fetch and axios is that axios automatically parses the response as JSON, while fetch requires you to call response.json() to parse the response.
            //It also automatically throws an error for non-2xx status codes, while fetch does not. You have to check the response.ok property to determine if the request was successful or not.

            setProducts(response.data)
            setLoading(false)
            setError(null)
            
        }

        catch(err){
            console.error("Error fetching products:", err)
            setLoading(false)
            setError(err instanceof Error ? err.message : "Something went wrong");
        }

        finally {
            setLoading(false)
        }
    }
    fetchProducts()
  }, [])
  

  return (
    <Router>
      <div className="min-h-screen flex flex-col">

        {/* Render of head */}
        <Header cartLength={cart.length}/>

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
                <Main
                  products={products} 
                  onAddToCart={handleAddToCart} />
              )
            )}
          />

          {/* Page for single products */}
          <Route path="/products/:id" element={<ProductDetails/>}/>

          {/* Page for cart */}
          <Route path="/cart" element={<Cart cart={cart}/>}/>

        </Routes>
        

        {/* Render of footer */}
        <Footer />
      </div>
    </Router>
  )
}

export default App

