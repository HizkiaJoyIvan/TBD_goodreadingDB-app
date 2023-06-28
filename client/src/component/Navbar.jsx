import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate()
  const handleClick1 = () => {
    navigate('/')
  }
  const handleClick2 = () => {
    navigate('/about')
  }

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-white font-bold text-lg">Good Reading Database</a>
        <ul className="flex space-x-4">
          <li><a href="#" className="text-white hover:text-gray-300" onClick={handleClick1}>Home</a></li>
          <li><a href="#" className="text-white hover:text-gray-300" onClick={handleClick2}>About</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
