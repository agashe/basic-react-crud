import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Home() {
  return (
    <>
      <Card style={{ height: '200px', margin: '0 auto', textAlign: 'center' }}>
        <Card.Body>
          <Card.Title>
            <h1>Basic CRUD</h1>
          </Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus condimentum nisl ac
            condimentum. Aliquam molestie, leo quis pellentesque rutrum, nisl dolor pulvinar erat, eget lobortis
            nulla risus nec diam. Nulla ultricies est ut ante gravida fringilla. Donec non felis orci. Nunc tempor
            eget quam vel venenatis. Nullam non blandit velit, id consequat sem. Nunc semper, nisl sed lobortis
            pellentesque, sapien tellus rutrum sem, vel ultricies elit elit nec lectus.
          </Card.Text>
        </Card.Body>
      </Card>

      <h2 className='mt-5 mb-4 text-center'>Features</h2>

      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Feature #1</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus condimentum nisl ac
                condimentum. Aliquam molestie leo quis pellentesque rutrum, nisl dolor pulvinar erat
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Feature #2</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus condimentum nisl ac
                condimentum. Aliquam molestie leo quis pellentesque rutrum, nisl dolor pulvinar erat
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Feature #3</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus condimentum nisl ac
                condimentum. Aliquam molestie leo quis pellentesque rutrum, nisl dolor pulvinar erat
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  )
}
