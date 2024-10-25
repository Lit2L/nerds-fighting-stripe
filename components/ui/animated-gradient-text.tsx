export default function AnimatedGradientText({ text }: { text: string }) {
  return (
    <span className='inline-flex animate-text-gradient bg-gradient-to-r from-emerald-500 via-emerald-900 to-emerald-400 bg-[200%_auto] bg-clip-text text-center font-logo text-3xl font-medium text-transparent'>
      {text}
    </span>
  )
}
