import { Link } from "react-router-dom"
import { useCart } from "../context/CartContent";

function Header()  {

   const { cart } = useCart()
   
    return (
      <header className="bg-blue-500 text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Taljer</h1>
        <nav>
          <Link to="/" className="text-white mr-4 hover:underline">Home</Link>
          <Link to="/products" className="text-white mr-4 hover:underline">Products</Link>
          <Link to="/about" className="text-white mr-4 hover:underline">About</Link>
          <Link to="/cart">
            <button className="border p-2 rounded cursor-pointer hover:bg-white hover:text-blue-500">View Cart: {cart.length}</button>
          </Link>
        </nav>
      </header>
    );
  }
  
  export default Header;