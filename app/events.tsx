import React from "react"
import { Lexend } from 'next/font/google'
import Link from 'next/link'

const lexend = Lexend({ 
  subsets: ['latin'],
  variable: '--font-lexend',
})

export default function EventsPage() {
  return (
    <div className={`min-h-screen bg-white text-gray-800 p-8 ${lexend.variable} font-sans`}>
      <main className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Upcoming Events</h1>
        <ul className="list-disc list-inside mb-4">
          <li>Superbowl on 9/12/2024</li>
          {/* Add more events here */}
        </ul>
        <Link href="/" className="text-blue-600 hover:underline">Back to Home</Link>
      </main>
    </div>
  )
}