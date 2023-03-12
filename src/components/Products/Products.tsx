import { useContext } from 'react'
import LoginContext from '../../context/LoginContext'
import Filter from '../Filter/Filter'
import { ProductTableHeadingData, ProductsTableData } from './ProductsTableData'
import Table from '../Table/Table'
import Nav from '../Navbar/Navbar'
import Motion from '../shared/Motion'
const Products = (): JSX.Element => {
  const { day, dateNum, month, pmAM, timer } = useContext(LoginContext)

  const dayTimer = `${day} ${dateNum} ${month}`
  const dayTime = `${timer} ${pmAM}`

  return (
    <Motion>
      <div className="productSection">
        <Nav text="Products" dayTimed={dayTimer} dayTimer={dayTime} />
        <Filter
          linkText="products"
          column={ProductTableHeadingData}
          buttonText
          text="Add Product"
        />
        <section className="productTable">
          <Table
            columnData={ProductTableHeadingData}
            TableData={ProductsTableData}
          />
        </section>
      </div>
    </Motion>
  )
}

export default Products
