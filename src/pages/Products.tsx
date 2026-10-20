import ProductCard from "../components/ProductCard"
import { useCart } from "../context/CartContent"
import useProducts from "../hooks/useProducts"
import { useState, type ChangeEvent } from "react"

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
      <main className="flex-1 flex flex-col
                        w-full max-w-7xl mx-auto mt-8 px-4
                        justify-start">
            <div className="flex gap-10 px-5">
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
                className="p-2 rounded border border-blue-500 bg-white"
                >
                    <option value="">All categories</option>
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
                <p className="flex-1 flex justify-center items-center text-3xl text-center text-blue-500">Sorry, We're not selling your searched product!</p>
            }
        </main>
    )
  }
  
  export default Products