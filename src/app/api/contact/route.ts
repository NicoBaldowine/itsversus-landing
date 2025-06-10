import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { requestType, title, email, message } = await request.json();

    // Validar datos requeridos
    if (!email || !message) {
      return NextResponse.json(
        { error: 'Email and message are required' },
        { status: 400 }
      );
    }

    // Enviar email usando Resend
    const { data, error } = await resend.emails.send({
      from: 'Versus Contact Form <delivered@resend.dev>', // Usando dominio verificado de Resend
      to: ['nbaldovino5@gmail.com'], // Temporalmente usando email verificado en Resend
      subject: `${requestType}: ${title || 'New Contact Form Submission'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #000; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="margin: 20px 0;">
            <strong>Request Type:</strong> ${requestType}
          </div>
          
          ${title ? `
          <div style="margin: 20px 0;">
            <strong>Title:</strong> ${title}
          </div>
          ` : ''}
          
          <div style="margin: 20px 0;">
            <strong>From:</strong> ${email}
          </div>
          
          <div style="margin: 20px 0;">
            <strong>Message:</strong>
            <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin-top: 10px;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;">
          
          <p style="color: #666; font-size: 12px;">
            This email was sent from the Versus App contact form at itsversus.app
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Email sent successfully', id: data?.id },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 