import { Link } from "react-router-dom"
import Button from "./Button"

const CategoryBar = ({ category }) => {
  return (
    <div className={`p-3 max-w-lg m-auto shadow-md bg-zinc-100 ${!category && 'hidden'}`}>
      <p className="mb-2">Choose a category: </p>
      <div className="flex gap-1">
        <Link to={'/category/phone'}>
          <Button classname="bg-blue-800 hover:border-blue-800 hover:text-blue-800 text-white">Phone</Button>
        </Link>
        <Link to={'/category/accessories'}>
          <Button classname="bg-blue-800 hover:border-blue-800 hover:text-blue-800 text-white">Accessories</Button>
        </Link>
        <Link to={'/category/pad'}>
          <Button classname="bg-blue-800 hover:border-blue-800 hover:text-blue-800 text-white">Pad</Button>
        </Link>
      </div>
    </div>
  )
}

export default CategoryBar