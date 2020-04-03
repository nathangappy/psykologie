const fetch = require('node-fetch');
const sgMail = require('@sendgrid/mail');

const sendMessage = async (req) => {
  const { name, email, message } = req.body;
  sgMail.setApiKey(process.env.SENDGRID_API);
  const msg = {
    to: 'team@psykologie.com',
    subject: 'Psykologie site message',
    from: 'team@psykologie.com',
    text: message,
    reply_to: {
      email: email,
      name: name
    }
  };
  sgMail.send(msg);
  res.send(200)
}

module.exports = sendMessage;