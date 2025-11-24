import { NextResponse } from 'next/server';

const inquiries: any[] = [];

export async function POST(request: Request) {
  const body = await request.json();
  
  const newInquiry = {
    id: (inquiries.length + 1).toString(),
    ...body,
    status: "NEW",
    createdAt: new Date().toISOString()
  };
  
  inquiries.push(newInquiry);
  return NextResponse.json({ message: "Inquiry sent successfully" }, { status: 201 });
}

export async function GET() {
  return NextResponse.json(inquiries);
}