import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Home from './Pages/Home'
import Users from './Pages/Users'
import Products from './Pages/Products'
import Header from './Components/Header'
import Footer from './Components/Footer'

export default function App() {
  return (
    <Router>
      <Header />

      <Container style={{height: '85vh'}} className='p-3'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="users/*" element={<Users />} />
          <Route path="products/*" element={<Products />} />
        </Routes>
      </Container>

      <Footer />
    </Router>
  )
}
