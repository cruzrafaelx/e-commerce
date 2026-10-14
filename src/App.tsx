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
            if (!response.ok) {
              throw new Error(`Request failed with status ${response.status}`);
            } 
             
            const data = await response.json()
            setProducts(data)
            setLoading(false)
            setError(null)
            
        }
        catch(err){
            console.error("Error fetching products:", err)
            setLoading(false)
            setError(err instanceof Error ? err.message : "Something went wrong");
        }
    }
    fetchProducts()
  }, [])
  

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {loading ? (
        <div className="flex-1 flex flex-col justify-center items-center gap-4">
        <div className="w-10 h-10 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin "></div>
        <p className="text-gray-500">Loading products...</p>
    </div>
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

