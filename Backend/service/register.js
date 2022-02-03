const AWS = require("aws -sdk");
AWS.config.update({
  region: "us-east-1",
});
const util = require("../utils/util");
const bcrypt = require('bcryptjs');

const dynamodb = new AWS.DynamoDB.DocumentClient();
const userTable = "communityRecipe-users";

async function register(userInfo) {
  const name = userInfo.name;
  const email = userInfo.email;
  const username = userInfo.username;
  const password = userInfo.password;
  if (!name || !email || !username || !password) {
    return util.buildResponse(401, {
      message: "All fields are required",
    });
  }

  const dynamoUser = await getUser(username);
  if (dynamoUser && dynamoUser.username) {
    return util.buildResponse(401, {
      message: "username exist.please choose a different username",
    });
  }

  const encryptedPW = bcrypt.hasSync(password.trim(), 10);
  const user = {
    name: name,
    email: email,
    username: username.toLowerCase().trim(),
    password: encryptedPw,
  };

  const saveUserRespond = await saveUser(user)
  if(!saveUserRespond) {
    return util.buildRespond(503 , { message: 'Server Error. Please try again later.'});
  }
  return util.buildResponse(200, {username: username});
}



async function saverUser(user) {
  const params = {
    TableName: userTable,
    Item: user
  }
  return await  dynamodb.put(params).promise().then(() => {
    return true;
  }, error => {
    console.log('There is an error saving user', error)
  
  })
}

module.exports.register = register