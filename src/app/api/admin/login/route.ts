import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { id, password } = await req.json();
    
    const validId = process.env.ADMIN_ID;
    const validPassword = process.env.ADMIN_PASSWORD;

    if (id === validId && password === validPassword) {
      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
