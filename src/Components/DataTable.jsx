import Table from 'react-bootstrap/Table'

export default function DataTable({ fields, items }) {
  // original source : https://stackoverflow.com/a/39718708
  function camel2title(camelCase) {
    // no side-effects
    return camelCase
      // inject space before the upper case letters
      .replace(/([A-Z])/g, function (match) {
        return ' ' + match
      })
      // replace first char with upper case
      .replace(/^./, function (match) {
        return match.toUpperCase()
      })
  }

  return (
    <Table bordered hover className='mt-3' responsive>
      <thead>
        <tr>
          {fields && fields.map((field, i) => (
            <th key={i}>{camel2title(field)}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {items && items.map((item, i) => (
          <tr key={i}>
            {fields && fields.map((field, j) => (
              <td key={'field_' + j}>{item[field]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  )
}
