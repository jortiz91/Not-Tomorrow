import { BrowserRouter, Routes, Route } from 'react-router-dom'
import logo from './images/1.png'

import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <img src={logo} alt="" />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
