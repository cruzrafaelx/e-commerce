import type { Product } from "../types"

interface CartProps {
  cart: Product[];
}

const Cart = ({ cart }: CartProps ) => {
  return (
    <div className="flex-1">
      {cart.map((product, index) => (
        <p key={index}>{product.title}</p>
      ))}
    </div>
  )
}

export default Cart