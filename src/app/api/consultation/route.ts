import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { dailyRateLimit, getClientIP } from '../../../lib/rateLimit';

export async function POST(request: NextRequest) {
  try {
    // Rate limiting: 1 request per day per IP
    const clientIP = getClientIP(request);
    const isAllowed = dailyRateLimit(clientIP);

    if (!isAllowed) {
      return NextResponse.json(
        { success: false, message: 'Sorry, only 1 consultation request per 24 hours. If you have any urgent questions, feel free to call us at (555) 123-4567.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { firstName, lastName, isNewClient, message, phone, email, honeypot } = body;

    // Honeypot protection: if honeypot field is filled, reject the request
    if (honeypot) {
      return NextResponse.json(
        { success: false, message: 'Invalid request.' },
        { status: 400 }
      );
    }

    // Validate required fields
    if (!firstName || !lastName || !isNewClient || !message || !phone || !email) {
      return NextResponse.json(
        { success: false, message: 'All fields are required.' },
        { status: 400 }
      );
    }

    // Send email notification
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const emailContent = `
New Consultation Request

Full Name: ${firstName} ${lastName}
Email Address: ${email}
Phone Number: ${phone}
New Client: ${isNewClient}

Message:
${message}

Submitted on: ${new Date().toLocaleString()}
    `;

    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: 'glennquezada14@gmail.com', // Your law office email
      subject: 'Consultation Request',
      text: emailContent,
    });

    return NextResponse.json({
      success: true,
      message: 'Thank you for your consultation request. We will contact you shortly to confirm your appointment.',
    });

  } catch (error) {
    console.error('Consultation submission error:', error);
    return NextResponse.json(
      { success: false, message: 'There was an error submitting your request. Please try again later.' },
      { status: 500 }
    );
  }
} 