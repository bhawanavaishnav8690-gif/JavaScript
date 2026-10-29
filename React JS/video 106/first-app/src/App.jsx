import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar"
import Cards from "./Components/Cards"

function App() {

  return (
    <>
    <Navbar/>
    <div className="cards">
      <Cards title = "This is card 1" description = "This is card one"/>
      <Cards title = "This is card 2" description = "This is card two"/>
      <Cards title = "This is card 3" description = "This is card three"/>
      </div>
    <Footer/>
    </>
  )
}

export default App
