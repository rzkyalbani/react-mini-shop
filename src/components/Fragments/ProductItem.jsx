import { Link } from "react-router-dom"
import Button from "../Elements/Button"
import { useState } from "react"
import ItemVariant from "../Elements/ItemVariant"
import { sluggable } from "../../service/sluggable"
import { useProducts } from "../../context/ProductsContext"

const ProductItem = ({ product }) => {
  const { products, setProducts } = useProducts() // don't delete this
  const [isAddToCart, setIsAddToCart] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const [isShared, setIsShared] = useState(false)
  const currentURL = window.location.href
  const comments = product.comments
  const totalComments = comments.length

  const addCommentHandler = (e) => {
    e.preventDefault()
    const { comment } = e.target.elements
    const lastId = comments[comments.length - 1].id

    comments.push(
      {
        id: lastId + 1,
        name: "You",
        comment: comment.value
      }
    )
    setProducts(products.map(product => ({
      ...product,
      comments: comments
    })))
    comment.value = ''
  }

  const deleteCommentHandler = (e) => {
    const commentid = e.target.dataset.comment
    const newComments = comments.filter(comment => comment.id !== parseInt(commentid))
    setProducts(products.map(product => ({
      ...product,
      comments: newComments
    })))
  }

  const checkURL = () => {
    if (currentURL.includes(`/product/${sluggable(product.name)}`)) {
      return true
    } else { return false }
  }

  const sumStock = product => {
    const sum = product.variants.reduce((acc, item) => {
      return acc + item.stock
    }, 0)
    return sum
  }

  return (
    <div className="flex justify-center mt-5 mb-8">
      <div className="max-w-lg shadow-md shadow-zinc-300 rounded-sm bg-white">
        <div className="flex flex-col w-full">
          <Link to={`/product/${sluggable(product.name)}`}>
            <img src={product.image} alt={product.name} />
          </Link>
          <div className="p-4">
            <Link to={`/product/${sluggable(product.name)}`}>
              <span className="text-2xl text-slate-400 hover:text-blue-800 transition duration-300 ease-in-out">{product.name}</span>
            </Link>
            <div className="flex justify-between mt-3 font-bold text-sm">
              <p>{(product.price + 0.0).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</p>
              <p>Stocks: <span className="font-light">{sumStock(product)}</span></p>
            </div>
          </div>
          {checkURL() && (
            <div className="p-4 border-zinc-200 border-t">
              <span className="text-left font-normal">
                {product.description.split('\n').map((string, index) => {
                  return <span key={index}>{string}<br /><br /></span>
                })}
              </span>
            </div>
          )}
          <ItemVariant
            isAddToCart={isAddToCart}
            variants={product.variants}
            slug={sluggable(product.name)}
          />
          <div className="flex justify-between p-4 border-zinc-200 border-t">
            <div className="flex gap-x-3">
              <Button
                type="button"
                classname={`${isLiked ? 'bg-white text-red-500 border-none' : 'bg-red-500 hover:border-red-500 hover:text-red-500 transition duration-300 ease-in-out text-white'}`}
                onClick={() => setIsLiked(!isLiked)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-1">
                  <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                </svg>
                {isLiked ? 'Unlike' : 'Like'}
              </Button>
              <div className="relative">
                <div className={`absolute -top-24 -right-5 bg-white shadow shadow-zinc-500 ${isShared ? '' : 'hidden'}`}>
                  <div className="flex flex-col">
                    <Button classname="flex items-center px-3 py-2 hover:scale-90 hover:border-none active:border-none">
                      <img width="25" height="25" src="https://img.icons8.com/ios/50/x.png" alt="x" />
                      <span className="ml-2 font-bold">X</span>
                    </Button>
                    <Button classname="flex items-center px-3 py-2 hover:scale-90 hover:border-none active:border-none">
                      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
                        <path fill="#316FF6" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path><path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"></path>
                      </svg>
                      <span className="ml-2 font-medium text-blue-500">Facebook</span>
                    </Button>
                  </div>
                </div>
                <Button
                  type="button"
                  classname="bg-green-600 hover:border-green-600 hover:text-green-600 transition duration-300 ease-in-out text-white"
                  onClick={() => setIsShared(!isShared)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-1">
                    <path fillRule="evenodd" d="M15.75 4.5a3 3 0 1 1 .825 2.066l-8.421 4.679a3.002 3.002 0 0 1 0 1.51l8.421 4.679a3 3 0 1 1-.729 1.31l-8.421-4.678a3 3 0 1 1 0-4.132l8.421-4.679a3 3 0 0 1-.096-.755Z" clipRule="evenodd" />
                  </svg>
                  Share
                </Button>
              </div>
            </div>
            <div>
              <Button
                type="button"
                classname="bg-blue-800 hover:border-blue-800 hover:text-blue-800 transition duration-300 ease-in-out text-white"
                onClick={() => setIsAddToCart(!isAddToCart)}
              >
                {isAddToCart ? 'Choose The Color' : 'Add To Cart'}
              </Button>
            </div>
          </div>
          {checkURL() && (
            <div className="flex flex-col justify-evenly p-4 border-zinc-200 border-t gap-y-3">
              <h3 className="text-slate-800 ml-2 mt-1">
                {totalComments > 1 ? `${totalComments} Comments` : `${totalComments} Comment`}
              </h3>
              {
                comments.map((item) => (
                  <div className="flex flex-col gap-y-4" key={item.id}>
                    <div className="flex justify-between items-center gap-x-5">
                      <div className="bg-gray-400 p-7 rounded-full"></div>
                      <div className="flex flex-col w-full">
                        <div className="flex justify-between">
                          <p className="text-slate-400 text-sm">{item.name}</p>
                          <button type="button" onClick={deleteCommentHandler}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" data-comment={item.id}>
                              <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                            </svg>
                          </button>
                        </div>
                        <p className="text-slate-600">{item.comment}</p>
                      </div>
                    </div>
                  </div>
                ))
              }
              <form
                action=""
                onSubmit={addCommentHandler}
                className="flex flex-col gap-y-3 mt-8"
              >
                <label htmlFor="comment">Leave a Comment</label>
                <textarea
                  name="comment"
                  id="comment"
                  rows="2 "
                  placeholder="Write a comment here..."
                  className="border border-zinc-300 p-2 focus:outline-none focus:ring-1 focus:ring-blue-800"
                ></textarea>
                <button
                  type="submit"
                  className="flex text-white px-3 py-2 rounded-sm border hover:bg-white bg-blue-800 hover:border-blue-800 hover:text-blue-800 transition duration-300 ease-in-out justify-center"
                >
                  Submit
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductItem