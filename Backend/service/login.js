const AWS = require("aws -sdk");
AWS.config.update({
  region: "us-east-1",
});
const util = require("../utils/util");
const bcrypt = require('bcryptjs');

const dynamodb = new AWS.DynamoDB.DocumentClient();
const userTable = "communityRecipe-users";

async function login(user) {
  const username = user.username;
  const password = user.password;
  if(!user || !username || !password) {
    return util.buildResponse(401, { message:'username and password are required'});
  }

  const dynamoUser = await getUser(username.toLowerCase().trim());
  if(!dynamoUser || !dynamoUser.username) {
    return util.buildResponse(403, { message: 'user does not exist'});
  }

  if ( !bcrypt.compareSync(password, dynamoUser.password)) {
    return util.buildResponse(403, { message: 'password is incorrect'});
  }

  const userInfo = {
    username: dynamoUser.username,
    name: dynamoUser.name
  }
  const token = 
}