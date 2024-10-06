import React from "react"
import { Lexend } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'

const lexend = Lexend({ 
  subsets: ['latin'],
  variable: '--font-lexend',
})

export const metadata: Metadata = {
  title: 'Events | Your Site Name',
  description: 'Check out our upcoming and past events',
  openGraph: {
    images: [
      {
        url: '/images/m.jpg', // Update this path to where your m.jpg is located
        width: 1200,
        height: 630,
        alt: 'Events page image',
      },
    ],
  },
}

const events = [
  {
    title: "A Data Driven Approach to Productionizing RAG Systems",
    date: new Date(Date.now() - 86400000).toISOString().split('T')[0], // Yesterday
    url: "https://lu.ma/u5sgzulm",
    description: "Learn how to use a data-driven approach to deploy your RAG Application with the best results, featuring Yi Zhang from Relari.ai.",
    imagePath: "/images/d.avif"
  },
  {
    title: "Spicy CMO Podcast: Headspace, ClickUp, Krispy Krunchy Foods & Cantaloupe",
    date: new Date(Date.now() - 2 * 86400000).toISOString().split('T')[0], // 2 days ago
    url: "https://lu.ma/marketingonmars001",
    description: "Join us for a live podcast recording featuring a panel of $100M+ CMOs, with hot sauce shots for added spice!",
    imagePath: "/images/s.avif"
  },
  {
    title: "Build an Ai Scheduler: Smart Meetings with Zoom, LlamaIndex & Qdrant @ AWS",
    date: new Date(Date.now() - 3 * 86400000).toISOString().split('T')[0], // 3 days ago
    url: "https://lu.ma/csll5v5j",
    description: "Learn how to build a state-of-the-art RAG application during this one-day event at the AWS AI Engineering Loft.",
    imagePath: "/images/l.avif"
  },
  {
    title: "Beyond the Tutorial: Building Agents with LlamaIndex & Qdrant",
    date: new Date(Date.now() - 4 * 86400000).toISOString().split('T')[0], // 4 days ago
    url: "https://lu.ma/45k4twld",
    description: "Join us for an exclusive webinar on how to harness the power of LlamaIndex and Qdrant to create next-generation intelligent systems.",
    imagePath: "/images/b.avif"
  },
  {
    title: "Multi-Agent System Solutions - CAMEL-AI Hackathon",
    date: new Date(Date.now() - 5 * 86400000).toISOString().split('T')[0], // 5 days ago
    url: "https://lu.ma/rs5990ma",
    description: "Our hackathon invites you to leverage CAMEL-AI's framework to design, implement, and demonstrate multi-agent systems that tackle real-world challenges.",
    imagePath: "/images/a.avif"
  },
  {
    title: "AI Engineer World's Fair Closer: AI Sizzle and Waves @ GitHub HQ",
    date: new Date(Date.now() - 6 * 86400000).toISOString().split('T')[0], // 6 days ago
    url: "https://lu.ma/k5mbvxxp?tk=Hnm5mv",
    description: "Wrap up the Fair with an AI summer Friday. Enjoy refreshing treats and ride the waves of fresh takes from fellow developers and innovators.",
    imagePath: "/images/g.avif"
  }
];

export default function EventsPage() {
  const upcomingEvents = events.filter(event => 
    new Date(event.date) > new Date()
  );

  const pastEvents = events.filter(event => 
    new Date(event.date) <= new Date()
  );

  // Sort past events by date in descending order
  pastEvents.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className={`min-h-screen bg-white text-gray-800 p-8 ${lexend.variable} font-sans`}>
      <main className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Events</h1>
        
        {upcomingEvents.length > 0 && (
          <>
            <h2 className="text-2xl font-semibold mb-4">Upcoming Events</h2>
            <ul className="space-y-12 mb-12">
              {upcomingEvents.map((event, index) => (
                <li key={index} className="border-b pb-8 last:border-b-0">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                      <div className="relative w-full h-48 md:h-full">
                        <Image 
                          src={event.imagePath}
                          alt={event.title}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-lg"
                        />
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <h2 className="text-xl font-semibold mb-2">
                        <a href={event.url} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                          {event.title}
                        </a>
                      </h2>
                      <p className="text-gray-600 mb-2">{new Date(event.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                      <p className="mb-2">{event.description}</p>
                      <a href={event.url} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                        Learn more and register
                      </a>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </>
        )}

        {pastEvents.length > 0 && (
          <>
            <h2 className="text-2xl font-semibold mb-4">Past Events</h2>
            <ul className="space-y-12">
              {pastEvents.map((event, index) => (
                <li key={index} className="border-b pb-8 last:border-b-0">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                      <div className="relative w-full h-48 md:h-full">
                        <Image 
                          src={event.imagePath}
                          alt={event.title}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-lg"
                        />
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <h2 className="text-xl font-semibold mb-2">
                        <a href={event.url} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                          {event.title}
                        </a>
                      </h2>
                      <p className="text-gray-600 mb-2">{new Date(event.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                      <p className="mb-2">{event.description}</p>
                      <a href={event.url} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                        Learn more
                      </a>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </>
        )}

        <div className="mt-8">
          <Link href="/" className="text-blue-600 hover:underline">Back to Home</Link>
        </div>
      </main>
    </div>
  )
}