import '../styles/globals.css'

import { fontSans, genosFont, headingFont, logoFont } from '@/assets/fonts'
import { SessionProvider } from 'next-auth/react'
import { ThemeProvider } from 'next-themes'

import { cn, constructMetadata } from '@/lib/utils'
import { Toaster } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
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
      <SessionProvider>
        <body
          className={cn(
            'antialiased',
            fontSans.variable,
            headingFont.variable,
            logoFont.variable,
            genosFont.variable
          )}
        >
          <ThemeProvider
            attribute='class'
            defaultTheme='dark'
            disableTransitionOnChange
          >
            <ModalProvider>
              <TooltipProvider>{children}</TooltipProvider>
            </ModalProvider>
            <Analytics />
            <Toaster richColors closeButton />
            <TailwindIndicator />
          </ThemeProvider>
        </body>
      </SessionProvider>
    </html>
  )
}
