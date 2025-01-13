// src/app/api/groups/route.js
import { groupLinks } from "@/libs/groups";
import { NextResponse } from "next/server";

export async function GET(req) {
  // Get query parameters
  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get("page")) || 1; // Default to page 1
  const limit = parseInt(searchParams.get("limit")) || 10; // Default to 10 items per page

  // Calculate start and end indices for slicing the array
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  // Slice the array to return only the requested items
  const paginatedData = groupLinks.slice(startIndex, endIndex);

  // Determine if there are more items to load
  const hasMore = endIndex < groupLinks.length;

  return NextResponse.json({
    data: paginatedData,
    page,
    limit,
    hasMore,
  });
}
