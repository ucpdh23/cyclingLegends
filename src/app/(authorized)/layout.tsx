import type { Metadata } from 'next'
import Link from 'next/link';

export default function AuthorizedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
       <header className="bg-darkblue text-white p-4">
        {/* Add header content here */}
        <h1 className="text-2xl font-bold">Cycling Race Game</h1>
        <Link href="/login" className="text-lg">logout
        </Link>
      </header>
       {children}
    </div>
  )
}
