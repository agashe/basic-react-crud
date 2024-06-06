import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function ProductsFilters({ perPage, setPerPage, searchHandler, categoryFilter, categories }) {
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
          <FloatingLabel label='Category'>
            <Form.Select defaultValue={''}
              onChange={(e) => { categoryFilter(e.target.value) }}>
              <option value=''>Select Category</option>
              {
                categories && categories.map((category, i) => (
                  <option value={category} key={'category_' + i}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))
              }
            </Form.Select>
          </FloatingLabel>
        </Col>
      </Row>
    </Form>
  )
}
