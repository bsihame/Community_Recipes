const jwt = require('jsonwebtoken');

function generalToken(user) {
  if(!user) {
    return null;
  }

  const userInfo = {
    username: user.username,
    email: user.email
  }

  return jwt.sign(userInfo, process.env.JWT_SECRET, {
    expires: '1h'
  })
}

module.exports.generalToken = generalToken