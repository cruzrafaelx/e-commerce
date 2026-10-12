export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    category: "Audio" | "Peripherals" | "Accessories" | "Mobile";
    image?: string;
    inStock: boolean;
}