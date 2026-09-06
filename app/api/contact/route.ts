import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    const smtpUser = process.env.SMTP_USER ?? process.env.EMAIL_USER;
    const smtpPass = (process.env.SMTP_PASS ?? process.env.EMAIL_PASS)?.replace(/\s/g, "");
    const contactEmail = process.env.CONTACT_EMAIL ?? smtpUser;

    if (!smtpUser || !smtpPass || !contactEmail) {
      console.error("Contact email configuration is missing SMTP_USER/SMTP_PASS/CONTACT_EMAIL.");
      return NextResponse.json(
        { success: false, message: "Email service is not configured" },
        { status: 503 },
      );
    }

    const safeName = escapeHtml(String(name));
    const safeEmail = escapeHtml(String(email));
    const safeSubject = escapeHtml(String(subject));
    const safeMessage = escapeHtml(String(message)).replaceAll("\n", "<br />");

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST ?? "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    // Email to portfolio owner
    await transporter.sendMail({
      from: smtpUser,
      to: contactEmail,
      replyTo: email,
      subject: `Portfolio Contact: ${safeSubject}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Subject:</strong> ${safeSubject}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
      `,
    });

    // Confirmation email to sender
    await transporter.sendMail({
      from: smtpUser,
      to: email,
      subject: `Thank you for contacting me - ${safeName}`,
      html: `
        <h2>Thank You for Reaching Out!</h2>
        <p>Hi ${safeName},</p>
        <p>Thank you for contacting me through my portfolio. I have received your message and will get back to you as soon as possible.</p>
        <br>
        <p><strong>Your Message:</strong></p>
        <p><strong>Subject:</strong> ${safeSubject}</p>
        <p>${safeMessage}</p>
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

    if (error && typeof error === "object" && "code" in error && error.code === "EAUTH") {
      return NextResponse.json(
        {
          success: false,
          message: "Gmail authentication failed. Use a valid Google App Password.",
        },
        { status: 503 },
      );
    }

    return NextResponse.json(
      { success: false, message: "Failed to send email" },
      { status: 503 },
    );
  }
}
