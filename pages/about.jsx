import React from 'react'
import MainLayout from '../components/MainLayout'

export default function About () {
  return (
    <MainLayout>
      <section className='bg-gray-100 py-16'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold text-center text-gray-800 mb-8'>
            Hakkımızda
          </h2>

          <div className='flex flex-col lg:flex-row gap-12 items-center'>
            {/* Image Section */}
            <div className='lg:w-1/2'>
              <img
                src='https://i.imgur.com/z4FhiR0.png'
                alt='About Us'
                className='w-7xl h-auto rounded-lg shadow-lg'
              />
            </div>

            {/* Text Section */}
            <div className='lg:w-1/2 flex flex-col space-y-6'>
              <h3 className='text-2xl font-semibold text-gray-800'>
                Biz Kimiz?
              </h3>
              <p className='text-gray-700'>
                Ankara'da yeni bir şirket garaj kapama, teras kapama, demir
                perfoce gibi her türlü işlerinizi profesyonel ve hızla
                yapıyoruz.
              </p>

              {/* Skills or Key Points */}
              <div className='flex flex-wrap gap-4'>
                <span className='bg-blue-500 text-white px-4 py-2 rounded-full font-semibold'>
                  Uzmanlık
                </span>
                <span className='bg-blue-500 text-white px-4 py-2 rounded-full font-semibold'>
                  Kalite
                </span>
                <span className='bg-blue-500 text-white px-4 py-2 rounded-full font-semibold'>
                  Güvenilirlik
                </span>
                <span className='bg-blue-500 text-white px-4 py-2 rounded-full font-semibold'>
                  Yenilikçilik
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}
