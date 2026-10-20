
import ProductCard from "./ProductCard"
import { useCart } from "../context/CartContent"
import useProducts from "../hooks/useProducts"

const Main = () => {

    //Hook for loading and error state, product listing
    const { products, loading, error } = useProducts() 

    //Context for cart, addToCart, and removeFromCart
    const { addToCart } = useCart()

    if(loading) return(
        <div className="flex-1 flex flex-col justify-center items-center gap-4">
            <div className="w-10 h-10 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin "></div>
            <p className="text-gray-500">Loading products...</p>
        </div>
    )

    return (
        <main className="flex-1 
                        w-full max-w-7xl mx-auto mt-8 px-4
                        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
                        justify-start">
            
            
            {products.map((product) => (
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
        </main>
    )
}

export default Main
