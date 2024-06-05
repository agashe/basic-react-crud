import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import Home from './Pages/Home'
import Users from './Pages/Users'
import Products from './Pages/Products'
import Header from './Components/Header'

export default function App() {
  return (
    <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="users/*" element={<Users />} />
          <Route path="products/*" element={<Products />} />
        </Routes>
    </Router>
  )
}
