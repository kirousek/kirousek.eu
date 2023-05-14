import '../globals.css'
export const metadata = {
  title: 'Patrik Polýnek',
  description: 'All my projects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
