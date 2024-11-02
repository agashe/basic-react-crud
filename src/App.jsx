import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Home from './Pages/Home'
import Users from './Pages/Users'
import Products from './Pages/Products'
import Header from './Components/Header'
import Footer from './Components/Footer'
import axios from 'axios'

axios.defaults.baseURL = 'https://dummyjson.com'

axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.defaults.headers.common['Accept'] = 'application/json'
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'

export default function App() {
  return (
    <Router>
      <Header />

      <Container style={{ minHeight: '85vh', height: '85vh' }} className='p-3'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='users/*' element={<Users />} />
          <Route path='products/*' element={<Products />} />
        </Routes>
        
        <Footer />
      </Container>
    </Router>
  )
}
