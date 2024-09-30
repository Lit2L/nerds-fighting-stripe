import '@/styles/globals.css'

import {
  fontCalSans,
  fontSans,
  genosFont,
  headingFont,
  kronaOne,
  logoFont
} from '@/assets/fonts'
import { SessionProvider } from 'next-auth/react'
import { ThemeProvider } from 'next-themes'

import { cn, constructMetadata } from '@/lib/utils'
import { Toaster } from '@/components/ui/sonner'
import { Analytics } from '@/components/analytics'
import ModalProvider from '@/components/modals/providers'
import { TailwindIndicator } from '@/components/tailwind-indicator'

interface RootLayoutProps {
  children: React.ReactNode
}

export const metadata = constructMetadata()

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head />
      <body
        className={cn(
          'min-h-screen bg-background antialiased',
          fontSans.variable,
          kronaOne.variable,
          fontCalSans.variable,
          headingFont.variable,
          logoFont.className,
          genosFont.variable
        )}
      >
        <SessionProvider>
          <ThemeProvider
            attribute='class'
            defaultTheme='dark'
            enableSystem
            disableTransitionOnChange
          >
            <ModalProvider>{children}</ModalProvider>
            <Analytics />
            <Toaster richColors closeButton />
            <TailwindIndicator />
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  )
}
