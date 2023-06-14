import { Routes, Route } from "react-router-dom"
import Products from "./components/Products"
import Details from "./components/Details"
function App() {

  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
  )
}

export default App
