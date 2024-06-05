import Breadcrumb from 'react-bootstrap/Breadcrumb'
import { Link } from 'react-router-dom'

export default function PageBreadcrumb({page}) {
  return (
    <Breadcrumb>
      <Link as={Link} to='/'>Home</Link>
      <Breadcrumb.Item></Breadcrumb.Item>
      <Breadcrumb.Item active>{ page }</Breadcrumb.Item>
    </Breadcrumb>
  )
}
