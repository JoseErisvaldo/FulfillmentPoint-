import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}
