import React from "react"
import { Lexend } from 'next/font/google'
import Link from 'next/link'

const lexend = Lexend({ 
  subsets: ['latin'],
  variable: '--font-lexend',
})

export default function AboutPage() {
  return (
    <div className={`min-h-screen bg-white text-gray-800 p-8 ${lexend.variable} font-sans`}>
      <main className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">About Me</h1>
        <p className="mb-4">Here's a more detailed look at who I am and what I do...</p>
        {/* Add more content about yourself here */}
        <p>My &quot;mission&quot; is to bridge the gap between technology and developers.</p>
        <p>I&apos;ve always believed in the power of &quot;community&quot; and collaboration.</p>
        <Link href="/" className="text-blue-600 hover:underline">Back to Home</Link>
      </main>
    </div>
  )
}