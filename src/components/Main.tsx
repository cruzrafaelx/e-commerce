
import ProductCard from "./ProductCard"
import type { Product } from "../types"
import { useCart } from "../context/CartContent"

interface MainProps {
    products: Product[];
}

const Main = ({ products }: MainProps) => {

    const { addToCart } = useCart()

    return (
        <main className="flex-1 
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
