const fetch = require('node-fetch')

const message = async (req) => {
  console.log(req)
  try {
    fetch('https://app.psykologieservers.com/subscribe', {
      method: 'POST',
      body: JSON.stringify({ email: req.body.email }),
      headers: { 'Content-Type': 'application/json' }
    })
  } catch (error) {
    console.log(error)
  }
}

module.exports = message;