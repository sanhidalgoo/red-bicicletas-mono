require('dotenv').config('./.env');

//Google Auth
const { OAuth2Client } = require('google-auth-library');
const CLIENT_ID = process.env.CLIENT_ID;
const client = new OAuth2Client(CLIENT_ID);

exports.index = function (req, res) {
  let token = req.cookies['session-token']

  let user = {};
  async function verify() {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: CLIENT_ID,
    });
    const payload = ticket.getPayload();
    user.name = payload.name;
    user.email = payload.email;
    user.picture = payload.picture;
  }
  verify()
    .then(() => {
      req.user = user;
      res.render('index', { title: 'Login - Red Bicicletas', user: user });
    }).catch(err => {
      res.redirect('/login')
    });
};