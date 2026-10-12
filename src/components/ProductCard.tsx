import type { Product } from "../types"
type ProductCardProps = Omit<Product, 'id'>

const ProductCard = ({ name, price, description, category, image, inStock }: ProductCardProps) => {
    return (
        <div className=" flex-1 border-t-4 border-blue-500 p-4 m-4 rounded-lg shadow-md 
                        hover:shadow-xl hover:-translate-y-1 transition duration-300">
            <img src={image} alt={name} className="w-full h-50 object-cover rounded mb-2" />
            <p className="text-xs uppercase text-blue-500">{category}</p>
            <h3 className="text-xl font-bold">{name}</h3>
            <p className="text-sm text-gray-500">{description}</p>
            <p className="text-lg text-green-600">€{price}</p>
            <p className="text-sm text-gray-500">{inStock ? "In stock" : "Out of stock"}</p>
            <button className="border-2 border-blue-500 rounded hover:text-white hover:bg-blue-500 text-blue-500 bg-white p-2 mt-2 text-blue-500 cursor-pointer ">Add to cart</button>
        </div>
    )
}

export default ProductCard