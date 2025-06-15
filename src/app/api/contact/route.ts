import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { requestType, title, email, message } = await request.json();

    if (!email || !message) {
      return NextResponse.json({ error: 'Email and message are required' }, { status: 400 });
    }

    // Configura el transporter de Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'quizlandhelp@gmail.com',
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Configura el mail
    const mailOptions = {
      from: email,
      to: 'quizlandhelp@gmail.com',
      subject: `${requestType}: ${title || 'New Contact Form Submission'}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Request Type:</strong> ${requestType}</p>
        <p><strong>Title:</strong> ${title}</p>
        <p><strong>From:</strong> ${email}</p>
        <p><strong>Message:</strong><br>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    // Envía el mail
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'There was an error sending your message. Please try again later.' }, { status: 500 });
  }
} 