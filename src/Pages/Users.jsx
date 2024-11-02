import PageBreadcrumb from '../Components/PageBreadcrumb'
import PagePagination from '../Components/PagePagination'
import UsersFilters from '../Components/UsersFilters'
import DataTable from '../Components/DataTable'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Users() {
  const [users, setUsers] = useState([])
  const [allUsers, setAllUsers] = useState([])
  const [perPage, setPerPage] = useState(5)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [totalAllPages, setTotalAllPages] = useState(0)
  const [birthDateFilterValue, setBirthDateFilterValue] = useState('')
  const [genderFilterValue, setGenderFilterValue] = useState('')

  const fields = [
    'id', 'firstName', 'lastName', 'age',
    'maidenName', 'gender', 'email', 'phone',
    'birthDate', 'bloodGroup', 'height', 'weight',
    'eyeColor'
  ]

  let parameters = `limit=${perPage}&skip=${(currentPage - 1) * perPage}&select=${fields.join(',')}`

  function fetchUsers(usersUrl = `/users?${parameters}`) {
    axios.get(usersUrl)
      .then(function (response) {
        setUsers(response.data.users)
        setAllUsers(response.data.users)
        setTotalPages(parseInt(Math.ceil(response.data.total / perPage)))
        setTotalAllPages(parseInt(Math.ceil(response.data.total / perPage)))
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  function searchHandler(keyword) {
    if (!keyword.trim()) {
      setAllUsers(users)
      setTotalAllPages(totalPages)
      return
    }

    let filteredUsers = []

    filteredUsers = users.filter((user) => {
      return Object.keys(user).some(function(key) {
        return user[key].toString().includes(keyword)
      })
    })

    setAllUsers(filteredUsers)
    setTotalAllPages(parseInt(Math.ceil(filteredUsers.length / perPage)))
  }

  function birthDateFilter(birthDate, page = 1) {
    if (!birthDate) {
      setCurrentPage(1)
      fetchUsers()
    }

    setCurrentPage(page)
    setGenderFilterValue('')
    setBirthDateFilterValue(birthDate)
    fetchUsers(`/users/filter?key=birthDate&value=${birthDate.replaceAll('-0', '-')}&${parameters}`)
  }

  function genderFilter(gender, page = 1) {
    if (!gender) {
      setCurrentPage(1)
      fetchUsers()
    }

    setCurrentPage(page)
    setBirthDateFilterValue('')
    setGenderFilterValue(gender)
    fetchUsers(`/users/filter?key=gender&value=${gender}&${parameters}`)
  }

  useEffect(() => {
    if (birthDateFilterValue != '') {
      birthDateFilter(birthDateFilterValue, currentPage)
    }
    else if (genderFilterValue != '') {
      genderFilter(genderFilterValue, currentPage)
    }
    else {
      fetchUsers()
    }
  }, [currentPage, perPage])

  return (
    <>
      <PageBreadcrumb page='Users' />

      <UsersFilters
        perPage={perPage}
        setPerPage={setPerPage}
        searchHandler={searchHandler}
        birthDateFilter={birthDateFilter}
        genderFilter={genderFilter}
      />

      <DataTable fields={fields} items={allUsers} />

      <PagePagination current={currentPage} total={totalAllPages} handler={setCurrentPage} />
    </>
  )
}
