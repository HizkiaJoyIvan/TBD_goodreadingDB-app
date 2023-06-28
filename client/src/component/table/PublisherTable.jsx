import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useRef } from 'react'

const EditData = ({id}) => {

  const [showEditTool, setShowEditTool] = useState(false)
  const publisher_name = useRef()
  const year_founded = useRef()
  const city_id = useRef()
  const country_id = useRef()

  const handleDone = async (e) => {
    e.preventDefault()
    try {
      const input = {
        publisher_name: publisher_name.current.value,
        year_founded: year_founded.current.value,
        city_id: city_id.current.value,
        country_id: country_id.current.value
      }
      await axios.put(`http://localhost:3200/api/publisher/${id}`, input)
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
              Name
            </label>
            <input
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Enter your name"
              ref={publisher_name}
            />
          </div>
          <div class="mb-4 flex items-center gap-2">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
              Year Founded
            </label>
            <input
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Enter your name"
              ref={year_founded}
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
              placeholder="Enter your name"
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
              placeholder="Enter your name"
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
      await axios.delete(`http://localhost:3200/api/publiser/${id}`)
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

const DeleteMultipleData = ({id}) => {

  const [showDeleteMultipleTool, setShowDeleteMultipleTool] = useState(false)
  const selectedID1 = useRef()
  const selectedID2 = useRef()
  const selectedID3 = useRef()

  const handleDone = async (e) => {
    e.preventDefault()
    try {
      await axios.delete('http://localhost:3200/api/publisher/deleteMultiple', {
        data: {
          id1: selectedID1.current.value,
          id2: selectedID2.current.value,
          id3: selectedID3.current.value
        }
      })
      setShowDeleteMultipleTool(false)
      window.location.reload()
    } catch(err) {
      console.log(err)
    }
  }

  return (
    <div>
      <button className="bg-purple-500 hover:text-purple-700 text-white rounded-md p-2 cursor-pointer"
              onClick={()=>setShowDeleteMultipleTool(!showDeleteMultipleTool)}>
        Delete Multiple Data
      </button>
      {showDeleteMultipleTool && (
        <form class="max-w-md mx-auto bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 gap-2 absolute"
              onSubmit={handleDone}>
          <div class="mb-4 flex items-center gap-2">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="selectedID1">
              ID
            </label>
            <input
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="selectedID1"
              type="number"
              placeholder="Enter first ID"
              ref={selectedID1}
            />
          </div>
          <div class="mb-4 flex items-center gap-2">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="selectedID2">
              ID
            </label>
            <input
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="selectedID2"
              type="text"
              placeholder="Enter second ID"
              ref={selectedID2}
            />
          </div>
          <div class="mb-4 flex items-center gap-2">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="selectedID3">
              ID
            </label>
            <input
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="selectedID3"
              type="text"
              placeholder="Enter third ID"
              ref={selectedID3}
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
              onClick={()=>setShowDeleteMultipleTool(false)}
            >
              Cancel
            </a>
          </div>
        </form>
      )}
    </div>
  )
}


const AddData = () => {

  const [showAddTool, setShowAddTool] = useState(false)
  const publisher_name = useRef()
  const year_founded = useRef()
  const city_id = useRef()
  const country_id = useRef()

  const handleDone = async (e) => {
    e.preventDefault()
    try {
      const input = {
        publisher_name: publisher_name.current.value,
        year_founded: year_founded.current.value,
        city_id: city_id.current.value,
        country_id: country_id.current.value
      }
      await axios.post(`http://localhost:3200/api/publisher`, input)
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
              ref={publisher_name}
            />
          </div>
          <div class="mb-4 flex items-center gap-2">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
              Year Founded
            </label>
            <input
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Enter your name"
              ref={year_founded}
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
              placeholder="Enter your name"
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
              placeholder="Enter your name"
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

const PublisherTable = () => {
  const [table, setTable] = useState([])


  useEffect(()=> {
    const fetchData = async () => {
        try {
            const res = await axios.get(`http://localhost:3200/api/publisher`)
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
            Name
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Year Founded
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            City ID
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Country ID
          </th>
          <th>
            <DeleteMultipleData />
          </th>
          <th>
            <AddData />
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {table.map(t => (
          <tr key={t.publisher_id}>
            <td className="px-6 py-4 whitespace-nowrap">{t.publisher_id}</td>
            <td className="px-6 py-4 whitespace-nowrap">{t.publisher_name}</td>
            <td className="px-6 py-4 whitespace-nowrap">{t.year_founded}</td>
            <td className="px-6 py-4 whitespace-nowrap">{t.city_id}</td>
            <td className="px-6 py-4 whitespace-nowrap">{t.country_id}</td>
            <td className="px-6 py-4 whitespace-nowrap flex gap-2">
              <DeleteData id={t.publisher_id}/>
              <EditData id={t.publisher_id}/>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default PublisherTable
