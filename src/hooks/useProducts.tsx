import axios from "axios"
import { useState, useEffect } from "react"
import type { Product } from "../types"

interface UseProductsResult {
    products: Product[];
    loading: boolean;
    error: string | null;
}

function useProducts(): UseProductsResult {

  //State for products from API
  const [products, setProducts] = useState<Product[]>([])

  //State for loading pages
  const [loading, setLoading] = useState<boolean>(true)

  //State for error handling
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchProducts() {
        try{
            const response = await axios.get<Product[]>("https://fakestoreapi.com/products")
            setProducts(response.data)
            setError(null)
        }
        
        catch (err){
            setError(err instanceof Error ? err.message : "Something went wrong")
        }

        finally{
            setLoading(false)
        }
    }

    fetchProducts()
  }, [])

  return { products, loading, error}
}


//Main difference between fetch and axios is that axios automatically parses the response as JSON, while fetch requires you to call response.json() to parse the response.
//It also automatically throws an error for non-2xx status codes, while fetch does not. You have to check the response.ok property to determine if the request was successful or not.

export default useProducts