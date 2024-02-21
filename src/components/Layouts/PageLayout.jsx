import Footer from "../Fragments/Footer"
import Header from "../Fragments/Header"

const PageLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default PageLayout