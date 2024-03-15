import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Homepage from './pages/Homepage'
import Bookingpage from './pages/BookingPage'
import About from './pages/About'
import Menu from './pages/Menu'
import Orderonline from './pages/Orderonline'
import Login from './pages/Login'
import Bookingconfirmed from './pages/Bookingconfirmed'
import { Route,Routes } from 'react-router-dom'


function App() {

  return (
    <>
    <main >
      <Header />
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/reserve' element={<Bookingpage/>}/>
        <Route path='/orderonline' element={<Orderonline/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/confirmed' element={<Bookingconfirmed/>}/>
      </Routes>
      <Footer/>
    </main>
    </>
  )
}

export default App
