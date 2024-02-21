import { useEffect } from "react"
import PageLayout from "../components/Layouts/PageLayout"
import { useCart } from "../context/CartContext"
import { sluggable } from "../service/sluggable"

const CartPage = () => {
  const { cart, setCart } = useCart()
  const totalCart = cart.reduce((acc, item) => { return acc + item.qty }, 0)
  const totalPrice = cart.reduce((acc, item) => { return acc + item.price * item.qty }, 0)
  const checkoutHandler = () => {
    localStorage.setItem('cart', JSON.stringify([]))
    setCart(JSON.parse(localStorage.getItem('cart')))
  }

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem('cart')))
  }, []) 

  return (
    <PageLayout>
      <div className="flex justify-center my-8">
        <div className="w-full max-w-2xl min-w-lg shadow shadow-zinc-400 bg-white rounded-sm flex flex-col p-6">
          <h1 className="text-3xl my-4 text-zinc-300">{cart.length > 0 ? 'Your Cart Items' : 'You haven\'t bought something yet...'}</h1>
          {cart.length > 0 &&
            <table className="text-center table-fixed divide-y divide-zinc-300 p-3">
              <thead className="font-medium">
                <tr className="hover:bg-zinc-100">
                  <td className="p-2">No.</td>
                  <td className="p-2">Name</td>
                  <td className="p-2">Qty.</td>
                  <td className="p-2">Price</td>
                  <td className="p-2">Total</td>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-300">
                {
                  cart.map((item, index) => {
                    return (
                      <tr className="hover:bg-zinc-100" key={sluggable(item.name)}>
                        <td className="p-2">{index + 1}</td>
                        <td className="p-2">{item.name} - {item.color}</td>
                        <td className="p-2">{item.qty}</td>
                        <td className="p-2">{(item.price).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</td>
                        <td className="p-2">{(item.price * item.qty).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</td>
                      </tr>
                    )
                  })
                }
                <tr className="font-medium hover:bg-zinc-100">
                  <td className="p-2">Total</td>
                  <td className="p-2"></td>
                  <td className="p-2">{totalCart}</td>
                  <td className="p-2"></td>
                  <td className="p-2">{(totalPrice).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</td>
                </tr>
              </tbody>
            </table>
          }
          <button
            className="flex text-white px-3 py-2 rounded-sm border hover:bg-white bg-blue-800 hover:border-blue-800 hover:text-blue-800 transition duration-300 ease-in-out justify-center mt-3"
            onClick={checkoutHandler}
          >
            Checkout
          </button>
        </div>
      </div>
    </PageLayout>
  )
}

export default CartPage