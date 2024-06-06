import Pagination from 'react-bootstrap/Pagination'
import React from 'react'

export default function PagePagination({ current, total, handler }) {
  let offset = -3

  if (current == 1) {
    offset = 0
  }
  else if (current == 2) {
    offset = -1
  }
  else if (current == 3) {
    offset = -2
  }
  else if (( total > 10) && current == total) {
    offset = -9
  }
  else if (( total > 10) && (current + 10) > total) {
    offset = -8
  }

  return (
    <Pagination style={{ display: 'flex', justifyContent: 'center' }}>
      <Pagination.First disabled={(1 == current)} onClick={() => handler(1)} />
      <Pagination.Prev disabled={(1 == current)} onClick={() => handler(current - 1)} />

      {Array.from({ length: (total > 10) ? 10 : total }).map((_, index) => (
        <React.Fragment key={'page_' + current + index + offset}>
          <Pagination.Item active={((current + index + offset) == current)}
            onClick={() => handler(current + index + offset)}>
            {current + index + offset}
          </Pagination.Item>

          {(index == 5) && <Pagination.Ellipsis />}
        </React.Fragment>
      ))}

      <Pagination.Next disabled={(total == current)} onClick={() => handler(current + 1)} />
      <Pagination.Last disabled={(total == current)} onClick={() => handler(total)} />
    </Pagination>
  )
}
