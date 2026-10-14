import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import type { Product } from "./types"
import { useState, useEffect } from "react"

function App() {

  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    async function fetchProducts() {
        try{
            const response = await fetch("https://fakestoreapi.com/products")
            const data = await response.json()
            setProducts(data)
        }
        catch(e){
            console.error("Error fetching products:", e)
        }
    }

    fetchProducts()
  }, [])
  
//   const products: Product[] = [
//     { id: 1, name: "Wireless Headphones", price: 79.99, description: "Noise cancelling, 30h battery life", category: "Audio", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=400&fit=crop&q=80", inStock: true },
//     { id: 2, name: "Bluetooth Speaker", price: 49.99, description: "Waterproof with 12h of playtime", category: "Audio", image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&h=400&fit=crop&q=80", inStock: true },
//     { id: 3, name: "Wireless Earbuds", price: 59.99, description: "Compact case with 24h total battery", category: "Audio", image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&h=400&fit=crop&q=80", inStock: true },
//     { id: 4, name: "USB Microphone", price: 69.99, description: "Cardioid condenser for calls and streaming", category: "Audio", image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=600&h=400&fit=crop&q=80", inStock: false },
//     { id: 5, name: "Mechanical Keyboard", price: 64.99, description: "Hot-swappable switches with RGB backlight", category: "Peripherals", image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=600&h=400&fit=crop&q=80", inStock: true },
//     { id: 6, name: "Wireless Mouse", price: 29.99, description: "Ergonomic design with silent clicks", category: "Peripherals", image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&h=400&fit=crop&q=80", inStock: true },
//     { id: 7, name: "Webcam 1080p", price: 44.99, description: "Full HD with built-in microphone", category: "Peripherals", image: "https://images.unsplash.com/photo-1626581795188-8efb9a00eeec?w=600&h=400&fit=crop&q=80", inStock: true },
//     { id: 8, name: "27\" Monitor", price: 219.99, description: "QHD IPS panel at 75Hz", category: "Peripherals", image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&h=400&fit=crop&q=80", inStock: true },
//     { id: 9, name: "USB-C Hub", price: 39.99, description: "7-in-1 with HDMI, SD card and 100W charging", category: "Accessories", image: "https://images.unsplash.com/photo-1601524909162-ae8725290836?w=600&h=400&fit=crop&q=80", inStock: false },
//     { id: 10, name: "Laptop Stand", price: 34.99, description: "Adjustable aluminium stand for 10-17 inch laptops", category: "Accessories", image: "https://images.unsplash.com/photo-1629317480872-45e07211ffd4?w=600&h=400&fit=crop&q=80", inStock: true },
//     { id: 11, name: "Desk Lamp", price: 27.99, description: "LED with adjustable brightness and colour", category: "Accessories", image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&h=400&fit=crop&q=80", inStock: true },
//     { id: 12, name: "Desk Mat", price: 19.99, description: "Extra-large with a non-slip base", category: "Accessories", image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=600&h=400&fit=crop&q=80", inStock: false },
//     { id: 13, name: "Smart Watch", price: 149.99, description: "Heart rate, GPS and 7-day battery", category: "Mobile", image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=600&h=400&fit=crop&q=80", inStock: true },
//     { id: 14, name: "Portable Charger", price: 24.99, description: "20,000 mAh with fast charging", category: "Mobile", image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=600&h=400&fit=crop&q=80", inStock: true },
//     { id: 15, name: "Phone Case", price: 14.99, description: "Shockproof with a slim matte finish", category: "Mobile", image: "https://images.unsplash.com/photo-1603313011101-320f26a4f6f6?w=600&h=400&fit=crop&q=80", inStock: false },
// ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Main products={products}/>
      <Footer />
    </div>
  )
}

export default App
