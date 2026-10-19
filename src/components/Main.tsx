
import type { Product } from "../types"
import ProductCard from "./ProductCard"

interface MainProps {
    products: Product[];
    //return void for functions that don'r return anything
    onAddToCart: (product: Product) => void;
}

const Main = ({ products, onAddToCart }: MainProps) => {
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
                    onAddToCart={() => onAddToCart(product)}
                />
            ))}
        </main>
    )
}

export default Main
