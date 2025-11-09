
import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/libs/db";
import { Client, IClient } from "@/models/Clients";

// POST handler
export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const data: Omit<IClient, "_id" | "createdAt" | "updatedAt"> = await req.json();
    const { fullName, email, mobile, country } = data;

    if (!fullName || !email || !mobile || !country) {
      return NextResponse.json(
        { success: false, error: "All fields are required" },
        { status: 400 }
      );
    }

    const newClient = await Client.create({ fullName, email, mobile, country });

    return NextResponse.json({ success: true, client: newClient });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: "Something went wrong" },
      { status: 500 }
    );
  }
}

// GET handler
export async function GET() {
  try {
    await connectDB();
    const clients = await Client.find().sort({ createdAt: -1 }); // latest first
    return NextResponse.json({ success: true, clients });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch clients" },
      { status: 500 }
    );
  }
}
