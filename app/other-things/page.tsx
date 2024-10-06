import React from "react"
import { Lexend } from 'next/font/google'
import Link from 'next/link'

const lexend = Lexend({ 
  subsets: ['latin'],
  variable: '--font-lexend',
})

export default function OtherThingsPage() {
  return (
    <div className={`min-h-screen bg-white text-gray-800 p-8 ${lexend.variable} font-sans`}>
      <main className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Thierry Damiba</h1>
        
        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-6 border-b-2 pb-2">About Me</h2>
          <p className="mb-4">
            I'm Thierry Damiba, born in West Africa and raised in Baltimore, Maryland.
          </p>
          
          <h3 className="text-2xl font-semibold mb-2">Personal Interests</h3>
          <p className="mb-4">
            I love eating and I love media. My favorite genre is sci-fi but I also will watch a good Rom Com. I'm a big fan of Baltimore sports teams. I also have a deep appreciation for great food—especially ribeye steaks—and I love spending time at the beach, soaking up the sun and enjoying the beauty of nature.
          </p>
          
          <h3 className="text-2xl font-semibold mb-2">Professional Focus</h3>
          <p className="mb-4">
            In my professional life, I focus on using data science to build communities in AI. I believe that a data-driven framework is the best way to make informed decisions. My work involves leveraging vector databases to enhance AI applications, making them more efficient and effective.
          </p>
          <p className="mb-4">
            By combining my technical expertise with a community-driven approach, I make our users happy!
          </p>
        </section>

        <section className="mb-8 text-center">
          <h2 className="text-2xl font-semibold mb-2">Developer Advocate</h2>
          <p className="mb-4">+443-839-5151 | San Francisco, CA | ptdamiba@email.com</p>
          
          <p className="mb-6 text-left">
            With a background in data science, I bring a data-driven approach to developer relations, ensuring that engagement and strategy is backed by actionable insights. I identify patterns in developer behavior, optimize community engagement, and measure the impact of developer advocacy efforts, ultimately driving meaningful results for both developers and the business. My technical expertise allows me to create tailored, data-informed content and solutions that resonate deeply with developers and improve their overall experience.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-6 border-b-2 pb-2">Work History</h2>
          
          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-2">Developer Advocate, Qdrant (2024 - Present)</h3>
            <p className="mb-4">As a Developer Advocate, I focus on helping developers and companies harness the power of Qdrant's vector search technology. I host events, build demos, and create content designed to drive awareness and adoption of the product, while also developing relationships with our current and potential customers.</p>
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li>Implemented a data driven approach to developer relations with UTMs and metric tracking leading to 25% growth in signups and cluster creation.</li>
              <li>Hosted and presented at the AWS Loft in San Francisco and drew 125 attendees.</li>
              <li>Hosted a webinar with a Founding Engineer at LlamaIndex that had 228 viewers.</li>
              <li>Integrated Qdrant with frameworks like Langchain, LlamaIndex, Relari, Replicate, and Anthropic making it easy to use for various AI-driven projects.</li>
              <li>Created video, text, and social media content around Gen AI applications.</li>
              <li>Engaged with top-tier clients in the travel industry, helping them transition to vector databases and understand chunking models.</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-2">Data Scientist Associate Principal, SAIC, DHS, USCIS (2000 - 2023)</h3>
            <p className="mb-4">At SAIC, I drove multiple data initiatives that optimized workflows and provided valuable insights for leadership at the DHS and USCIS. From building machine learning models to developing actionable dashboards, my work focused on making data-driven decisions accessible.</p>
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li>Developed and deployed 5 classification models in Databricks using sklearn, regex, and n-grams, saving adjudicators over 8 hours a week.</li>
              <li>Designed and implemented 5 Tableau dashboards, streamlining operations and encouraging data-centric decision-making.</li>
              <li>Conducted business value analysis for a critical company tool, demonstrating its impact and aligning technical results with business goals.</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-6 border-b-2 pb-2">Education</h2>
          <p className="text-xl mb-2">University of Maryland (2104 - 2017)</p>
          <p>Majored in Sociology</p>
        </section>

        <Link href="/" className="text-blue-600 hover:underline">Back to Home</Link>
      </main>
    </div>
  )
}