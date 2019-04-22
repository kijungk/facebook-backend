module.exports = (function () {
  const rp = require('request-promise');

  function send(recipientId, content) {
    const body = {
      recipient: {
        id: recipientId
      },
      message: content
    };

    const options = {
      uri: 'https://graph.facebook.com/v2.6/me/messages',
      qs: {
        access_token: process.env.PAGE_ACCESS_TOKEN
      },
      method: 'POST',
      json: body
    };

    rp(options)
      .then((response) => {
        console.log(`Message successfully sent to recipient: ${response.recipient_id}`);
      })
      .catch((error) => {
        console.log(`Error during POST operation to Send API:\n\n${error}\n\n`)
        return;
      });
  }

  return {
    send: send
  };
})();