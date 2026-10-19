import type { Product } from "../types"
import { useCart } from "../context/CartContent";


const Cart = () => {

  const { cart, removeFromCart } = useCart()

  return (
    <div className="flex-1">
      {cart.map((product: Product, index) => (
        <div key={index}>
          <p>{product.title}</p>
          <button onClick={()=> removeFromCart(index)}>Remove</button>
        </div>
      ))}
    </div>
  )
}

export default Cart