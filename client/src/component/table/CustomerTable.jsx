import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useRef } from 'react'

const EditData = ({id}) => {

  const [showEditTool, setShowEditTool] = useState(false)
  const fullname = useRef()
  const email = useRef()
  const pwd = useRef()
  const address_id = useRef()

  const handleDone = async (e) => {
    e.preventDefault()
    try {
      const input = {
        fullname: fullname.current.value,
        email: email.current.value,
        pwd: pwd.current.value,
        address_id: address_id.current.value,
      }
      await axios.put(`http://localhost:3200/api/customer/${id}`, input)
      setShowEditTool(false)
      window.location.reload()
    } catch(err) {
      console.log(err)
    }
  }

  return (
    <div>
      <button className="bg-blue-500 hover:text-blue-700 text-white rounded-md p-2 cursor-pointer"
              onClick={()=>setShowEditTool(!showEditTool)}>
        Edit
      </button>
      {showEditTool && (
        <form class="max-w-md mx-auto bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 gap-2 absolute"
              onSubmit={handleDone}>
          <div class="mb-4 flex items-center gap-2">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="fullname">
              Fullname
            </label>
            <input
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="fullname"
              type="text"
              placeholder="Enter the fullname"
              ref={fullname}
            />
          </div>
          <div class="mb-4 flex items-center gap-2">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
              Email
            </label>
            <input
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="Enter your email"
              ref={email}
            />
          </div>
          <div class="mb-4 flex items-center gap-2">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="pwd">
              Password
            </label>
            <input
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="pwd"
              type="text"
              placeholder="Enter your password"
              ref={pwd}
            />
          </div>
          <div class="mb-4 flex items-center gap-2">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="address_id">
              Address ID
            </label>
            <input
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="address_id"
              type="text"
              placeholder="Enter your address ID"
              ref={address_id}
            />
          </div>
          <div class="flex items-center justify-between">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Done
            </button>
            <a
              class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 cursor-pointer"
              onClick={()=>setShowEditTool(false)}
            >
              Cancel
            </a>
          </div>
        </form>
      )}
    </div>
  )
}

const DeleteData = ({id}) => {

  const [showDeleteTool, setShowDeleteTool] = useState(false)

  const handleDone = async () => {
    try {
      await axios.delete(`http://localhost:3200/api/customer/${id}`)
      setShowDeleteTool(false)
      window.location.reload()
    } catch(err) {
      console.log(err)
    }
  }

  return (
    <div>
      <button className="bg-red-500 hover:text-red-700 text-white rounded-md p-2 cursor-pointer"
              onClick={()=>setShowDeleteTool(!showDeleteTool)}>
        Delete
      </button>
      {showDeleteTool && (
        <section class="max-w-md mx-auto bg-white shadow-md rounded-lg px-8 py-6 absolute">
          <h2 class="text-gray-800 text-lg font-bold mb-4">You sure want to delete this?</h2>
          <div class="flex justify-end">
            <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2 focus:outline-none focus:shadow-outline" type="button"
                    onClick={handleDone}>
              Yes
            </button>
            <button class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button"
                    onClick={()=>setShowDeleteTool(false)}>
              No
            </button>
          </div>
        </section>
      )}
    </div>
  )
}

const AddData = () => {

  const [showAddTool, setShowAddTool] = useState(false)
  const street = useRef()
  const city_id = useRef()
  const country_id = useRef()

  const handleDone = async (e) => {
    e.preventDefault()
    try {
      const input = {
        street: street.current.value,
        city_id: city_id.current.value,
        country_id: country_id.current.value,
      }
      await axios.post(`http://localhost:3200/api/customer`, input)
      setShowAddTool(false)
      window.location.reload()
    } catch(err) {
      console.log(err)
    }
  }

  return (
    <div>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline m-4"
              onClick={()=>setShowAddTool(!showAddTool)}>
        <span class="text-xl leading-none">+</span>
      </button>
      {showAddTool && (
        <form class="max-w-md mx-auto bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 gap-2 absolute"
              onSubmit={handleDone}>
          <div class="mb-4 flex items-center gap-2">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="street">
              Street
            </label>
            <input
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="street"
              type="text"
              placeholder="Enter the street name"
              ref={street}
            />
          </div>
          <div class="mb-4 flex items-center gap-2">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
              City ID
            </label>
            <input
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Enter city ID"
              ref={city_id}
            />
          </div>
          <div class="mb-4 flex items-center gap-2">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
              Country ID
            </label>
            <input
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Enter country ID"
              ref={country_id}
            />
          </div>
          <div class="flex items-center justify-between">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Done
            </button>
            <a
              class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 cursor-pointer"
              onClick={()=>setShowAddTool(false)}
            >
              Cancel
            </a>
          </div>
        </form>
      )}
    </div>
  )
}

const CustomerTable = () => {
  const [table, setTable] = useState([])


  useEffect(()=> {
    const fetchData = async () => {
        try {
            const res = await axios.get(`http://localhost:3200/api/customer`)
            console.log(res.data)
            setTable(res.data)
        } catch(err) {
            console.log(err)
        }
    }
    fetchData()
  }, [])

  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            ID
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Fullname
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Email
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Password
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Address ID
          </th>
          <th>
            <AddData />
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {table.map(t => (
          <tr key={t.customer_id}>
            <td className="px-6 py-4 whitespace-nowrap">{t.customer_id}</td>
            <td className="px-6 py-4 whitespace-nowrap">{t.fullname}</td>
            <td className="px-6 py-4 whitespace-nowrap">{t.email}</td>
            <td className="px-6 py-4 whitespace-nowrap">{t.pwd}</td>
            <td className="px-6 py-4 whitespace-nowrap">{t.address_id}</td>
            <td className="px-6 py-4 whitespace-nowrap flex gap-2">
              <DeleteData id={t.customer_id}/>
              <EditData id={t.customer_id}/>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default CustomerTable
