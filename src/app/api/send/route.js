import { NextResponse } from "next/server";
import { Resend } from "resend";
import { Resend_API_Key } from './APIKey.js';

// Resend API Key in enclosed in quotes
const resend = new Resend(Resend_API_Key);
const fromEmail = 'Contact@Devomb.xyz';

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: [fromEmail, email],
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting us!</p>
          <p>New message submitted:</p>
          <p>{message}</p>
        </>
      ),
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
