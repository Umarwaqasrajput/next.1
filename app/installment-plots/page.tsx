'use client';

import { useState } from 'react';
import Image from 'next/image';

const installmentPlots = [
  {
    id: 1,
    image: "/1.jpg"
  },
  {
    id: 2,
    image: "/2.jpg"
  },
  {
    id: 3,
    image: "/3.jpg"
  },
  {
    id: 4,
    image: "/22.jpg"
  },
  {
    id: 5,
    image: "/5.jpg"
  },
  {
    id: 6,
    image: "/6.jpg"
  },
  {
    id: 7,
    image: "/7.jpg"
  }
];

export default function InstallmentPlotsPage() {
  const [selectedPlot, setSelectedPlot] = useState<number | null>(null);

  const handleImageClick = (id: number) => {
    setSelectedPlot(selectedPlot === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-black">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Installment Plots Gallery</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {installmentPlots.map((plot) => (
              <div 
                key={plot.id}
                className={`relative cursor-pointer transition-all duration-500 transform hover:scale-105 ${
                  selectedPlot === plot.id 
                    ? 'animate-pulse shadow-2xl shadow-red-500/50 border-4 border-transparent bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-purple-500 p-1 rounded-xl' 
                    : ''
                }`}
                onClick={() => handleImageClick(plot.id)}
              >
                <div className={`relative h-96 w-full bg-gray-800 rounded-xl overflow-hidden ${
                  selectedPlot === plot.id 
                    ? 'shadow-2xl shadow-cyan-500/50 animate-bounce' 
                    : ''
                }`}>
                  {plot.image ? (
                    <Image
                      src={plot.image}
                      alt={`Plot ${plot.id}`}
                      fill
                      className="object-cover transition-all duration-500 hover:scale-110"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-white text-xl">
                      Click to Add Image {plot.id}
                    </div>
                  )}
                  
                  {selectedPlot === plot.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500/30 via-yellow-500/30 via-green-500/30 via-blue-500/30 via-indigo-500/30 to-purple-500/30 animate-pulse"></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}