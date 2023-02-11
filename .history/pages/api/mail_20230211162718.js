// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const mail = require('@sendgrid/mail');
export default function handler(req, res) {
  
  const body = JSON.parse(req.body);
  
  const message = `
  Name: ${body.name}rn
  Email: ${body.email}rn
  Message: ${body.message}`;
  mail.setApiKey(process.env.SENDGRID_API_KEY);

  mail.send({
  to: 'to.name@email.com',
  from: 'from.name@email.com',
  subject: 'New Message!',
  text: message,
  html: message.replace(/rn/g, '<br>'),
  });

  res.status(200).json({ status: 'OK' })
  console.log('body', body);
}
