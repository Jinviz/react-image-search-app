import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from './views/Home'
import BookmarkPage from './views/Bookmark'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/bookmark" element={<BookmarkPage/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
