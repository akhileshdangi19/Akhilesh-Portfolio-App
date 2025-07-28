import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
  stock: number
}

interface ProductsState {
  items: Product[]
  loading: boolean
  error: string | null
  categories: string[]
}

const initialState: ProductsState = {
  items: [],
  loading: false,
  error: null,
  categories: [],
}

// Mock products data
const mockProducts: Product[] = [
  {
    id: "1",
    name: "Wireless Headphones",
    description: "High-quality wireless headphones with noise cancellation",
    price: 199.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Electronics",
    stock: 50,
  },
  {
    id: "2",
    name: "Smart Watch",
    description: "Feature-rich smartwatch with health tracking",
    price: 299.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Electronics",
    stock: 30,
  },
  {
    id: "3",
    name: "Running Shoes",
    description: "Comfortable running shoes for all terrains",
    price: 129.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Sports",
    stock: 75,
  },
  {
    id: "4",
    name: "Coffee Maker",
    description: "Premium coffee maker for the perfect brew",
    price: 89.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Home",
    stock: 25,
  },
]

export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return mockProducts
})

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false
        state.items = action.payload
        state.categories = [...new Set(action.payload.map((p) => p.category))]
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || "Failed to fetch products"
      })
  },
})

export default productsSlice.reducer
