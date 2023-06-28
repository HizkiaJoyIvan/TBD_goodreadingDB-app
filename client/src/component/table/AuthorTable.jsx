import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useRef } from 'react'

const EditData = ({id}) => {

  const [showEditTool, setShowEditTool] = useState(false)
  const fullname = useRef()
  const age = useRef()

  const handleDone = async (e) => {
    e.preventDefault()
    try {
      const input = {
        fullname: fullname.current.value,
        age: age.current.value,
      }
      await axios.put(`http://localhost:3200/api/author/${id}`, input)
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
            <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
              Fullname
            </label>
            <input
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Enter your name"
              ref={fullname}
            />
          </div>
          <div class="mb-4 flex items-center gap-2">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
              Age
            </label>
            <input
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Enter your name"
              ref={age}
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
      await axios.delete(`http://localhost:3200/api/author/${id}`)
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
  const fullname = useRef()
  const age = useRef()


  const handleDone = async (e) => {
    e.preventDefault()
    try {
      const input = {
        fullname: fullname.current.value,
        age: age.current.value,
      }
      await axios.post(`http://localhost:3200/api/author`, input)
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
            <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
              Name
            </label>
            <input
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Enter your name"
              ref={fullname}
            />
          </div>
          <div class="mb-4 flex items-center gap-2">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
              Age
            </label>
            <input
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Enter your name"
              ref={age}
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

const AuthorTable = () => {
  const [table, setTable] = useState([])


  useEffect(()=> {
    const fetchData = async () => {
        try {
            const res = await axios.get(`http://localhost:3200/api/author`)
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
            Age
          </th>
          <th>
            <AddData />
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {table.map(t => (
          <tr key={t.author_id}>
            <td className="px-6 py-4 whitespace-nowrap">{t.author_id}</td>
            <td className="px-6 py-4 whitespace-nowrap">{t.fullname}</td>
            <td className="px-6 py-4 whitespace-nowrap">{t.age}</td>
            <td className="px-6 py-4 whitespace-nowrap flex gap-2">
              <DeleteData id={t.author_id}/>
              <EditData id={t.author_id}/>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default AuthorTable
