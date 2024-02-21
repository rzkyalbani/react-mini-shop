import { useNavigate } from "react-router-dom"

const SearchBar = ({ search }) => {
  const navigate = useNavigate()

  const searchHandler = (e) => {
    e.preventDefault()
    const { search } = e.target.elements
    navigate(`/search?q=${search.value}`)
  }

  return (
    <div className={`max-w-lg m-auto shadow-md ${!search && 'hidden'}`}>
      <form action="" onSubmit={searchHandler}>
        <div className="flex items-center justify-between">
          <input
            type="text"
            name="search"
            placeholder="Cari Produk..."
            className="w-full p-2 mt-1 rounded-s-sm focus:outline-none"
          />
          <button className="bg-blue-800 p-2 mt-1 rounded-e-sm">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
              <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </form>
    </div>
  )
}

export default SearchBar