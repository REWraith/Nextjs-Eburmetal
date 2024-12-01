import React, { useState, useEffect, useCallback } from 'react'
import { useSwipeable } from 'react-swipeable'
import projectData from '../utils/data'
import MainLayout from '../components/MainLayout'

export default function Gallery () {
  const [currentIndex, setCurrentIndex] = useState(0)

  const images = projectData.map(project => project.imageUrl)

  const goToNext = useCallback(() => {
    setCurrentIndex(prevIndex =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }, [images.length])

  useEffect(() => {
    const interval = setInterval(goToNext, 5000)
    return () => clearInterval(interval)
  }, [goToNext])

  const goToPrevious = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  const goToIndex = index => {
    setCurrentIndex(index)
  }

  const swipeHandlers = useSwipeable({
    onSwipedLeft: goToNext,
    onSwipedRight: goToPrevious,
    preventScrollOnSwipe: true,
    trackMouse: true
  })

  return (
    <MainLayout>
      <div className='gallery-container flex flex-col items-center py-8'>
        {/* Main Image Display */}
        <div
          {...swipeHandlers}
          className='relative w-full max-w-5xl h-[500px] bg-gray-100 rounded-lg overflow-hidden shadow-lg'
        >
          <img
            src={images[currentIndex]}
            alt={`Görsel ${currentIndex + 1}`} // Modified alt text
            className='w-full h-full object-cover transition-opacity duration-500 ease-in-out'
          />

          {/* Previous and Next Controls */}
          <button
            className='absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition'
            onClick={goToPrevious}
          >
            ❮
          </button>
          <button
            className='absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition'
            onClick={goToNext}
          >
            ❯
          </button>
        </div>

        {/* Thumbnail Overview */}
        <div className='flex space-x-2 mt-4'>
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Görsel ${index + 1}`} // Modified alt text
              className={`w-20 h-20 object-cover cursor-pointer rounded-lg transition-transform duration-300 ${
                index === currentIndex
                  ? 'transform scale-110 border-4 border-blue-500'
                  : 'opacity-75 hover:opacity-100'
              }`}
              onClick={() => goToIndex(index)}
            />
          ))}
        </div>
      </div>
    </MainLayout>
  )
}
