import './globals.css'
export const metadata = {
  title: 'Patrik Polýnek',
  description: 'My personal portfolio',
  icons: {
    icon: {
      url: "/favicon.png",
      type: "image/png",
    },
  },
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
