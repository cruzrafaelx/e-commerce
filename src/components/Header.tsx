
type HeaderProps = {
  cartLength: number;
}

function Header({ cartLength }: HeaderProps)  {
    return (
      <header className="bg-blue-500 text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Taljer</h1>
        <nav>
          <a href="/" className="text-white mr-4 hover:underline">Home</a>
          <a href="/products" className="text-white mr-4 hover:underline">Products</a>
          <a href="/about" className="text-white mr-4 hover:underline">About</a>
          <button className="border p-2 rounded cursor-pointer hover:bg-white hover:text-blue-500">View Cart: {cartLength}</button>
        </nav>
      </header>
    );
  }
  
  export default Header;