import React from "react"
import Image from "next/image"
import { Lexend } from 'next/font/google'
// import PageComponent from "../components/page" // Remove this unused import
// import VisitedPlacesMap from "../components/VisitedPlacesMap" // Remove this unused import
import Link from 'next/link'

// Load Lexend font
const lexend = Lexend({ 
  subsets: ['latin'],
  variable: '--font-lexend',
})

export default function HomePage() {
  // Remove the events sorting and slicing, as we'll hardcode the latest event
  // const eventsToShow = events
  //   .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
  //   .slice(-3); // Show the last 3 events

  return (
    <div className={`min-h-screen bg-white text-gray-800 p-8 ${lexend.variable} font-sans`}>
      <div className="bg-blue-600 text-white py-4 px-8 mb-8 rounded-lg shadow-md">
        <p className="text-center font-bold flex items-center justify-center">
          <span className="mr-2">⚡️</span>
          Webinar: Building Agents with LlamaIndex &amp; Qdrant
          <a href="https://lu.ma/45k4twld" className="ml-2 underline hover:text-blue-200" target="_blank" rel="noopener noreferrer">
            Register now!
          </a>
          <span className="ml-2">⚡️</span>
        </p>
      </div>
      
      <main className="max-w-2xl mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2">Thierry Damiba</h1>
          <p className="text-xl text-gray-600">Developer Advocate at Qdrant</p>
          <div className="w-32 h-1 bg-gray-300 mx-auto mt-4"></div>
        </header>

        <section className="mb-8 bg-blue-50 p-6 rounded-lg shadow-md border-l-4 border-blue-500">
          <h2 className="text-2xl font-bold mb-4 text-blue-700 underline">Me in 10 seconds</h2>
          <p>I build communities for companies in the AI space.</p>
          <p>I&apos;ve been a stand up comedian, data scientist, teacher, and entrepreneur.</p>
          <p>Explorer at heart, fascinated by new perspectives.</p>
          <p>Always eager to embrace the unfamiliar.</p>
          <p>Raised in Baltimore, I now live in San Francisco.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2 underline">Me in 10 minutes?</h2>
          <p>See my <Link href="/about" className="text-blue-600 hover:underline">&quot;about&quot; page</Link>.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2 underline">What am I doing now?</h2>
          <p>I&apos;m a developer advocate at Qdrant. See my <Link href="/now" className="text-blue-600 hover:underline">&quot;now&quot; page</Link> for more info.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2 underline">What did I do before?</h2>
          <p>Data Scientist for the Department of Homeland Security <Link href="/other-things" className="text-blue-600 hover:underline">among other things</Link>.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2 underline">Contact me</h2>
          <p>
            <a href="https://twitter.com/your_twitter_handle" className="text-blue-600 hover:underline">Twitter</a> is where I am most responsive. You can also reach me via:
          </p>
          <ul className="list-disc list-inside mt-2">
            <li>
              <a href="mailto:thierry.damiba@qdrant.com" className="text-blue-600 hover:underline">
                Email
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/thierrydamiba" className="text-blue-600 hover:underline">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/thierrydamiba/" className="text-blue-600 hover:underline">
                Instagram
              </a>
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2 underline">What was your last event?</h2>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mt-4">
            <div className="md:w-2/5">
              <div className="relative w-full pt-[75%]">
                <Image 
                  src="/images/lam.avif" 
                  alt="LlamaIndex Webinar"
                  layout="fill"
                  objectFit="contain"
                  className="rounded-lg"
                />
              </div>
            </div>
            <div className="md:w-3/5">
              <h3 className="text-lg font-medium mb-2">Webinar: Building Agents with LlamaIndex & Qdrant</h3>
              <p className="text-gray-600 mb-2">September 26, 2024</p>
              <p className="mb-2">Join us for an exciting webinar where we'll explore how to build powerful AI agents using LlamaIndex and Qdrant. Learn about the latest techniques in vector search and large language models.</p>
              <a href="https://lu.ma/45k4twld" className="text-blue-600 hover:underline mr-4" target="_blank" rel="noopener noreferrer">Register now</a>
              <Link href="/events" className="text-blue-600 hover:underline">See all my events</Link>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2 underline">What do I do in my free time?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
            <a href="https://www.youtube.com/watch?v=BqnG_Ei35JE" className="flex flex-col items-center text-center group w-full max-w-sm mx-auto" target="_blank" rel="noopener noreferrer">
              <div className="w-full aspect-square relative mb-4 overflow-hidden rounded-lg flex items-center justify-center">
                <Image 
                  src="/images/c.jpeg" 
                  alt="Crumb - Locket"
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-105 transition-transform duration-200"
                />
              </div>
              <div>
                <strong>Listening to:</strong> Crumb - Locket
              </div>
            </a>
            <a href="https://www.amazon.com/Quantum-Magician-Derek-K%C3%BCnsken/dp/1781085706" className="flex flex-col items-center text-center group w-full max-w-sm mx-auto" target="_blank" rel="noopener noreferrer">
              <div className="w-full aspect-square relative mb-4 overflow-hidden rounded-lg flex items-center justify-center">
                <Image 
                  src="/images/q.jpg" 
                  alt="The Quantum Magician book cover"
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-105 transition-transform duration-200"
                />
              </div>
              <div>
                <strong>Reading:</strong> The Quantum Magician
              </div>
            </a>
            <a href="https://www.fxnetworks.com/shows/the-bear" className="flex flex-col items-center text-center group w-full max-w-sm mx-auto" target="_blank" rel="noopener noreferrer">
              <div className="w-full aspect-square relative mb-4 overflow-hidden rounded-lg flex items-center justify-center">
                <Image 
                  src="/images/b.png" 
                  alt="The Bear TV show poster"
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-105 transition-transform duration-200"
                />
              </div>
              <div>
                <strong>Watching:</strong> The Bear
              </div>
            </a>
            <a href="https://www.piccinorestaurant.com/" className="flex flex-col items-center text-center group w-full max-w-sm mx-auto" target="_blank" rel="noopener noreferrer">
              <div className="w-full aspect-square relative mb-4 overflow-hidden rounded-lg flex items-center justify-center">
                <Image 
                  src="/images/p.jpeg" 
                  alt="Piccinos restaurant"
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-105 transition-transform duration-200"
                />
              </div>
              <div>
                <strong>Eating at:</strong> Piccinos in SF
              </div>
            </a>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2 underline">Where have I been lately?</h2>
          <div className="mt-4">
            <h3 className="text-lg font-medium mb-2">Big Sur - Check out this video from my trip!</h3>
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src="https://youtube.com/embed/J-lDzfWkY84?feature=share"
                title="Big Sur Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              ></iframe>
            </div>
          </div>
        </section>

        {/* Remove the "Where in the world have I been?" section */}
        {/* <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2 underline">Where in the world have I been?</h2>
          <VisitedPlacesMap />
        </section> */}

        {/* Remove the Events section at the bottom */}
        {/* <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2 underline">Events</h2>
          {eventsToShow.map((event, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center md:items-start gap-6 mt-4">
              <div className="md:w-2/5">
                <div className="relative w-full pt-[75%]">
                  <Image 
                    src={`/images/${event.image}`} 
                    alt={event.name}
                    layout="fill"
                    objectFit="contain"
                    className="rounded-lg"
                  />
                </div>
              </div>
              <div className="md:w-3/5">
                <h3 className="text-lg font-medium mb-2">{event.name}</h3>
                <p className="text-gray-600 mb-2">{event.date}</p>
                <p className="mb-2">{event.description}</p>
                <Link href={`/events/${event.id}`} className="text-blue-600 hover:underline">See more</Link>
              </div>
            </div>
          ))}
        </section> */}
      </main>
    </div>
  )
}