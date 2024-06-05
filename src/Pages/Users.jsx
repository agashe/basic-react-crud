import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import PageBreadcrumb from '../Components/PageBreadcrumb'
import PagePagination from '../Components/PagePagination'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Users() {
  const [users, setUsers] = useState([])
  const [perPage, setPerPage] = useState(5)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)

  const fields = [
    'id', 'firstName', 'lastName', 'age',
    'maidenName', 'gender', 'email', 'phone',
    'birthDate', 'bloodGroup', 'height', 'weight',
    'eyeColor'
  ]

  useEffect(() => {
    axios.get(`/users?limit=${perPage}&skip=${(currentPage - 1) * perPage}&select=${fields.join(',')}`)
      .then(function (response) {
        setUsers(response.data.users)
        setTotalPages(parseInt(response.data.total / perPage))
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [currentPage])

  function goToPage(page) { 
    setCurrentPage(page) 
  }

  return (
    <>
      <PageBreadcrumb page='Users' />

      <Form>
        <Row>
          <Col>
            <FloatingLabel label='Entries'>
              <Form.Select defaultValue={perPage}>
                <option value="5">5</option>
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

      <Table bordered className='mt-3' responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Maiden Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Birth Date</th>
            <th>Blood Group</th>
            <th>Height</th>
            <th>Weight</th>
            <th>Eye Color</th>
          </tr>
        </thead>
        <tbody>
          {users && users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.maidenName}</td>
              <td>{user.age}</td>
              <td>{user.gender}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.birthDate}</td>
              <td>{user.bloodGroup}</td>
              <td>{user.height}</td>
              <td>{user.weight}</td>
              <td>{user.eyeColor}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <PagePagination current={currentPage} total={totalPages} handler={goToPage} />
    </>
  )
}
