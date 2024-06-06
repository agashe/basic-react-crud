import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function UsersFilters({ perPage, setPerPage, searchHandler, birthDateFilter, genderFilter }) {
  return (
    <Form>
      <Row>
        <Col>
          <FloatingLabel label='Entries'>
            <Form.Select defaultValue={perPage} onChange={(e) => { setPerPage(e.target.value) }}>
              <option value='5'>5</option>
              <option value='10'>10</option>
              <option value='20'>20</option>
              <option value='50'>50</option>
            </Form.Select>
          </FloatingLabel>
        </Col>
        <Col>
          <FloatingLabel label='Search ...'>
            <Form.Control placeholder='Enter something ...'
              onChange={(e) => { searchHandler(e.target.value) }} />
          </FloatingLabel>
        </Col>
        <Col>
          <FloatingLabel label='Date of Birth'>
            <Form.Control type='date' id='filter-bd'
              onChange={(e) => {
                document.getElementById('filter-gender').value = ''
                birthDateFilter(e.target.value)
              }} />
          </FloatingLabel>
        </Col>
        <Col>
          <FloatingLabel label='Gender'>
            <Form.Select defaultValue={''} id='filter-gender'
              onChange={(e) => {
                document.getElementById('filter-bd').value = ''
                genderFilter(e.target.value)
              }}>
              <option value=''>Select Gender</option>
              <option value='male'>Male</option>
              <option value='female'>Female</option>
            </Form.Select>
          </FloatingLabel>
        </Col>
      </Row>
    </Form>
  )
}
