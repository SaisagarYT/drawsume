import { Authentication } from "./pages/Authentication";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Homepage } from "./pages/Homepage";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Authentication/>} path="/"/>
        <Route element={<Homepage/>} path="/home"/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
