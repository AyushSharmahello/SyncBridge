import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/providers/theme-provider'
// import { ClerkProvider } from '@clerk/nextjs'
// import ModalProvider from '@/providers/modal-provider'
// import { Toaster } from '@/components/ui/sonner'
// import { BillingProvider } from '@/providers/billing-provider'

const font = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SyncBridge',
  description: 'Automate Your Work With Fuzzie.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    
  
    
      <html lang="en">
        <body className={font.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            
                {children}
               
          </ThemeProvider>
        </body>
      </html>
  
  )
}
