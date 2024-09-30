import {
  Black_Ops_One,
  Inter as FontSans,
  Genos as GenosFont,
  Krona_One,
  Urbanist
} from 'next/font/google'
import localFont from 'next/font/local'

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

export const fontUrban = Urbanist({
  subsets: ['latin'],
  variable: '--font-urban'
})

export const fontCalSans = localFont({
  src: './CalSans-SemiBold.woff2',
  variable: '--font-cal-sans'
})

export const headingFont = Black_Ops_One({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-heading'
})

export const logoFont = localFont({
  src: './Northstar3D-4D3x.otf',
  variable: '--font-logo'
})

export const kronaOne = Krona_One({
  subsets: ['latin'],
  variable: '--font-krona-one',
  weight: '400'
})

export const genosFont = GenosFont({
  subsets: ['latin'],
  variable: '--font-genos'
})
