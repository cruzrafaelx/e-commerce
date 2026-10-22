import { Link } from "react-router-dom"
import type { Product } from "../types"
import { useCart } from "../context/CartContent"
import { FaArrowLeftLong, FaCartShopping, FaTrashCan } from "react-icons/fa6"

const Cart = () => {
  const { cart, cartSum, removeFromCart, addToCart, reduceCartItem } = useCart()

  //Modified shape of CartItem with added itemCount
  type CartItem = Product & { itemCount: number }

  const deliveryFee = cartSum > 0 ? 3.99 : 0

  return (
    <div className="flex-1 flex">
      <div className="flex-2 flex flex-col mx-auto p-12">
        <Link
          to="/"
          className="group self-start flex items-center gap-2 mb-6 text-sm font-medium text-gray-600 transition-colors hover:text-blue-500"
        >
          <FaArrowLeftLong className="transition-transform group-hover:-translate-x-1" />
          Continue shopping
        </Link>

        <div className="flex gap-10 flex-col lg:flex-row">
          <div className="flex-3 flex flex-col">
            {cart.length > 0 ? (
              //Cart contennts
              cart.map((product: CartItem, index) => (
                <div key={index} className="mb-5 flex rounded-xl justify-center items-center bg-gray-100">
                  <img
                    alt={product.title}
                    src={product.image}
                    className="shrink-0 w-50 h-50 object-contain p-4 rounded mb-2"
                  ></img>
                  <div className="flex-1 p-4">
                    <p className="text-xs uppercase text-blue-500">{product.category}</p>
                    <p className="uppercase">{product.title}</p>
                    <p className="line-clamp-1 text-sm text-gray-600">{product.description}</p>
                    <p className="text-md text-black-600">
                      <strong>€{product.price.toFixed(2)}</strong>
                    </p>
                    <div className="flex gap-3 mt-5">
                      <div className="flex border border-blue-500 rounded-2xl">
                        <button className="px-3 cursor-pointer" onClick={() => reduceCartItem(product)}>
                          -
                        </button>
                        <p className="p-2">{product.itemCount}</p>
                        <button className=" text-black px-3 cursor-pointer" onClick={() => addToCart(product)}>
                          +
                        </button>
                      </div>
                      <button onClick={() => removeFromCart(index)} className="text-sm  text-red-500 cursor-pointer">
                        <FaTrashCan className="text-xl" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              // Empty cart message
              <div className="flex-1 flex flex-col justify-center items-center gap-4 text-center">
                <div className="flex justify-center items-center w-24 h-24 rounded-full bg-gray-100">
                  <FaCartShopping className="text-4xl text-blue-500" />
                </div>
                <h2 className="text-2xl font-bold">Your cart is empty</h2>
                <p className="text-gray-600 max-w-sm">
                  Looks like you haven't added anything yet. Find something you'll love in our collection.
                </p>
                <Link
                  to="/products"
                  className="mt-2 rounded-2xl bg-blue-500 px-6 py-3 text-white font-semibold uppercase transition-colors hover:bg-blue-600"
                >
                  Browse products
                </Link>
              </div>
            )}
          </div>

          {/* Cashier */}
          <div className="flex-1 flex justify-start items-start">
            <div className="sticky top-4 w-full flex flex-col gap-3 bg-gray-100 p-6 rounded-xl shadow-sm">
              <h2 className="text-lg font-semibold uppercase mb-2">Order summary</h2>

              <div className="flex justify-between text-sm text-gray-600">
                <span>Products</span>
                <span>€{cartSum.toFixed(2)}</span>
              </div>

              <div className="flex justify-between text-sm text-gray-600">
                <span>Packaging & Delivery</span>
                <span>€{deliveryFee.toFixed(2)}</span>
              </div>

              <div className="flex justify-between text-sm text-gray-600">
                <span>Discount</span>
                <span>€0.00</span>
              </div>

              <div className="flex justify-between border-t border-gray-300 pt-3 mt-1 text-base font-bold">
                <span>Total</span>
                <span>€{(cartSum + deliveryFee).toFixed(2)}</span>
              </div>

              <button
                disabled={cart.length === 0}
                className="mt-3 w-full rounded-2xl bg-blue-500 py-3 text-white font-semibold uppercase cursor-pointer hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
