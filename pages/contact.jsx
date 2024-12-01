import React from 'react'
import { FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa'
import MainLayout from '../components/MainLayout'

export default function Contact () {
  return (
    <MainLayout>
      <section className='bg-gray-100 py-16'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold text-center text-gray-800 mb-8'>
            İletişime Geçin
          </h2>

          <div className='flex flex-col lg:flex-row gap-12'>
            {/* İletişim Bilgileri */}
            <div className='lg:w-1/2 flex flex-col space-y-6'>
              <h3 className='text-xl font-semibold text-gray-800'>
                İletişim Bilgileri
              </h3>
              <p className='text-gray-600'>
                Bize aşağıdaki iletişim bilgilerinden ulaşabilirsiniz.
              </p>

              <div className='flex items-center space-x-4 text-gray-800'>
                <FaPhoneAlt className='text-blue-500' />
                <span>+90 (534) 793 35 85</span>
              </div>

              <div className='flex items-center space-x-4 text-gray-800'>
                <FaMapMarkerAlt className='text-blue-500' />
                <span>Aşağı Eğlence, Azık Sk. No:4, 06010 Keçiören/Ankara</span>
              </div>
            </div>

            {/* Harita */}
            <div className='lg:w-1/2'>
              <div className='w-full h-64 lg:h-80 rounded-lg overflow-hidden shadow-lg'>
                <iframe
                  title='Google Map'
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d382.18217255126524!2d32.83778302622593!3d39.97588297156519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34c3b960a6243%3A0x2a1aad3a68ca4b8f!2zQcWfYcSfxLEgRcSfbGVuY2UsIEF6xLFrIFNrLiBObzo0LCAwNjAxMCBLZcOnacO2cmVuL0Fua2FyYQ!5e0!3m2!1str!2str!4v1730725396555!5m2!1str!2str'
                  width='100%'
                  height='100%'
                  style={{ border: 0 }}
                  allowFullScreen=''
                  loading='lazy'
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}
