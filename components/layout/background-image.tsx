// components/BackgroundSection.jsx
export default function BackgroundSection() {
  return (
    <section
      className='relative h-screen bg-cover bg-fixed bg-center'
      style={{ backgroundImage: "url('/images/background.jpg')" }}
    >
      <div className='flex h-full items-center justify-center bg-black bg-opacity-50'>
        <h1 className='text-4xl font-bold text-white'>Your Content Here</h1>
      </div>
    </section>
  )
}
