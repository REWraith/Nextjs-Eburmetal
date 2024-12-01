import React from 'react'
import homedata from '../utils/homedata'
import Link from 'next/link'

export default function Content () {
  return (
    <main className='container mx-auto px-4 py-16'>
      <h3 className='text-3xl font-bold text-gray-800 mb-8 text-center'>
        Projelerimiz
      </h3>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {homedata?.map(project => (
          <div
            key={project.id}
            className='bg-white rounded-lg shadow-lg overflow-hidden transition transform hover:scale-105 duration-300'
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className='w-full h-48 object-cover'
            />
            <div className='p-6'>
              <h4 className='font-bold text-xl mb-2'>{project.title}</h4>
              <p className='text-gray-600 mb-4'>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='flex justify-center mt-8'>
        <Link
          href='/projects'
          className='bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300'
        >
          Devamını Gör
        </Link>
      </div>
    </main>
  )
}
