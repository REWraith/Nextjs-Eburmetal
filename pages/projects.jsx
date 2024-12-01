import React, { useState } from 'react'
import projectData from '../utils/data'
import { ClipLoader } from 'react-spinners'
import MainLayout from '../components/MainLayout'

export default function Projects () {
  return (
    <MainLayout>
      <main className='container mx-auto px-4 py-16'>
        <h3 className='text-3xl font-bold text-gray-800 mb-8 text-center'>
          Tüm Projelerimiz
        </h3>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projectData.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </main>
    </MainLayout>
  )
}

// Individual Project Card with loader and animations
function ProjectCard ({ project }) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className='bg-white rounded-lg shadow-lg overflow-hidden transition transform hover:scale-105 duration-300 animate-fade-in'>
      <div className='relative w-full h-48 bg-gray-200'>
        {!isLoaded && (
          <div className='flex items-center justify-center h-full'>
            <ClipLoader color='#3B82F6' size={40} /> {/* Loader */}
          </div>
        )}
        <img
          src={project.imageUrl}
          alt={project.title}
          className={`w-full h-48 object-cover transition-opacity duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setIsLoaded(true)}
        />
      </div>
      <div className='p-6'>
        <h4 className='font-bold text-xl mb-2'>{project.title}</h4>
        <p className='text-gray-600 mb-4'>{project.description}</p>
      </div>
    </div>
  )
}
