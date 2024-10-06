import React from "react"
import { Lexend } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'

const lexend = Lexend({ 
  subsets: ['latin'],
  variable: '--font-lexend',
})

export default function AboutPage() {
  return (
    <div className={`min-h-screen bg-white text-gray-800 p-8 ${lexend.variable} font-sans`}>
      <main className="max-w-2xl mx-auto relative">
        <h1 className="text-3xl font-bold mb-6">About Me</h1>

        <div className="md:flex md:gap-8">
          <div className="md:w-2/3 pr-0 md:pr-8">
            {/* Image for mobile, hidden on md and larger screens */}
            <div className="mb-8 md:hidden">
              <div className="w-48 h-64 overflow-hidden rounded-lg mx-auto">
                <Image 
                  src="/images/m.jpg" 
                  alt="Thierry Damiba"
                  width={192}
                  height={256}
                  className="object-cover"
                />
              </div>
            </div>

            <div className="mb-8">
              <p className="mb-4">
                I&apos;m Thierry Damiba, born in West Africa and raised in Baltimore, Maryland. My journey has shaped my perspective and fueled my passion for data science and artificial intelligence.
              </p>
            </div>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Personal Interests</h2>
              <p className="mb-4">
                As a sports fan, I thrive on the excitement of competition and teamwork. I also have a deep appreciation for great food—especially ribeye steaks—and I love spending time at the beach, soaking up the sun and enjoying the beauty of nature.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Professional Focus</h2>
              <p className="mb-4">
                In my professional life, I focus on using data science to drive advancements in AI. I believe that data is the backbone of intelligent systems, enabling us to extract insights and make informed decisions. My work involves leveraging vector databases to enhance AI applications, making them more efficient and effective.
              </p>
              <p className="mb-4">
                By combining my technical expertise with a community-driven approach, I strive to foster innovation and collaboration in the field of AI.
              </p>
            </section>

            <Link href="/" className="text-blue-600 hover:underline">Back to Home</Link>
          </div>

          {/* Image for md and larger screens, hidden on mobile */}
          <div className="hidden md:block md:w-1/3 mt-8 md:mt-0">
            <div className="sticky top-8 w-64 h-80 overflow-hidden rounded-lg mx-auto md:mx-0">
              <Image 
                src="/images/m.jpg" 
                alt="Thierry Damiba"
                width={256}
                height={320}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}