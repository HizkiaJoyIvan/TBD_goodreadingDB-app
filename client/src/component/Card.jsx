import React from 'react'
import {useNavigate} from 'react-router-dom'

const Card = ({type}) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/${type}`)
  }
 
  return (
    <div 
        className='bg-blue-300 rounded-lg shadow-md p-4 cursor-pointer my-4 hover:bg-blue-600'
        onClick={handleClick}>
      <h2 className='text-white font-medium'>{type[0].toUpperCase()+type.substring(1)}</h2>
    </div>
  )
}

export default Card
