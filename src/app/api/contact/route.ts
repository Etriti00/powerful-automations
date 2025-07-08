import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  companyName: z.string().optional(),
  serviceOfInterest: z.string().min(1, "Please select a service"),
  projectDetails: z.string().min(1, "Please provide project details"),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate the request body
    const validatedData = contactSchema.parse(body);
    
    // Create Supabase client with service role key
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );
    
    // Insert the contact into the database
    const { error } = await supabase
      .from("contacts")
      .insert([
        {
          name: validatedData.name,
          email: validatedData.email,
          company_name: validatedData.companyName || null,
          service_of_interest: validatedData.serviceOfInterest,
          project_details: validatedData.projectDetails || null,
        },
      ]);
    
    if (error) {
      console.error("Database error:", error);
      return NextResponse.json(
        { error: "Failed to save contact information" },
        { status: 500 }
      );
    }
    
    return NextResponse.json(
      { message: "Contact information saved successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("API route error:", error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid form data", details: error.errors },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}