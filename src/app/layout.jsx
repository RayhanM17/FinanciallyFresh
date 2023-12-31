import { Prompt, Martel_Sans, Neuton} from 'next/font/google'
import Footer from '@/components/Footer/Footer'

import '@/styles/styles.sass'

const prompt = Prompt({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-prompt'
})

const martelSans = Martel_Sans({ 
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-martel'
})

const neuton = Neuton({ 
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-neuton'
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const RootLayout = ({ children }) => (
  <html lang="en">
    <body className={`${neuton.className} ${neuton.variable} ${martelSans.variable} ${prompt.variable}`}>
      {children}
      <Footer/>
    </body>
  </html>
)

export default RootLayout
