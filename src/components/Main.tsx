import ProductCard from "./ProductCard"
import { useCart } from "../context/CartContent"
import useProducts from "../hooks/useProducts"
import { Link } from "react-router-dom"
import brandVideo from "../assets/brandVideo.mp4"
import Typewriter from "./Typewriter"

//Words cycled by the typing effect in the hero
const heroWords = ["love", "passion", "care", "grit"]

const Main = () => {
  //Hook for loading state and product listing
  const { products, loading } = useProducts()

  //Context for cart, addToCart, and removeFromCart
  const { addToCart } = useCart()

  // const [showAll, setShowAll] = useState(false)

  if (loading)
    return (
      <div className="flex-1 flex flex-col justify-center items-center gap-4">
        <div className="w-10 h-10 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin "></div>
        <p className="text-gray-500">Loading products...</p>
      </div>
    )

  return (
    <main className="flex-1 flex flex-col gap-3 mx-auto mt-8 px-4 max-w-7xl w-full">
      <div className="flex m-4 gap-5">
        <video src={brandVideo} autoPlay muted loop playsInline className="w-full max-w-180 rounded-xl " />
        <div className="flex flex-col justify-center gap-3">
          <span className="font-semibold text-9xl text-blue-500 tracking-wide">Taljer.</span>
          <span className="uppercase font-semibold text-7xl text-blue-500 tracking-wide">Made with</span>
          <Typewriter words={heroWords} className="uppercase font-semibold text-8xl text-blue-500 tracking-wide" />
        </div>
      </div>

      <div className="flex-1 flex flex-col w-full justify-start">
        {
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
          </div>
        }
      </div>

      <Link
        to="/products"
        className="text-center mx-auto mb-10 w-50 rounded-xl p-3 font-semibold uppercase bg-blue-500 py-3 text-white  hover:bg-blue-600 cursor-pointer"
      >
        See more
      </Link>
    </main>
  )
}

export default Main
