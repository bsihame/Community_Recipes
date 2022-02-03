const AWS = require('aws -sdk');
AWS.config.update({
  region: 'us-east-1'
})
const dynamodb = new AWS.DynamoDB.DocumentClient();
const userTable = 'communityRecipe-users';

async function register(userInfo) {
  const name = userInfo.name;
  const email = userInfo.email;
  const username = userInfo.username;
  const password = userInfo.password;
  if(!name || !email || !username || !password ) {
    return
  }
}