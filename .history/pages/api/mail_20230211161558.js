// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const mail = require('@sendgrid/mail');
export default function handler(req, res) {
  const body = JSON.parse(req.body);
  mail.setApiKey(process.env.SENDGRID_API_KEY);
  res.status(200).json({ status: 'OK' })
}
