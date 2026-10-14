import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import type { Product } from "./types"
import { useState, useEffect } from "react"

function App() {

  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchProducts() {
        try{
            const response = await fetch("https://fakestoreapi.com/products")
            const data = await response.json()
            setProducts(data)
            setLoading(false)
            setError(null)
        }
        catch(e){
            console.error("Error fetching products:", e)
            setLoading(false)
            setError("Failed to fetch products. Please try again later.")
        }
    }

    fetchProducts()
  }, [])
  

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {loading ? (
        <p className="flex flex-1 font-bold text-xl text-center justify-center items-center text-blue-500">Loading products...</p>
      ) : (
        error ? (
          <p className="flex flex-1 font-bold text-xl text-center justify-center items-center text-red-500">{error}</p>
        ) : (
          <Main products={products} />
        )
      )}
      <Footer />
    </div>
  )
}

export default App

