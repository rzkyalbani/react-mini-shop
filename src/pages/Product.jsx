import { useParams } from "react-router-dom"
import PageLayout from "../components/Layouts/PageLayout"
import ProductItem from "../components/Fragments/ProductItem"
import { useProducts } from "../context/ProductsContext"
import { sluggable } from "../service/sluggable"
import { useEffect, useState } from "react"

const ProductPage = () => {
  const { products, setProducts } = useProducts()
  const { product } = useParams()
  const [isPreparing, setIsPreparing] = useState(true)
  const item = products.find(item => sluggable(item.name) === product)

  useEffect(() => {
    setProducts(JSON.parse(localStorage.getItem('products')))
    setIsPreparing(false)
  }, [])

  return (
    <PageLayout>
      {!isPreparing && <ProductItem product={item} />}
    </PageLayout>
  )
}

export default ProductPage