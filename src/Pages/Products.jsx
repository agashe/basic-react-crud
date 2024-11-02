import PageBreadcrumb from '../Components/PageBreadcrumb'
import PagePagination from '../Components/PagePagination'
import ProductsFilters from '../Components/ProductsFilters'
import DataTable from '../Components/DataTable'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Products() {
  const [products, setProducts] = useState([])
  const [allProducts, setAllProducts] = useState([])
  const [perPage, setPerPage] = useState(5)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [totalAllPages, setTotalAllPages] = useState(0)
  const [categoryFilterValue, setCategoryFilterValue] = useState('')
  const [categories, setCategories] = useState([])

  const fields = [
    'id', 'title', 'category',
    'price', 'discountPercentage', 'rating', 'stock',
    'brand', 'sku', 'weight', 'availabilityStatus',
    'returnPolicy', 'warrantyInformation'
  ]

  let parameters = `limit=${perPage}&skip=${(currentPage - 1) * perPage}&select=${fields.join(',')}`

  function fetchProducts(productsUrl = `/products?${parameters}`) {
    axios.get(productsUrl)
      .then(function (response) {
        setProducts(response.data.products)
        setAllProducts(response.data.products)
        setTotalPages(parseInt(Math.ceil(response.data.total / perPage)))
        setTotalAllPages(parseInt(Math.ceil(response.data.total / perPage)))
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  function fetchCategories() {
    axios.get(`/products/category-list`)
      .then(function (response) {
        setCategories(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  function searchHandler(keyword) {
    if (!keyword.trim()) {
      setAllProducts(products)
      setTotalAllPages(totalPages)
      return
    }

    let filteredProducts = []

    filteredProducts = products.filter((product) => {
      return Object.keys(product).some(function (key) {
        return product[key].toString().includes(keyword)
      })
    })

    setAllProducts(filteredProducts)
    setTotalAllPages(parseInt(Math.ceil(filteredProducts.length / perPage)))
  }

  function categoryFilter(category, page = 1) {
    if (!category) {
      setCurrentPage(1)
      fetchProducts()
    }

    setCurrentPage(page)
    setCategoryFilterValue(category)
    fetchProducts(`/products/category/${category}?${parameters}`)
  }

  useEffect(() => {
    if (categoryFilterValue != '') {
      categoryFilter(categoryFilterValue, currentPage)
    }
    else {
      fetchProducts()
    }

    fetchCategories()
  }, [currentPage, perPage])

  return (
    <>
      <PageBreadcrumb page='Products' />

      <ProductsFilters
        perPage={perPage}
        setPerPage={setPerPage}
        searchHandler={searchHandler}
        categoryFilter={categoryFilter}
        categories={categories}
      />

      <DataTable fields={fields} items={allProducts} />

      <PagePagination current={currentPage} total={totalAllPages} handler={setCurrentPage} />
    </>
  )
}
