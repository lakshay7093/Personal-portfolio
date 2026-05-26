import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    // Send emails via nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email to portfolio owner
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    // Confirmation email to sender
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: `Thank you for contacting me - ${name}`,
      html: `
        <h2>Thank You for Reaching Out!</h2>
        <p>Hi ${name},</p>
        <p>Thank you for contacting me through my portfolio. I have received your message and will get back to you as soon as possible.</p>
        <br>
        <p><strong>Your Message:</strong></p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p>${message}</p>
        <br>
        <p>Best regards,</p>
        <p><strong>Lakshay Saini</strong></p>
        <p>Full Stack Developer</p>
        <p>Email: lakshaysaini181@gmail.com</p>
        <p>WhatsApp: +91 88375 78244</p>
      `,
    });

    return NextResponse.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Contact route error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send email" },
      { status: 500 }
    );
  }
}
