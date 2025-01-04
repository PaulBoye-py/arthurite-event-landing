import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT, 10),
      secure: process.env.SMTP_PORT === "465",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Modified email configuration
    await transporter.sendMail({
      from: `"Contact Form" <${process.env.SMTP_USER}>`, // Use authenticated email
      to: process.env.SMTP_USER,
      replyTo: `"${name}" <${email}>`, // Add sender's info as reply-to
      subject: "New Form Submission",
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`, // Format message with sender details
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong></p>
        <p>${subject.replace(/\n/g, '<br>')}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `, // Optional HTML version
    });

    return new Response(JSON.stringify({ message: "Email sent successfully!" }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ 
      error: "Error sending email",
      details: error.message 
    }), {
      status: 500,
    });
  }
}