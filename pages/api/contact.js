import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests allowed' });
  }

  console.log('Incoming form data:', req.body);  // Add this for debugging

  const {
    name,
    email,
    phone,
    company,
    budget,
    projectDescription,
    selectedDay,
    selectedTime,
    selectedTimezone,
  } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_TO || process.env.EMAIL_USER,
    subject: '🚀 New Contact Form Submission',
    html: `
      <h1>New Contact Form Submission</h1>
      <p><strong>Name:</strong> ${name || 'Not provided'}</p>
      <p><strong>Email:</strong> ${email || 'Not provided'}</p>
      <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
      <p><strong>Company:</strong> ${company || 'Not provided'}</p>
      <p><strong>Budget:</strong> ${budget || 'Not provided'}</p>
      <p><strong>Project Description:</strong> ${projectDescription || 'Not provided'}</p>
      <hr />
      <h2>Scheduling Details</h2>
      <p><strong>Preferred Day:</strong> ${selectedDay || 'Not provided'}</p>
      <p><strong>Time:</strong> ${selectedTime || 'Not provided'}</p>
      <p><strong>Timezone:</strong> ${selectedTimezone || 'Not provided'}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send email', error: error.message });
  }
}
