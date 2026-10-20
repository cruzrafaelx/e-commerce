import { Link } from "react-router-dom"
import { useCart } from "../context/CartContent";
import { FaShoppingCart } from "react-icons/fa"


function Header()  {

   const { cart } = useCart()
   
    return (
      <header className="bg-blue-500 text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Taljer</h1>
        <nav className="flex">
          <Link to="/" className="text-white mr-4 hover:underline">Home</Link>
          <Link to="/products" className="text-white mr-4 hover:underline">Products</Link>
          <Link to="/about" className="text-white mr-4 hover:underline">About</Link>
          <Link to="/cart" className="relative">
            <FaShoppingCart className="text-2xl" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-3 flex justify-center items-center w-5 h-5 rounded-full bg-white text-blue-500 text-xs font-bold">
                {cart.reduce((acc, cur) => {
                  return acc + cur.itemCount
                },0 )}
              </span>
            )}
          </Link>
        </nav>
      </header>
    );
  }
  
  export default Header;