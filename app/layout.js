import { Inter } from 'next/font/google';
import './globals.css';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'NotePad',
  description: 'Experience the joy of creativity with our drawing app. Unleash your imagination with easy-to-use tools, a user-friendly interface, and features that make drawing more fun and accessible than ever.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body className={inter.className}>
        {children}
        <footer>
          <p>&copy; {new Date().getFullYear()} NotePad. All rights reserved.</p>
          <p>Developed and designed by Chinna N J</p>
        </footer>
      </body>
    </html>
  )
}
