import { createContext, useContext, useState } from "react"

const ProductsContext = createContext()

const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState([])

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  )
}

export const useProducts = () => {
  return useContext(ProductsContext)
}
export default ProductsContextProvider