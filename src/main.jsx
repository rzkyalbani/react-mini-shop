import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/Home.jsx'
import './index.css'
import CartPage from './pages/Cart.jsx'
import ProductsContextProvider from './context/ProductsContext.jsx'
import SearchedItemsPage from './pages/SearchedItems.jsx'
import CartContextProvider from './context/CartContext.jsx'
import CategoryPage from './pages/Category.jsx'
import ProductPage from './pages/Product.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/cart",
    element: <CartPage />
  },
  {
    path: "/search",
    element: <SearchedItemsPage />
  },
  {
    path: "/category/:category",
    element: <CategoryPage />
  },
  {
    path: "/product/:product",
    element: <ProductPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductsContextProvider>
      <CartContextProvider>
        <RouterProvider router={router} />
      </CartContextProvider>
    </ProductsContextProvider>
  </React.StrictMode>
)
