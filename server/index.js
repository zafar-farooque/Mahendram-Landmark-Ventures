const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const rateLimit = require('express-rate-limit');

const app = express();
const PORT = process.env.PORT || 5000;

// ── Middleware ──────────────────────────────────────────────────────────────
app.use(express.json());
app.use(cors({
  origin: [
    process.env.FRONTEND_URL || 'http://localhost:5173',
    'https://mahendram.com',
    'https://www.mahendram.com',
  ],
  methods: ['POST'],
}));

// Rate limiter: max 10 submissions per 15 minutes per IP
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: { success: false, message: 'Too many requests. Please try again later.' },
});
app.use('/api/', limiter);

// ── Nodemailer Transporter ──────────────────────────────────────────────────
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT) || 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: false,
    minVersion: 'TLSv1',
  },
  debug: true,
  logger: true,
});

// ── Helper: Send Email ──────────────────────────────────────────────────────
async function sendEmail({ subject, html, replyTo }) {
  return transporter.sendMail({
    from: `"Mahendram Website" <${process.env.SMTP_USER}>`,
    to: process.env.MAIL_TO,
    replyTo: replyTo || process.env.SMTP_USER,
    subject,
    html,
  });
}

// ── ROUTE 1: General Contact Form ─────────────────────────────────────────
app.post('/api/contact', async (req, res) => {
  const { name, email, phone, company, service, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Name, email and message are required.' });
  }

  const html = `
    <h2 style="color:#0A4D8C">New Contact Inquiry — Mahendram Website</h2>
    <table style="border-collapse:collapse;width:100%;font-family:sans-serif">
      <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Name</td><td style="padding:8px;border:1px solid #eee">${name}</td></tr>
      <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Email</td><td style="padding:8px;border:1px solid #eee">${email}</td></tr>
      <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Phone</td><td style="padding:8px;border:1px solid #eee">${phone || 'Not provided'}</td></tr>
      <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Company</td><td style="padding:8px;border:1px solid #eee">${company || 'Not provided'}</td></tr>
      <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Service Interest</td><td style="padding:8px;border:1px solid #eee">${service || 'Not specified'}</td></tr>
      <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Message</td><td style="padding:8px;border:1px solid #eee">${message}</td></tr>
    </table>
    <p style="color:#666;font-size:12px;margin-top:16px">Sent from mahendram.com contact form</p>
  `;

  try {
    await sendEmail({ subject: `Contact Inquiry from ${name}`, html, replyTo: email });
    res.json({ success: true, message: 'Message sent successfully!' });
  } catch (err) {
    console.error('Contact form error:', err.message);
    res.status(500).json({ success: false, message: 'Failed to send message. Please try again.' });
  }
});

// ── ROUTE 2: Partner With Us Form ──────────────────────────────────────────
app.post('/api/partner', async (req, res) => {
  const { name, company, type, city, email, phone } = req.body;

  if (!name || !email || !type) {
    return res.status(400).json({ success: false, message: 'Name, email and partnership type are required.' });
  }

  const html = `
    <h2 style="color:#0A4D8C">New Partnership Application — Mahendram Website</h2>
    <table style="border-collapse:collapse;width:100%;font-family:sans-serif">
      <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Name</td><td style="padding:8px;border:1px solid #eee">${name}</td></tr>
      <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Company</td><td style="padding:8px;border:1px solid #eee">${company}</td></tr>
      <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Partnership Type</td><td style="padding:8px;border:1px solid #eee">${type}</td></tr>
      <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">City</td><td style="padding:8px;border:1px solid #eee">${city}</td></tr>
      <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Email</td><td style="padding:8px;border:1px solid #eee">${email}</td></tr>
      <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Phone</td><td style="padding:8px;border:1px solid #eee">${phone}</td></tr>
    </table>
    <p style="color:#666;font-size:12px;margin-top:16px">Sent from mahendram.com Partner With Us form</p>
  `;

  try {
    await sendEmail({ subject: `Partnership Application — ${type} — ${name}`, html, replyTo: email });
    res.json({ success: true, message: 'Application submitted successfully!' });
  } catch (err) {
    console.error('Partner form error:', err.message);
    res.status(500).json({ success: false, message: 'Failed to submit. Please try again.' });
  }
});

// ── ROUTE 3: Careers / Job Application Form ────────────────────────────────
app.post('/api/careers', async (req, res) => {
  const { name, email, phone, city, role, exp } = req.body;

  if (!name || !email || !role) {
    return res.status(400).json({ success: false, message: 'Name, email and role are required.' });
  }

  const html = `
    <h2 style="color:#0A4D8C">New Job Application — Mahendram Careers</h2>
    <table style="border-collapse:collapse;width:100%;font-family:sans-serif">
      <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Applicant Name</td><td style="padding:8px;border:1px solid #eee">${name}</td></tr>
      <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Email</td><td style="padding:8px;border:1px solid #eee">${email}</td></tr>
      <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Phone</td><td style="padding:8px;border:1px solid #eee">${phone}</td></tr>
      <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Current City</td><td style="padding:8px;border:1px solid #eee">${city}</td></tr>
      <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Role Applied For</td><td style="padding:8px;border:1px solid #eee">${role}</td></tr>
      <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Years of Experience</td><td style="padding:8px;border:1px solid #eee">${exp}</td></tr>
    </table>
    <p style="color:#666;font-size:12px;margin-top:16px">Sent from mahendram.com Careers page</p>
  `;

  try {
    await sendEmail({ subject: `Job Application — ${role} — ${name}`, html, replyTo: email });
    res.json({ success: true, message: 'Application submitted successfully!' });
  } catch (err) {
    console.error('Careers form error:', err.message);
    res.status(500).json({ success: false, message: 'Failed to submit. Please try again.' });
  }
});

// ── ROUTE 4: Tender Inquiry Form ───────────────────────────────────────────
app.post('/api/tender', async (req, res) => {
  const { company, contact, email, phone, category, message } = req.body;

  if (!company || !email) {
    return res.status(400).json({ success: false, message: 'Company and email are required.' });
  }

  const html = `
    <h2 style="color:#0A4D8C">New Tender Inquiry — Mahendram Website</h2>
    <table style="border-collapse:collapse;width:100%;font-family:sans-serif">
      <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Company</td><td style="padding:8px;border:1px solid #eee">${company}</td></tr>
      <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Contact Person</td><td style="padding:8px;border:1px solid #eee">${contact}</td></tr>
      <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Email</td><td style="padding:8px;border:1px solid #eee">${email}</td></tr>
      <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Phone</td><td style="padding:8px;border:1px solid #eee">${phone}</td></tr>
      <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Category</td><td style="padding:8px;border:1px solid #eee">${category}</td></tr>
      <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Message</td><td style="padding:8px;border:1px solid #eee">${message || 'N/A'}</td></tr>
    </table>
    <p style="color:#666;font-size:12px;margin-top:16px">Sent from mahendram.com Tenders page</p>
  `;

  try {
    await sendEmail({ subject: `Tender Inquiry — ${category} — ${company}`, html, replyTo: email });
    res.json({ success: true, message: 'Tender inquiry submitted!' });
  } catch (err) {
    console.error('Tender form error:', err.message);
    res.status(500).json({ success: false, message: 'Failed to submit. Please try again.' });
  }
});

// ── Health Check ────────────────────────────────────────────────────────────
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'Mahendram Mailer API' });
});

// ── Start Server ────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`✅ Mahendram Mailer Server running on port ${PORT}`);
  transporter.verify((err) => {
    if (err) {
      console.error('❌ SMTP connection failed:', err.message);
    } else {
      console.log('📧 SMTP connection verified — ready to send emails');
    }
  });
});
