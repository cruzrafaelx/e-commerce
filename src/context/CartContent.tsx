import { createContext, useContext, useState, type ReactNode } from "react"
import type { Product } from "../types"

//Modified shape of CartItem with added itemCount for Cart UI
type CartItem = Product & { itemCount: number }

//Context typing
interface CartContextValue {
  cart: CartItem[]
  cartSum: number
  addToCart: (product: Product) => void
  reduceCartItem: (product: Product) => void
  removeFromCart: (index: number) => void
}

//1. The context: create context
const CartContext = createContext<CartContextValue | undefined>(undefined)

//2. The provider: cart provider
export function CartProvider({ children }: { children: ReactNode }) {
  //cart state
  const [cart, setCart] = useState<CartItem[]>([])

  //Cart total sum state
  const cartSum = cart.reduce((sum, item) => sum + item.price * item.itemCount, 0)

  //add item to cart
  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      //Check if item is in cart
      const isInCart = prevCart.some((item) => item.id === product.id)

      //Product not in cart yet, add it with a count of 1
      if (!isInCart) {
        return [...prevCart, { ...product, itemCount: 1 }]
      }

      //Product already in cart, new array, with a new object for the matching item
      return prevCart.map((item) => (item.id === product.id ? { ...item, itemCount: item.itemCount + 1 } : item))
    })
  }

  //reduce item number in cart
  const reduceCartItem = (product: Product) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => (item.id === product.id ? { ...item, itemCount: item.itemCount - 1 } : item))
        //Remove items whose count reached 0
        .filter((item) => item.itemCount > 0),
    )
  }

  //remove item from cart
  const removeFromCart = (indexToRemove: number) => {
    setCart((prevCart) => prevCart.filter((_, index) => index !== indexToRemove))
  }

  return <CartContext value={{ cart, cartSum, addToCart, reduceCartItem, removeFromCart }}>{children}</CartContext>
}

//3. The custom hook: useCart() for using the cart
export function useCart() {
  const context = useContext(CartContext)

  if (context === undefined) {
    throw new Error("useCart must be used inside a <CartProvider>")
  }

  return context
}
