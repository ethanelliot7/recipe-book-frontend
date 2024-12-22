import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router";
import Login from "./pages/Login.tsx";
import Home from "./pages/Home.tsx";
import Register from "./pages/Register.tsx";
import Account from "./pages/Account.tsx";
import ProtectedRoute from "./components/ProtectedRoute.tsx";
import Logout from "./pages/Logout.tsx";




function App() {

  return (
    <>
      <Router>
          <Routes>
              <Route path="" element={<Home/>} />
          </Routes>
          <Routes>
              <Route path="/login" element={<Login/>} />
          </Routes>
          <Routes>
              <Route path="/register" element={<Register/>} />
          </Routes>
          <Routes>
              <Route path="/account" element={
                  <ProtectedRoute>
                      <Account/>
                  </ProtectedRoute>
              } />
          </Routes>
          <Routes>
              <Route path="/logout" element={
                  <ProtectedRoute>
                      <Logout />
                  </ProtectedRoute>
              } />
          </Routes>
      </Router>
    </>
  )
}

export default App
