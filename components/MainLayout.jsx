import React from 'react'
import Footer from './footer'
import Division from './division'
import Navbar from './navbar'

const MainLayout = ({ children }) => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <main className='flex-grow'>{children}</main>
      <Footer />
      <Division />
    </div>
  )
}

export default MainLayout
