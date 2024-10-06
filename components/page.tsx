'use client'

import React from "react"
import { useEffect, useRef } from 'react'
import Link from 'next/link' // Add this import back

declare global {
  interface Window {
    visitedplaces_config: {
      // Define the structure of visitedplaces_config
      textSize: number;
      // Add other properties as needed
    };
    VisitedPlaces: new (element: HTMLElement) => void;
  }
}

const Page: React.FC = () => {
  console.log("PageComponent loaded");
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // VisitedPlaces.com configuration
    window.visitedplaces_config = {
      // ... your existing configuration ...
      textSize: 0.7, // Add this line to make the text smaller
    };

    // Load VisitedPlaces.com scripts
    const loadScript = (src: string) => {
      return new Promise<void>((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = () => resolve();
        script.onerror = () => reject();
        document.body.appendChild(script);
      });
    };

    const initializeMap = async () => {
      try {
        await loadScript('https://www.visitedplaces.com/js/common.js');
        await loadScript('https://www.visitedplaces.com/js/viewer.js');
        if (window.VisitedPlaces && mapRef.current) {
          new window.VisitedPlaces(mapRef.current);
        }
      } catch (error) {
        console.error("Failed to load VisitedPlaces scripts:", error);
      }
    };

    initializeMap();
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-800 p-8">
      <main className="max-w-2xl mx-auto">
        {/* ... your existing sections ... */}

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Where have I been?</h2>
          <div ref={mapRef} className="mt-4" style={{ width: '100%', height: '600px' }}></div>
          <div className="mt-4 text-sm text-gray-600">
            <p>
              Map data from <Link href="https://www.visitedplaces.com" className="text-blue-600 hover:underline">VisitedPlaces.com</Link>
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Page;