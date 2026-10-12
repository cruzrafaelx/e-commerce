import type { Product } from "../types"
import ProductCard from "./ProductCard"

interface MainProps {
    products: Product[]
}

const Main = ({ products }: MainProps) => {
    return (
        <main className="flex-1 
                        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
                         justify-start items-start">
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    category={product.category}
                    name={product.name}
                    price={product.price}
                    description={product.description}
                    image={product.image}
                    inStock={product.inStock}
                />
            ))}
        </main>
    )
}

export default Main
