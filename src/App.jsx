import { useEffect } from "react"
import "./App.css"
import SearchBox from "./components/search-box/SearchBox"
import { Route, Routes } from "react-router-dom"
import SearchResult from "./components/search-result/SearchResult"

function App() {
  return (
    <Routes>
      <Route path="/" element={<SearchBox />} />
      <Route path="/flights" element={<SearchResult />} />
    </Routes>
  )
}

export default App
