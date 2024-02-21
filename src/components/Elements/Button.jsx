const Button = (props) => {
  const { type, classname, children, onClick } = props

  return (
    <button
      type={type}
      className={`flex px-2 py-1 rounded-sm border transform transition-transform active:scale-95 hover:bg-white ${classname}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button