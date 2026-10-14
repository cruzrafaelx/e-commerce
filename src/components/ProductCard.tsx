import { useState } from "react"
import type { Product } from "../types"

type ProductCardProps = Omit<Product, "id">

const ProductCard = ({ title, price, description, category, image }: ProductCardProps) => {

    const [isFavorite, setIsFavorite] = useState(false)
    

    return (
        <div className=" flex-1 border-t-4 border-blue-500 p-4 m-4 rounded-lg shadow-md
                        hover:shadow-xl hover:-translate-y-1 transition duration-300">
            <img src={image} alt={title} className="w-full h-50 object-cover rounded mb-2" />
            <p className="text-xs uppercase text-blue-500">{category}</p>
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-sm text-gray-500">{description}</p>
            <p className="text-lg text-green-600">€{price}</p>
            {/* <p className="text-sm text-gray-500">{inStock ? "In stock" : "Out of stock"}</p> */}
            <div className="flex justify-between items-center">
                <button className="border-2 border-blue-500 rounded hover:text-white hover:bg-blue-500 text-blue-500 bg-white p-2 mt-2 text-blue-500 cursor-pointer ">Add to cart</button>
                <button className={`${isFavorite ? "text-red-500 " : "text-blue-500"} cursor-pointer`}
                onClick={() => setIsFavorite(!isFavorite)}>
                    {isFavorite ? "Unfavorite" : "Favorite"}
                </button>
            </div>
        </div>
    )
}

export default ProductCard