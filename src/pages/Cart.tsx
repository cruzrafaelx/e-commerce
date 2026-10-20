import { Link } from "react-router-dom"
import type { Product } from "../types"
import { useCart } from "../context/CartContent";


const Cart = () => {

  const { cart, removeFromCart } = useCart()
  
  return (
    <div className="flex-1 flex">

      <div className="flex-2  mx-auto p-15">
        <Link to="/">
          <p className="mb-4 text-sm hover:underline hover:text-blue-500">{`Back to homepage`}</p>
        </Link>

        {cart.map((product: Product, index) => (
          <div key={index} className="border-b flex justify-center items-center">
            <img alt={product.title} src={product.image} className="flex-1 w-50 h-50 object-contain p-4 rounded mb-2"></img>
            <div className="flex-5 p-4">
              <p className="text-xs uppercase text-blue-500">{product.category}</p>
              <p className="uppercase">{product.title}</p>
              <p className="line-clamp-1 text-sm text-black-500">{product.description}</p>
              <p className="text-md text-black-600"><strong>€{product.price.toFixed(2)}</strong></p>
              <button onClick={()=> removeFromCart(index)}
                className="text-sm mt-5 text-red-500 cursor-pointer"
                >Remove article from cart</button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex-1 border flex justify-center items-center">
        <p className="text-5xl uppercase text-center">Kasse under construction</p>
      </div>
    </div>
    
  )
}

export default Cart