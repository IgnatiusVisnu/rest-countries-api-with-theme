import { Nunito_Sans } from 'next/font/google'
import './globals.css'
import Provider from './providers'
import Navbar from '@/components/Navbar'



const nunito_sans = Nunito_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={nunito_sans.className}>
        <Provider>
          <Navbar/>
          {children}
        </Provider>
        </body>
    </html>
  )
}
