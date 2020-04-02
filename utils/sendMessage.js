const fetch = require('node-fetch');

const sendMessage = async (req) => {
  try {
    fetch('https://app.psykologieservers.com/contact', {
      method: 'POST',
      body: JSON.stringify({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
      }),
      headers: { 'Content-Type': 'application/json' }
    })
  } catch (error) {
    console.log(error)
  }
}

module.exports = sendMessage;