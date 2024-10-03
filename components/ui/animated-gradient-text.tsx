export default function AnimatedGradientText({ text }: { text: string }) {
  return (
    <span className='animate-text-gradient inline-flex bg-gradient-to-r from-[#ACACAC] via-[#363636] to-[#ACACAC] bg-[200%_auto] bg-clip-text text-center text-3xl font-medium text-transparent'>
      {text}
    </span>
  )
}
