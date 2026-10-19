import { createContext, useContext, useState, type ReactNode } from "react"
import type { Product } from "../types"

//shape the value of CartContext
interface CartContextValue {
    cart: Product[] //Array of product;
    addToCart: (product: Product) => void;
    removeFromCart: (index: number) => void;
}

//1. The context: create context
const CartContext = createContext<CartContextValue | undefined>(undefined)

//2. The provider: cart provider
export function CartProvider({children}: {children: ReactNode}) {
    
    //cart state
    const [cart, setCart] = useState<Product[]>([])

    //add to cart function
    const addToCart = (product: Product) => {
        setCart((prevCart) => [...prevCart, product])
        console.log(`Added ${product.title} to cart. Total items in cart: ${cart.length + 1}`)
        console.log("Current cart contents:", [...cart, product])
    }

    //remove from cart function
    const removeFromCart = (indexToRemove: number) => {
        setCart((prevCart) => prevCart.filter((_, index) => index !== indexToRemove))
    }

    return(
        <CartContext value={{ cart, addToCart, removeFromCart}}>
            {children}
        </CartContext>
    )
}


//3. The custom hook: useCart() for using the cart
export function useCart() {
    const context = useContext(CartContext)
    if(context === undefined) {
        throw new Error("useCart must be used inside a <CartProvider>")
    }
    
    return context
}
