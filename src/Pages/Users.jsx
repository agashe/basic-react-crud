import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Pagination from 'react-bootstrap/Pagination'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'

export default function Users() {
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link to='/'>Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Users</Breadcrumb.Item>
      </Breadcrumb>

      <Form>
        <Row>
          <Col>
            <FloatingLabel label='Entries'>
              <Form.Select>
                <option value="5" selected>5</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
              </Form.Select>
            </FloatingLabel>
          </Col>
          <Col>
            <FloatingLabel label='Search ...'>
              <Form.Control placeholder="Enter something ..." />
            </FloatingLabel>
          </Col>
          <Col>
            <FloatingLabel label='Date of Birth'>
              <Form.Control type="date" />
            </FloatingLabel>
          </Col>
          <Col>
            <FloatingLabel label='Gender'>
              <Form.Select>
                <option disabled selected>Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </Form.Select>
            </FloatingLabel>
          </Col>
        </Row>
      </Form>

      <Table bordered className='mt-5'>
        <thead>
          <tr>
            <th>#</th>
            {Array.from({ length: 10 }).map((_, index) => (
              <th key={index}>Table heading</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            {Array.from({ length: 10 }).map((_, index) => (
              <td key={index}>Table cell {index}</td>
            ))}
          </tr>
          <tr>
            <td>2</td>
            {Array.from({ length: 10 }).map((_, index) => (
              <td key={index}>Table cell {index}</td>
            ))}
          </tr>
          <tr>
            <td>3</td>
            {Array.from({ length: 10 }).map((_, index) => (
              <td key={index}>Table cell {index}</td>
            ))}
          </tr>
          <tr>
            <td>4</td>
            {Array.from({ length: 10 }).map((_, index) => (
              <td key={index}>Table cell {index}</td>
            ))}
          </tr>
          <tr>
            <td>5</td>
            {Array.from({ length: 10 }).map((_, index) => (
              <td key={index}>Table cell {index}</td>
            ))}
          </tr>
        </tbody>
      </Table>

      <Pagination style={{ display: "flex", justifyContent: "center" }}>
        <Pagination.Prev />
        <Pagination.Item>{1}</Pagination.Item>
        <Pagination.Item active>{2}</Pagination.Item>
        <Pagination.Ellipsis />
        <Pagination.Item>{4}</Pagination.Item>
        <Pagination.Item>{5}</Pagination.Item>
        <Pagination.Next />
      </Pagination>
    </>
  )
}
