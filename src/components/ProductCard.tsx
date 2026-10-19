import { useState } from "react"
import { Link } from "react-router-dom"
import type { Product } from "../types"

//Product type and add onAddToCart function
type ProductCardProps = Product & {onAddToCart: () => void}

const ProductCard = ({ id, title, price, description, category, image, rating, onAddToCart }: ProductCardProps) => {

    const [isFavorite, setIsFavorite] = useState(false)

    return (
        <div className="flex flex-col border-t-4 border-blue-500 p-4 m-4 rounded-lg shadow-md
                        hover:shadow-2xl hover:-translate-y-1 transition duration-400">
            <Link to={`/products/${id}`}>
                <img src={image} alt={title} className="w-full h-50 object-contain rounded mb-2" />
                <p className="text-xs uppercase text-blue-500">{category}</p>
                <p className="text-sm text-gray-500 line-clamp-3">{description}</p>
                <p className="text-lg text-green-600">€{price.toFixed(2)}</p>
                <p className="text-sm text-amber-500">Rating: {rating.rate}</p>
                <p className="text-sm text-gray-500">{rating.count} reviews</p>
            </Link>
            <div className="mt-auto flex justify-between items-center">
                <button className="border-2 border-blue-500 rounded hover:text-white hover:bg-blue-500 text-blue-500 bg-white p-2 mt-2 cursor-pointer"
                onClick={onAddToCart}>Add to cart</button>
                <button className={`${isFavorite ? "text-red-500 " : "text-blue-500"} cursor-pointer`}
                onClick={() => setIsFavorite(!isFavorite)}>
                    {isFavorite ? "Unfavorite" : "Favorite"}
                </button>
            </div>
        </div>
    )
}

export default ProductCard