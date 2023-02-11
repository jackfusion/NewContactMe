// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const mail = require('@sendgrid/mail');
mail.setApiKey(process.env.SENDGRID_API_KEY);
export default function handler(req, res) {
  
  const body = JSON.parse(req.body);
  
  const message = `
  Name: ${body.name\r\n
  Email: ${body.email}\r\n
  Message: ${body.message}`;
  mail.setApiKey(process.env.SENDGRID_API_KEY);

  mail.send({
    to: 'kendewitt@yftg.ca',
    from: 'kendewitt@yftg.ca',
    subject: 'New Message from contact Me form!',
    text: message,
    html: message.replace(/\r\n/g, '<br>'),
  }).then(() => {
    res.status(200).json({ status: 'Ok' });
  });
}