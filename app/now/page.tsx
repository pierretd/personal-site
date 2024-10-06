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
        <h1 className="text-3xl font-bold mb-6">What I'm Doing Now</h1>
        
        <section className="mb-8">
          <p className="mb-4">As a Data Scientist and Developer Advocate at Qdrant, I'm passionate about fostering productive, engaging, and diverse communities. My focus is on delivering world-class experiences to both internal and external stakeholders in the rapidly evolving field of vector databases and AI technologies.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Events and Outreach</h2>
          <p className="mb-4">I'm actively involved in organizing and hosting events for the Qdrant community. For instance, I'm excited to host our first Spacewalk event in San Francisco on July 23rd, 2024, in partnership with Amazon Web Services (AWS). These events bring together AI enthusiasts and professionals to discuss vector search and related technologies.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Content Creation</h2>
          <p className="mb-4">I contribute regularly to Qdrant's blog, co-authoring articles on vector databases and AI applications. Our latest piece, published on September 16, 2024, explores "Data-Driven RAG Evaluation: Testing Qdrant Apps with Relari AI", diving into methods for evaluating Retrieval-Augmented Generation (RAG) systems using Qdrant and Relari.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Community Building</h2>
          <p className="mb-4">My goal is to "build the most vibrant AI community in the world, make dope content, and host unforgettable events". I'm constantly working on fostering engagement within the Qdrant ecosystem and the broader AI community.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Technical Expertise</h2>
          <p className="mb-4">As a Data Scientist, I leverage my deep understanding of vector databases, machine learning, and AI applications to explain complex technical concepts. I demonstrate how Qdrant can be used in various AI and data science scenarios, bridging the gap between technical capabilities and practical applications.</p>
        </section>

        <Link href="/" className="text-blue-600 hover:underline">Back to Home</Link>
      </main>
    </div>
  )
}