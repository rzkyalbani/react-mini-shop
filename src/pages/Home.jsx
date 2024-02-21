import { useEffect } from "react"
import ProductItem from "../components/Fragments/ProductItem"
import PageLayout from "../components/Layouts/PageLayout"
import { useProducts } from "../context/ProductsContext"
import { useCart } from "../context/CartContext"

const HomePage = () => {
  const items = [
    {
      name: "Iphone 5S",
      category: "Phone",
      price: 9000000,
      variants: [
        { color: "black", stock: 28 },
        { color: "silver", stock: 20 },
        { color: "gold", stock: 10 },
        { color: "rose gold", stock: 4 }
      ],
      image: "/images/mobile.jpg",
      description: 'This is the details of the Iphone, Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      comments: [
        {
          id: 1,
          name: "Budi",
          comment: "Wah barangnya keren deh, suka banget!!!"
        }
      ]
    },
    {
      name: "Smart Phone Apple",
      category: "Phone",
      price: 10500000,
      variants: [
        { color: "white", stock: 28 },
      ],
      image: "/images/hi-tech-toys.jpg",
      description: 'This is the details of the Iphone, Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      comments: [
        {
          id: 1,
          name: "Andi",
          comment: "Wah barangnya keren deh, suka banget!!!"
        }
      ]
    },
    {
      name: "Flatty Phone With Earphone",
      category: "Phone",
      price: 7500000,
      variants: [
        { color: "white", stock: 20 },
        { color: "black", stock: 10 }
      ],
      image: "/images/mobile-2.jpg",
      description: 'This is the details of the Iphone, Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      comments: [
        {
          id: 1,
          name: "Joko",
          comment: "Wah barangnya keren deh, suka banget!!!"
        }
      ]
    },
    {
      name: "Book And Pen",
      category: "Accessories",
      price: 150000,
      variants: [
        { color: "brown", stock: 100 },
        { color: "silver", stock: 30 }
      ],
      image: "/images/hi-tech-toys-2.jpg",
      description: 'This is the details of the Iphone, Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      comments: [
        {
          id: 1,
          name: "Eko",
          comment: "Wah barangnya keren deh, suka banget!!!"
        }
      ]
    },
    {
      name: "An Ipad",
      category: "Pad",
      price: 10000000,
      variants: [
        { color: "black", stock: 10 },
        { color: "silver", stock: 10 }
      ],
      image: "/images/ipad.jpg",
      description: 'This is the details of the Iphone, Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      comments: [
        {
          id: 1,
          name: "Mina",
          comment: "Wah barangnya keren deh, suka banget!!!"
        }
      ]
    },
    {
      name: "Mobile IOS",
      category: "Phone",
      price: 13000000,
      variants: [
        { color: "gold", stock: 10 },
        { color: "black", stock: 10 },
        { color: "silver", stock: 10 }
      ],
      image: "/images/ios.jpg",
      description: 'This is the details of the Iphone, Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      comments: [
        {
          id: 1,
          name: "Riri",
          comment: "Wah barangnya keren deh, suka banget!!!"
        },
        {
          id: 2,
          name: "Hame",
          comment: "Mahal cuy!!"
        }
      ]
    },
  ]
  const { products, setProducts } = useProducts()
  const { setCart } = useCart()
  const setItemFunc = () => {
    if (localStorage.getItem('products') == null) {
      localStorage.setItem('products', JSON.stringify(items))
    }
  }
  const setCartFunc = () => {
    if (!localStorage.getItem('cart')) {
      localStorage.setItem('cart', JSON.stringify([]))
    }
  }

  setItemFunc()
  setCartFunc()

  useEffect(() => {
    setProducts(JSON.parse(localStorage.getItem('products')))
    setCart(JSON.parse(localStorage.getItem('cart')))
  }, [])

  return (
    <PageLayout>
      {
        products.length > 0 && products.map(product => (
          <ProductItem product={product} key={product.name} />
        ))
      }
    </PageLayout>
  )
}

export default HomePage