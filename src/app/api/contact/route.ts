import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Create a transporter using environment variables
    // User needs to add these to .env.local
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || "smtp.example.com",
      port: Number(process.env.EMAIL_PORT) || 587,
      secure: process.env.EMAIL_SECURE === "true", // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER || "user@example.com",
        pass: process.env.EMAIL_PASS || "password",
      },
    });

    // This part effectively sends the email
    // For demo purposes, we'll log it if no creds are present
    if (!process.env.EMAIL_HOST) {
      console.log("Mock Email Send:", { name, email, message });
      // return NextResponse.json({ success: true, message: 'Mock sent' })
    } else {
      await transporter.sendMail({
        from:
          process.env.EMAIL_FROM || '"DevGroup Contact" <contact@example.com>',
        to: process.env.EMAIL_TO || "admin@example.com",
        subject: `New Inquiry from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`,
        html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong><br>${message.replace(
          /\n/g,
          "<br>"
        )}</p>`,
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
