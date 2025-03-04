import { BrowserRouter, Routes, Route } from "react-router-dom"
import { HOME } from "../pages/Home/Home"
import { PROJECT } from "../pages/ArteinProject/ArteinProject"
import { CONTACT } from "../pages/Contact/Contact"

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Para cada ruta defino el path y la vista */}
        <Route path="/" element={<HOME/>} />
        <Route path="/PROJECT" element={<PROJECT/>} />
        <Route path="/CONTACT" element={<CONTACT/>} />
      </Routes>
    </BrowserRouter>
  )
}

export { Router }