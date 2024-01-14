
import { Gabarito } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import FAQ from '@/components/FAQ'

const gabarito = Gabarito({ subsets: ['latin'] })

export const metadata = {
  title: '',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${gabarito.className} bg-color-dark`} suppressHydrationWarning={true}>
        <Navbar />
        {children}</body>
        <FAQ />
    </html>
  )
}
