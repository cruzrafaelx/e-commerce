import { Link } from "react-router-dom"
import type { Product } from "../types"
import { useCart } from "../context/CartContent";
import { FaArrowLeftLong } from "react-icons/fa6"

const Cart = () => {

  const { cart, removeFromCart, addToCart, reduceCartItem } = useCart()
  
  //Modified shape of CartItem with added itemCount
  type CartItem = Product & { itemCount: number }

  return (
    <div className="flex-1 flex">

      <div className="flex-2  mx-auto p-15">
        <Link to="/">
          <p className="flex items-center gap-2 mb-4 text-sm hover:underline hover:text-blue-500">
            <FaArrowLeftLong />
            Back to homepage
          </p>
        </Link>

        {cart.map((product: CartItem, index) => (
          <div key={index} className="border-b flex justify-center items-center">
            <img alt={product.title} src={product.image} className="flex-1 w-50 h-50 object-contain p-4 rounded mb-2"></img>
            <div className="flex-5 p-4">
              <p className="text-xs uppercase text-blue-500">{product.category}</p>
              <p className="uppercase">{product.title}</p>
              <p className="line-clamp-1 text-sm text-black-500">{product.description}</p>
              <p className="text-md text-black-600"><strong>€{product.price.toFixed(2)}</strong></p>
              <div className="flex">
                <button className="border p-1"
                        onClick={()=>reduceCartItem(product)}
                >-</button>
                <p className="border p-2">{product.itemCount}</p>
                <button className="border p-2"
                        onClick={()=>addToCart(product)}
                >+</button>
              </div>
              
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