import Image from 'next/image'

function Logo() {
  return (
    <Image
      src='/Group10.png'
      alt='Nerds Kickboxing Club'
      width={300}
      height={200}
      priority
      className='rounded-full'
    />
  )
}

export default Logo
