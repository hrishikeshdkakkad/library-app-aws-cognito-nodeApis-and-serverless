/**
 * A Lambda function that returns a static string
 */
const AWS = require("aws-sdk")
const axios = require("axios")
const FormData = require("form-data")
require('dotenv/config')


const cognitoIdentityServiceProvider = new AWS.CognitoIdentityServiceProvider()
exports.helloFromLambdaHandler = async (event, context, callback) => {

    const params = {
        GroupName: "applicationUsers",
        UserPoolId: event.userPoolId,
        Username: event.userName
    };

    try {
        await cognitoIdentityServiceProvider.adminAddUserToGroup(params).promise()

        let data = new FormData()
        data.append('username', event.userName)

        let config = {
            headers: {
                ...data.getHeaders()
            },
        }

        const postResult = await axios.post(process.env.API_URL, data, config)
        console.log(postResult, "post result")
    } catch (error) {
        console.log(error)
    }

    context.done(null, event)
}
