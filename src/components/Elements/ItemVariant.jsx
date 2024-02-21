import { useCart } from "../../context/CartContext"
import { useProducts } from "../../context/ProductsContext"
import Button from "./Button"
import { sluggable } from "../../service/sluggable"
import { useEffect } from "react"

const ItemVariant = ({ isAddToCart, variants, slug }) => {
  const { products, setProducts } = useProducts()
  const { cart, setCart } = useCart()
  const reduceProductsStock = (product, color) => {
    const updatedVariants = product.variants.map(variant => {
      if (variant.color === color) {
        return {
          ...variant,
          stock: variant.stock - 1
        }
      } else {
        return variant
      }
    })

    setProducts(products.map(product => {
      if (sluggable(product.name) === slug) {
        return {
          ...product,
          variants: updatedVariants
        }
      } else {
        return product
      }
    }))
  }
  const addToCartHandler = (color) => {
    const product = products.find(product => sluggable(product.name) === slug)
    const productVariants = product.variants.find(variant => variant.color === color)
    const { stock } = productVariants

    if (cart.length > 0) {
      const isItemExist = cart.find(item => sluggable(item.name) === slug)
      const isItemColorExist = cart.find(item => item.color === color)

      if (isItemExist && isItemColorExist) {
        if (stock > 0) {
          setCart(cart.map(item => {
            if (item.name === product.name && item.color === color) {
              return { ...item, qty: item.qty + 1 }
            } else {
              return item
            }
          }))
          reduceProductsStock(product, color)
        }
      } else {
        if (stock > 0) {
          cart.push({
            name: product.name,
            color: productVariants.color,
            qty: 1,
            price: product.price
          })
          reduceProductsStock(product, color)
        }
      }
    } else {
      if (stock > 0) {
        setCart([{
          name: product.name,
          color: productVariants.color,
          qty: 1,
          price: product.price
        }])
        reduceProductsStock(product, color)
      }
    }
  }

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products))
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [products])

  return (
    <div className={`flex p-2 gap-2 bg-zinc-300 ${!isAddToCart && 'hidden'}`}>
      {variants.length > 0 && variants.map(variant => (
        <Button
          key={variant.color}
          classname="text-sm bg-white text-black flex items-center gap-2 border-2 border-zinc-400 font-normal hover:border-blue-800 hover:text-blue-800 group"
          onClick={() => addToCartHandler(variant.color)}
        >
          {variant.color} <span className="bg-zinc-300 text-black text-sm px-1 group-hover:bg-yellow-200">{variant.stock}</span>
        </Button>
      ))}
    </div>
  )
}

export default ItemVariant