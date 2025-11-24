import Image from "next/image";
import { MapPin, Bed, Bath, Square, Phone, Mail, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function PropertyDetail({ params }: { params: { id: string } }) {
  const property = {
    id: params.id,
    title: "Luxury Villa in DHA Phase 5",
    price: 25000000,
    city: "Lahore",
    address: "DHA Phase 5, Block L, Lahore",
    bedrooms: 5,
    bathrooms: 6,
    size: "1 Kanal",
    purpose: "SALE",
    status: "ACTIVE",
    description: "Beautiful luxury villa with modern amenities, spacious rooms, and prime location in DHA Phase 5. Perfect for families looking for comfort and style.",
    features: ["Swimming Pool", "Garage", "Garden", "Security", "Gym", "Servant Quarter"],
    images: ["/next.svg", "/vercel.svg", "/globe.svg"]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
              <ArrowLeft size={20} />
              <span className="text-2xl font-bold">Rajput Real Estate</span>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
              <div className="relative h-96">
                <Image
                  src={property.images[0]}
                  alt={property.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    property.purpose === 'SALE' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                  }`}>
                    For {property.purpose === 'SALE' ? 'Sale' : 'Rent'}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{property.title}</h1>
              
              <div className="flex items-center text-gray-600 mb-6">
                <MapPin size={20} className="mr-2" />
                <span>{property.address}</span>
              </div>

              <div className="flex items-center gap-6 mb-6 text-gray-600">
                <div className="flex items-center">
                  <Bed size={20} className="mr-2" />
                  <span>{property.bedrooms} Bedrooms</span>
                </div>
                <div className="flex items-center">
                  <Bath size={20} className="mr-2" />
                  <span>{property.bathrooms} Bathrooms</span>
                </div>
                <div className="flex items-center">
                  <Square size={20} className="mr-2" />
                  <span>{property.size}</span>
                </div>
              </div>

              <div className="text-4xl font-bold text-blue-600 mb-6">
                PKR {property.price.toLocaleString()}
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">Description</h3>
                <p className="text-gray-700">{property.description}</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Features</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {property.features.map((feature, index) => (
                    <div key={index} className="bg-gray-100 px-3 py-2 rounded-lg text-sm">
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
                >
                  Send Inquiry
                </button>
              </form>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Agent Contact</h3>
              <div className="space-y-3">
                <a
                  href="tel:+923001234567"
                  className="flex items-center justify-center gap-2 w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700"
                >
                  <Phone size={20} />
                  Call Now
                </a>
                <a
                  href="mailto:info@rajputrealestate.com"
                  className="flex items-center justify-center gap-2 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
                >
                  <Mail size={20} />
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}