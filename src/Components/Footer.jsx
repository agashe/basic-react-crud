import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Footer() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <p className='text-center'>Basic CRUD &copy; 2024</p>
        </Col>
      </Row>
    </Container>
  )
}
