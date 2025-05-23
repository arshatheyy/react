
import Register from './pages/Register';
import Dashboard from "./pages/Dashboard";
import Login from "./pages/login";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <>
      {/* < Dashboard />
    <login />
    <Register />  */}
      {/* <h1 className="text-3xl font-bold underline">
    hello world!
    </h1>*/}
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/*" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="p" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )

}
export default App
