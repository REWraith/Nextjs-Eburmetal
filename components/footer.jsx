import React from 'react'

export default function Footer () {
  return (
    <footer className='bg-gray-800 text-gray-300 py-8'>
      <div className='container mx-auto text-center'>
        <p>
          &copy; {new Date().getFullYear()} Ebru Metal. Tüm Hakları Saklıdır.
        </p>
      </div>
    </footer>
  )
}
