const jwt = require('jsonwebtoken');

function generalToken(userInfo) {
  if(!userInfo) {
    return null;
  }


  return jwt.sign(userInfo, process.env.JWT_SECRET, {
    expires: '1h'
  })
}

module.exports.generalToken = generalToken