import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import NavBar from './Components/NavBar/NavBar'
import Products from './Pages/Products/Products'
import SideBar from './Components/SideBar/SideBar'

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="flex">
        <SideBar />
        <div className="m-2 border rounded p-2 border-l-indigo-100 w-full">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}
