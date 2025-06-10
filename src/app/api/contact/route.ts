import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request: NextRequest) {
  try {
    console.log('=== Contact Form Debug ===');
    console.log('Environment:', process.env.NODE_ENV);
    console.log('API Key exists:', !!process.env.RESEND_API_KEY);
    console.log('API Key first 10 chars:', process.env.RESEND_API_KEY?.substring(0, 10));
    
    const { requestType, title, email, message } = await request.json();
    console.log('Form data received:', { requestType, title, email: email?.substring(0, 5) + '***', messageLength: message?.length });

    // Validar datos requeridos
    if (!email || !message) {
      console.log('Validation failed: missing email or message');
      return NextResponse.json(
        { error: 'Email and message are required' },
        { status: 400 }
      );
    }

    // Verificar que Resend esté configurado
    if (!resend) {
      console.error('Resend not configured - missing API key');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    console.log('About to send email with Resend...');

    // Enviar email usando Resend
    const emailConfig = {
      from: 'Acme <onboarding@resend.dev>', // Usando el formato más simple
      to: ['nbaldovino5@gmail.com'], // Email verificado en Resend
      subject: `${requestType}: ${title || 'New Contact Form Submission'}`,
      html: `
        <html>
        <body style="font-family: Arial, sans-serif; margin: 0; padding: 20px;">
          <div style="max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333; border-bottom: 2px solid #000; padding-bottom: 10px;">
              New Contact Form Submission
            </h2>
            
            <div style="margin: 20px 0;">
              <strong>Request Type:</strong> ${requestType || 'Not specified'}
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
                ${(message || '').replace(/\n/g, '<br>').replace(/</g, '&lt;').replace(/>/g, '&gt;')}
              </div>
            </div>
            
            <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;">
            
            <p style="color: #666; font-size: 12px;">
              This email was sent from the Versus App contact form at itsversus.app
            </p>
          </div>
        </body>
        </html>
      `,
    };

    console.log('Email config:', { ...emailConfig, html: '[HTML_CONTENT]' });
    const { data, error } = await resend.emails.send(emailConfig);

    if (error) {
      console.error('Resend error:', error);
      console.error('Error details:', JSON.stringify(error, null, 2));
      return NextResponse.json(
        { error: 'Failed to send email', details: process.env.NODE_ENV === 'development' ? error : 'Contact support' },
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