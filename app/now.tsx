import React from "react"
import { Lexend } from 'next/font/google'
import Link from 'next/link'

const lexend = Lexend({ 
  subsets: ['latin'],
  variable: '--font-lexend',
})

export default function NowPage() {
  return (
    <div className={`min-h-screen bg-white text-gray-800 p-8 ${lexend.variable} font-sans`}>
      <main className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">What I'm Doing Now</h1>
        <p className="mb-4">Currently, I'm focused on my role as a developer advocate at Qdrant...</p>
        <p>
          I&apos;m currently working on &quot;Building Agents with LlamaIndex &amp; Qdrant&quot; - it&apos;s an exciting project!
        </p>
        <p>I&apos;ve been focusing on improving my public speaking skills.</p>
        <p>I&apos;ve also been learning more about vector databases and their applications in AI.</p>
        {/* Add more details about your current activities */}
        <Link href="/" className="text-blue-600 hover:underline">Back to Home</Link>
      </main>
    </div>
  )
}