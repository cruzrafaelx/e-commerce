import { Routes, Route, useLocation } from "react-router-dom";

//Components
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import ErrorFallback from "./components/ErrorFallback"

//Pages
import About from "./pages/About";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart"

//Error Handling
import { ErrorBoundary } from "react-error-boundary";

function App() {

  const location = useLocation()

  return (
      <div className="min-h-screen flex flex-col">
        <Header/>
          <ErrorBoundary FallbackComponent={ErrorFallback} resetKeys={[location.pathname]}>
            <Routes>
            {/* Dynamic rendering of loading, error and main page */}
            <Route path="/" element={<Main/>}/>

            {/* Page for products */}
            <Route path="/products" element={<Products/>}></Route>

            {/* Page for About */}
            <Route path="/about" element={<About/>}></Route>

            {/* Page for single products */}
            <Route path="/products/:id" element={<ProductDetails/>}/>

            {/* Page for cart */}
            <Route path="/cart" element={<Cart/>}/>
            </Routes>
          </ErrorBoundary> 
        <Footer />
      </div>
  )
}

export default App

