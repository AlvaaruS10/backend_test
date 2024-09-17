import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./components/Home"
import "./App.css"
import Login from "./components/Login"
import Register from "./components/Register"
import Cart from "./components/Cart"
import Pizza from "./components/Pizza"
function App() {
  return (
    <div>
        <Navbar />
        <Home />
       {/* <Pizza />*/}
      {/*<Register />*/}
      {/*<Login />*/}
      {/*<Cart />*/} 
         <Footer />
    </div>
  )
}

export default App
