const fetch = require('node-fetch')

const message = async (req) => {
  const { email } = req.body;

  const mcData = {
    members: [
      {
        email_address: email,
        status: 'pending'
      }
    ]
  };

  const mcDataPost = JSON.stringify(mcData);

  const options = {
    url: `https://us19.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_LIST}`,
    method: 'POST',
    headers: {
      Authorization: `auth ${process.env.MAILCHIMP_API}`
    },
    body: mcDataPost
  };

  if (email) {
    // successful so far
    request(options, (err, response, body) => {
      if (err) {
        res.json({ error: err });
      } else {
        res.sendStatus(200);
      }
    });
  } else {
    res.status(404).send({ message: 'Failed' });
  }
}

module.exports = message;