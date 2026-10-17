import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import type { Product } from "../types"


const ProductDetails = () => {
    
    const { id } = useParams<{ id: string }>()
    const [product, setProduct] = useState<Product | null>(null)
    
    
    useEffect(() => {

        if(!id) return
        
        async function fetchProducts() {

            try{
                const response = await axios.get<Product>(`https://fakestoreapi.com/products/${id}`)
                setProduct(response.data)
            }
            catch(err){
                console.error("Error fetching products", err)
            }
            
        }
        
        fetchProducts()
    },[id])

    if (!product) return <p>Loading...</p>
    
    return(
        <div>
            <h1>{product.title}</h1>
            <img src={product.image} alt={product.title} />
            <p>{product.description}</p>
            <p>${product.price}</p>
        </div>
    )
}


export default ProductDetails