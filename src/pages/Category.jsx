import { useParams } from "react-router-dom"
import PageLayout from "../components/Layouts/PageLayout"
import { useProducts } from "../context/ProductsContext"
import ProductItem from "../components/Fragments/ProductItem"
import { useEffect, useState } from "react"

const CategoryPage = () => {
  const { category } = useParams()
  const { products, setProducts } = useProducts()
  const [filteredProducts, setFilteredProducts] = useState([])
  const filteredProductsByCategory = products.filter(product => product.category.toLowerCase() === category)

  useEffect(() => {
    setProducts(JSON.parse(localStorage.getItem('products')))
    { setFilteredProducts(filteredProductsByCategory) }
  }, [])

  useEffect(() => {
    { setFilteredProducts(filteredProductsByCategory) }
  }, [category, products])

  return (
    <PageLayout>
      <div className="w-full max-w-lg bg-blue-100 mx-auto my-6 p-3 border border-blue-400">
        <p>The Result of Category "{category}"</p>
      </div>
      {
        filteredProducts.length > 0 && filteredProducts.map(product => (
          <ProductItem product={product} key={product.name} />
        ))
      }
    </PageLayout>
  )
}

export default CategoryPage