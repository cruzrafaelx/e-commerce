import ProductCard from "./ProductCard"
import { useCart } from "../context/CartContent"
import useProducts from "../hooks/useProducts"
import { Link } from "react-router-dom"

const Main = () => {

    //Hook for loading state and product listing
    const { products, loading  } = useProducts() 

    //Context for cart, addToCart, and removeFromCart
    const { addToCart } = useCart()

    // const [showAll, setShowAll] = useState(false)

    if(loading) return(
        <div className="flex-1 flex flex-col justify-center items-center gap-4">
            <div className="w-10 h-10 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin "></div>
            <p className="text-gray-500">Loading products...</p>
        </div>
    )

    return (
        <main className="flex-1 flex flex-col
                        w-full max-w-7xl mx-auto mt-8 px-4
                        justify-start">
            
            {<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {products.slice(0, 8).map((product) => (
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        category={product.category}
                        title={product.title}
                        price={product.price}
                        description={product.description}
                        image={product.image}
                        rating={product.rating}
                        onAddToCart={() => addToCart(product)}
                    />
                ))}
            </div>}
            <Link to="/products" className="flex justify-center mx-auto my-5 w-50 p-3 border border-blue-500 bg-blue-500 text-white hover:text-blue-500 hover:border hover:border-blue-500 hover:bg-white cursor-pointer">
                See more
            </Link>
        </main>
    )
   
}

export default Main
