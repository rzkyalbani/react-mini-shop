import { useEffect, useState } from "react"
import PageLayout from "../components/Layouts/PageLayout"
import { useProducts } from "../context/ProductsContext"
import { useLocation } from "react-router-dom"
import ProductItem from "../components/Fragments/ProductItem"

const SearchedItemsPage = () => {
  const [searchedProducts, setSearchedProducts] = useState([])
  const { products, setProducts } = useProducts()
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get('q');

  function searchProductsByName(p, q) {
    const searchResult = p.filter(product => product.name.toLowerCase().includes(q.toLowerCase()));
    return searchResult;
  }

  useEffect(() => {
    setProducts(JSON.parse(localStorage.getItem('products')))
    setSearchedProducts(searchProductsByName(products, searchQuery))
  }, [])

  useEffect(() => {
    setSearchedProducts(searchProductsByName(products, searchQuery))
  }, [searchQuery, products])

  return (
    <PageLayout>
      <div className="w-full max-w-lg bg-blue-100 mx-auto my-6 p-3 border border-blue-400">
        <p>The Result of Searching Query "{searchQuery}"</p>
      </div>
      {
        searchedProducts.length > 0 && searchedProducts.map(product => (
          <ProductItem product={product} key={product.name} />
        ))
      }
    </PageLayout>
  )
}

export default SearchedItemsPage