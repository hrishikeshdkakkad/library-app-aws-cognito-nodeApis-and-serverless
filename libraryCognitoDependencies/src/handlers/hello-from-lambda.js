/**
 * A Lambda function that returns a static string
 */
const AWS = require("aws-sdk")

const cognitoIdentityServiceProvider = new AWS.CognitoIdentityServiceProvider()
exports.helloFromLambdaHandler = async (event, context, callback) => {
    // If you change this message, you will need to change hello-from-lambda.test.js
    console.log(event, "event from cognito")
    const message = 'Hello from Lambda!';

    // All log statements are written to CloudWatch
    console.info(`${message}`);

    const params = {
        GroupName: "applicationUsers",
        UserPoolId: event.userPoolId,
        Username: event.userName
    };

    try {
        const result = await cognitoIdentityServiceProvider.adminAddUserToGroup(params).promise()
        console.log(result)
    } catch (error) {
        console.log(error)
    }

    context.done(null, event)
}
