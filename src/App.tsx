import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router";
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
              <Route path="/login" element={<Login/>} />
              <Route path="/register" element={<Register/>} />
              <Route path="/user/:id" element={<Account/>} />
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
