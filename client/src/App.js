import React from 'react'
import './App.css'
import Card from './component/Card'
import Navbar from './component/Navbar'
import CityTable from './component/table/CityTable'
import CountryTable from './component/table/CountryTable'
import PublisherTable from './component/table/PublisherTable'
import BookTable from './component/table/BookTable'
import AuthorTable from './component/table/AuthorTable'
import TransactionTable from './component/table/TransactionTable'
import CustomerTable from './component/table/CustomerTable'
import './index.css'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import AddressTable from './component/table/AddressTable'

const App = () => {

  const tables = ["country", "city", "publisher", "author", "transaction", "book", "address", "customer"]
  
  const Layout = () => {
    return (
      <div className=''>
        <Navbar />
        <div className="grid grid-cols-2 gap-4 text-center p-2">
          {tables.map(t => (
            <Card type={t}/>
          ))}
        </div>
        <Outlet />
      </div>
    )
  }

  const About = () => {
    return (
      <div className=''>
        <Navbar />
        <p className='bg-blue-300 rounded-lg shadow-md p-4 cursor-pointer my-4 hover:bg-blue-600 hover:text-white'>Created by Hizkia Joy Ivan (21/479490/TK/52909)</p>
      </div>
    )
  }

  return (  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/country" element={<CountryTable/>}/>
          <Route path="/city" element={<CityTable/>}/>
          <Route path="/book" element={<BookTable />}/>
          <Route path="/publisher" element={<PublisherTable/>}/>
          <Route path="/author" element={<AuthorTable/>}/>
          <Route path='/transaction' element={<TransactionTable />}/>
          <Route path='/address' element={<AddressTable />}/>
          <Route path='/customer' element={<CustomerTable />}/>
        </Route>
        <Route path="/about" element={<About />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

