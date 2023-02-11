// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const mail = require('@sendgrid/mail');
export default function handler(req, res) {
  
  const body = JSON.parse(req.body);
  
  const message = `
  Name: ${body.name}rn
  Email: ${body.email}rn
  Message: ${body.message}`;

  mail.setApiKey(process.env.SENDGRID_API_KEY);
  res.status(200).json({ status: 'OK' })
  console.log('body', body);
}
