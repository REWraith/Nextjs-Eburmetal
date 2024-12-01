import React, { useState } from 'react'
import Link from 'next/link'
import { FaBars, FaTimes } from 'react-icons/fa'

export default function Navbar () {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className='bg-white shadow-md py-4 px-6 flex justify-between items-center sticky top-0 z-50'>
      {/* Logo */}
      <Link
        href='/'
        className='text-2xl font-bold text-gray-800 hover:text-blue-600 transition duration-300 ease-in-out'
      >
        Ebru Metal
      </Link>

      {/* Desktop Menu */}
      <ul className='hidden md:flex space-x-6'>
        <li className='relative group'>
          <Link
            href='/about'
            className='text-gray-600 hover:text-blue-600 transition duration-300 ease-in-out transform group-hover:scale-105'
          >
            Hakkımızda
            <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 ease-in-out group-hover:w-full'></span>
          </Link>
        </li>
        <li className='relative group'>
          <Link
            href='/projects'
            className='text-gray-600 hover:text-blue-600 transition duration-300 ease-in-out transform group-hover:scale-105'
          >
            Projeler
            <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 ease-in-out group-hover:w-full'></span>
          </Link>
        </li>
        <li className='relative group'>
          <Link
            href='/gallery'
            className='text-gray-600 hover:text-blue-600 transition duration-300 ease-in-out transform group-hover:scale-105'
          >
            Galeri
            <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 ease-in-out group-hover:w-full'></span>
          </Link>
        </li>
        <li className='relative group'>
          <Link
            href='/contact'
            className='text-gray-600 hover:text-blue-600 transition duration-300 ease-in-out transform group-hover:scale-105'
          >
            İletişim
            <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 ease-in-out group-hover:w-full'></span>
          </Link>
        </li>
      </ul>

      {/* Mobile Menu Toggle Button */}
      <div className='md:hidden'>
        <button
          onClick={toggleMenu}
          className='text-gray-600 focus:outline-none'
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <ul className='absolute top-full left-0 w-full bg-white shadow-lg mt-2 py-4 flex flex-col items-center space-y-4 md:hidden animate-slide-in'>
          <li>
            <Link
              href='/about'
              className='text-gray-600 hover:text-blue-600 transition duration-300 ease-in-out'
              onClick={toggleMenu}
            >
              Hakkımızda
            </Link>
          </li>
          <li>
            <Link
              href='/projects'
              className='text-gray-600 hover:text-blue-600 transition duration-300 ease-in-out'
              onClick={toggleMenu}
            >
              Projeler
            </Link>
          </li>
          <li>
            <Link
              href='/gallery'
              className='text-gray-600 hover:text-blue-600 transition duration-300 ease-in-out'
              onClick={toggleMenu}
            >
              Galeri
            </Link>
          </li>
          <li>
            <Link
              href='/contact'
              className='text-gray-600 hover:text-blue-600 transition duration-300 ease-in-out'
              onClick={toggleMenu}
            >
              İletişim
            </Link>
          </li>
        </ul>
      )}
    </nav>
  )
}
