import { NextResponse } from 'next/server';

const properties = [
  {
    id: "1",
    title: "Luxury Villa in DHA",
    price: 25000000,
    city: "Lahore",
    address: "DHA Phase 5, Lahore",
    bedrooms: 5,
    bathrooms: 6,
    size: "1 Kanal",
    purpose: "SALE",
    status: "ACTIVE",
    description: "Beautiful luxury villa with modern amenities",
    features: ["Swimming Pool", "Garage", "Garden", "Security"],
    images: ["/next.svg"],
    categoryId: "1",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: "2",
    title: "Modern Apartment",
    price: 45000,
    city: "Karachi",
    address: "Clifton Block 2",
    bedrooms: 3,
    bathrooms: 3,
    size: "1200 sq ft",
    purpose: "RENT",
    status: "ACTIVE",
    description: "Modern apartment in prime location",
    features: ["Parking", "Security", "Gym"],
    images: ["/vercel.svg"],
    categoryId: "2",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
];

export async function GET() {
  return NextResponse.json(properties);
}

export async function POST(request: Request) {
  const body = await request.json();
  
  const newProperty = {
    id: (properties.length + 1).toString(),
    ...body,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  
  properties.push(newProperty);
  return NextResponse.json(newProperty, { status: 201 });
}