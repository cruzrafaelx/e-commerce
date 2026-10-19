import { Link } from "react-router-dom"
import type { Product } from "../types"

//Product type and add onAddToCart function
type ProductCardProps = Product & {onAddToCart: () => void}

const ProductCard = ({ id, title, price, description, category, image, rating, onAddToCart }: ProductCardProps) => {

    // const [isFavorite, setIsFavorite] = useState(false)

    return (
        <div className="flex flex-col m-4 
                        hover:shadow-2xl hover:-translate-y-1 transition duration-400">
            <Link to={`/products/${id}`}>
                <div className="bg-gray-100 rounded-lg ">
                    <img src={image} alt={title} className="w-full h-50 object-contain p-4 rounded mb-2" />
                </div>
                <div className="p-4">
                    <p className="text-xs uppercase text-blue-500">{category}</p>
                    <p className="text-sm uppercase text-black-500 line-clamp-1">{title}</p>
                    <p className="text-xs text-gray-400">{rating.rate} stars | {rating.count} reviews</p>
                </div>
                
            </Link>
            <div className="mt-auto flex p-4 justify-between items-center rounded-lg">
                <p className="text-md text-black-600">€{price.toFixed(2)}</p>
                <button className="border-2 border-blue-500 text-xs rounded-full hover:text-white hover:bg-blue-500 text-blue-500 bg-white p-2 mt-2 cursor-pointer"
                onClick={onAddToCart}>Add to cart</button>
            </div>
        </div>
    )
}

export default ProductCard