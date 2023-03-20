import React from 'react'
const Pagination = (): JSX.Element => {
  return (
    <div className="pagination">
      <div style={{ marginRight: '5px' }}>
        <button type="button" className="inactive">
          <img src="https://res.cloudinary.com/bizstak/image/upload/v1679313778/pagination-arrow-left_iw4gev.svg" />
        </button>
      </div>

      <div className="pagination-button">
        <button type="button">1</button>
        <button type="button">2</button>
        <button type="button">3</button>
        <button type="button">...</button>
        <button type="button">10</button>
      </div>

      <div style={{ marginLeft: '5px' }}>
        <button className="active">
          <img src="https://res.cloudinary.com/bizstak/image/upload/v1679314010/pagination-active-arrow-right_sll2cn.svg" />
        </button>
      </div>
    </div>
  )
}

export default Pagination
