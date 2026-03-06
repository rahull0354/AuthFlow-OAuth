import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { users } from "@/db/schema";
import { hash } from "bcryptjs";
import { eq } from "drizzle-orm";

export async function POST(request: NextRequest) {
  try {
    const { username, email, password } = await request.json();

    // check if user exists
    const existingUser = await db
      .select()
      .from(users)
      .where(eq(users.email, email))
      .limit(1);

    if (existingUser.length > 0) {
      return NextResponse.json(
        { error: "User already exists!" },
        { status: 400 }
      );
    }

    // hashing password
    const hashedPassword = await hash(password, 10);

    // creating the user
    const newUser = await db
      .insert(users)
      .values({
        username,
        email,
        password: hashedPassword,
      })
      .returning();

    return NextResponse.json(
      { user: { id: newUser[0].id, username: newUser[0].username } },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
