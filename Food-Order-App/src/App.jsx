import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Eroor from './Pages/Eroor'
import Success from './Pages/Success'
import ProtectedRoute from './Componets/ProtectedRoute'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/success"
          element={<ProtectedRoute element={<Success />} />}
        />
        <Route path="/*" element={<Eroor />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App