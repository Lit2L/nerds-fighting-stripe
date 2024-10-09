'use client'

import { useEffect, useState } from 'react'
import { Check, Copy } from 'lucide-react'

import Logo from './Logo'

export function Terminal() {
  const [terminalStep, setTerminalStep] = useState(0)
  const [copied, setCopied] = useState(false)
  const terminalSteps = [
    'Game Start...',
    'Debug your Limits',
    'Upgrade Your Body',
    'Hacking Mindset',
    'Optimize Confidence'
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      setTerminalStep((prev) =>
        prev < terminalSteps.length - 1 ? prev + 1 : prev
      )
    }, 2000)

    return () => clearTimeout(timer)
  }, [terminalStep])

  const copyToClipboard = () => {
    navigator.clipboard.writeText(terminalSteps.join('\n'))
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className='relative mx-auto w-full max-w-lg rounded-lg text-sm text-white'>
      <div className='mx-auto w-full rounded-lg bg-neutral-900/50 shadow-xl dark:bg-neutral-900/10'>
        {/* <div className='flex items-center justify-between bg-neutral-800/10 p-1'> */}
        {/* <div className='flex space-x-1'>
            <div className='size-2 rounded-full bg-red-500'></div>
            <div className='size-2 rounded-full bg-yellow-500'></div>
            <div className='size-2 rounded-full bg-green-500'></div>
          </div> */}
        {/* <button
            onClick={copyToClipboard}
            className='text-gray-400 transition-colors hover:text-white'
            aria-label='Copy to clipboard'
          >
            {copied ? (
              <Check className='h-5 w-5' />
            ) : (
              <Copy className='h-5 w-5' />
            )}
          </button> */}
        {/* </div> */}
        <div className='relative mx-auto w-full space-y-1 p-3 font-heading tracking-wide'>
          {terminalSteps.map((step, index) => (
            <div
              key={index}
              className={`${
                index > terminalStep ? 'opacity-0' : 'opacity-100'
              } w-full text-left transition-opacity duration-300`}
            >
              <span className='text-md font-black text-green-400'>{`->`}</span>{' '}
              {step}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
