const NotFoundPage = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center'>
      <h1 className='text-6xl font-bold text-red-500 mb-4'>404</h1>
      <p className='text-xl text-gray-700 mb-6'>
        Oops! Aradığınız sayfa bulunamadı.
      </p>
      <button
        onClick={() => (window.location.href = '/')}
        className='px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-300'
      >
        Anasayfaya Dön
      </button>
    </div>
  )
}

export default NotFoundPage
