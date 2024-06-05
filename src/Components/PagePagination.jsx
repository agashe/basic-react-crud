import Pagination from 'react-bootstrap/Pagination'

export default function PagePagination({ current, total, handler }) {
  return (
    <Pagination style={{ display: "flex", justifyContent: "center" }}>
      <Pagination.Prev disabled={(1 == current)} onClick={() => handler(current - 1)} />

      {Array.from({ length: 10 }).map((_, index) => (
        <Pagination.Item active={((current + index) == current)} onClick={() => handler(current + index)}>
          {current + index}
        </Pagination.Item>
      ))}

      <Pagination.Next disabled={(total == current)} onClick={() => handler(current + 1)} />
    </Pagination>
  )
}
