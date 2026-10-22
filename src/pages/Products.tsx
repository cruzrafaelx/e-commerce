import ProductCard from "../components/ProductCard"
import { useCart } from "../context/CartContent"
import useProducts from "../hooks/useProducts"
import { useState, type ChangeEvent } from "react"
import { FaCartShopping } from "react-icons/fa6"


const Products = () => {

      //States for the search filter
      const [searchTerm, setSearchTerm] = useState("")
      const [selectedCategory, setSelectedCategory] = useState("")
  
      //Hook for loading state and product listing
      const { products, loading  } = useProducts() 
  
      //Context for cart, addToCart, and removeFromCart
      const { addToCart } = useCart()
  
      //Unique categories
      //new Set() -> filters redundancy
      const categories = [...new Set(products.map((product) => product.category))]
  
      //Contains filtered list of products
      const filteredProducts = products.filter((product) => {
          const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase())
          const matchesCategory = selectedCategory === "" || product.category === selectedCategory
          return matchesSearch && matchesCategory
      })
  
      //handle search 
      function handleSearch(e: ChangeEvent<HTMLInputElement>){
          setSearchTerm(e.target.value)
      }
  
      //handle select category 
      function handleFilterChange(e: ChangeEvent<HTMLSelectElement>){
          setSelectedCategory(e.target.value)
      }

      if(loading) return(
        <div className="flex-1 flex flex-col justify-center items-center gap-4">
            <div className="w-10 h-10 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin "></div>
            <p className="text-gray-500">Loading products...</p>
        </div>
      )
    return (
      <main className="flex-1 flex flex-col w-full max-w-7xl mx-auto mt-8 px-4 justify-start">
            <div className="flex flex-col md:flex-row gap-5 md:gap-10 px-5">
                <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={handleSearch}
                className="w-100 p-2 rounded border border-blue-500 bg-white"
                />

                <select
                value={selectedCategory}
                onChange={handleFilterChange}
                className="p-2 w-70 rounded border border-blue-500 bg-white"
                >
                    <option value="" >All categories</option>
                    {categories.map((category) => (
                        <option key={category} value={category}>
                        {category}
                        </option>
                    ))}
                </select>
            </div>
            
            {
                filteredProducts.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {filteredProducts.map((product) => (
                            <ProductCard
                                key={product.id}
                                id={product.id}
                                category={product.category}
                                title={product.title}
                                price={product.price}
                                description={product.description}
                                image={product.image}
                                rating={product.rating}
                                onAddToCart={() => addToCart(product)}
                            />
                        ))}
                    </div>
                )  :
                <div className="flex-1 flex flex-col justify-center items-center gap-4 text-center">
                    <div className="flex justify-center items-center w-24 h-24 rounded-full bg-gray-100">
                        <FaCartShopping className="text-4xl text-blue-500" />
                    </div>
                    <h2 className="text-2xl font-bold">No found match!</h2>
                    <p className="text-gray-600 max-w-sm">
                        It seems like we still need to create this product you are looking for!
                    </p>
                </div>
            }
        </main>
    )
  }
  
  export default Products