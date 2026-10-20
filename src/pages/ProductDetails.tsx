import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { useCart } from "../context/CartContent"
import { useErrorBoundary } from "react-error-boundary"
import axios from "axios"
import type { Product } from "../types"


const ProductDetails = () => {
    
    const { id } = useParams<{ id: string }>()
    const [product, setProduct] = useState<Product | null>(null)
    const { addToCart } = useCart()
    const { showBoundary } = useErrorBoundary()
    
    
    useEffect(() => {

        if(!id) return
        
        async function fetchProducts() {

            try{
                const response = await axios.get<Product>(`https://fakestoreapi.com/products/${id}`)
                console.log(response.data)
                setProduct(response.data)
            }

            catch(err){
                showBoundary(err)
            }
            
        }
        
        fetchProducts()
        
    },[id, showBoundary])

    if (!product) return <p>Loading...</p>
    
    return(
        <div className="flex-1 flex justify-center">
            <div className="flex gap-30 my-auto px-20 justify-space-between">
                <img className="flex-1 w-80 h-130 shrink-0 rounded-lg bg-gray-100 object-contain p-4" src={product.image} alt={product.title} />
                <div className="flex-1 flex flex-col gap-3">
                <p className="text-md uppercase text-blue-500">{product.category}</p>
                <p className="text-3xl uppercase">{product.title}</p>
                <p className="text-lg text-gray-400">{product.rating.rate} stars | {product.rating.count} reviews</p>
                <p className="text-lg text-black-500">{product.description}</p>
                <p className="text-2xl text-black-600"><strong>€{product.price.toFixed(2)}</strong></p>
                <button className=" p-2 mt-2 text-lg border border-blue-500 bg-blue-500 text-white hover:text-blue-500 hover:border hover:border-blue-500 hover:bg-white cursor-pointer" onClick={()=>addToCart(product)}>Add to cart</button>
                </div>
            </div>
        </div>
    
        
    )
}


export default ProductDetails