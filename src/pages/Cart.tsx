import type { Product } from "../types"

interface CartProps {
  cart: Product[];
  onRemoveFromCart: (indexToRemove: number) => void;
}

const Cart = ({ cart, onRemoveFromCart }: CartProps ) => {
  return (
    <div className="flex-1">
      {cart.map((product, index) => (
        <div>
          <p key={index}>{product.title}</p>
          <button onClick={()=> onRemoveFromCart(index)}>Remove</button>
        </div>
      ))}
    </div>
  )
}

export default Cart