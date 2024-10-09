'use client'

import { ReactNode, useEffect, useState } from 'react'
import { fontSans, genosFont, headingFont, logoFont } from '@/assets/fonts'
import { SessionProvider } from 'next-auth/react'

import { cn } from '@/lib/utils'

export default function Hydrate({ children }: { children: ReactNode }) {
  const [isHydrated, setIsHydrated] = useState(false)
  // const themeStore = useThemeStore()

  // Waits til Nextjs rehydration completes
  useEffect(() => {
    setIsHydrated(true)
  }, [])

  return (
    <SessionProvider>
      {isHydrated ? (
        <body
          className={cn(
            'min-h-screen bg-background antialiased',
            fontSans.variable,
            headingFont.variable,
            logoFont.variable,
            genosFont.className
          )}
        >
          {children}
        </body>
      ) : (
        <body></body>
      )}
    </SessionProvider>
  )
}
