/**
 * A Lambda function that returns a static string
 */
exports.helloFromLambdaHandler = async (event, context) => {
    // If you change this message, you will need to change hello-from-lambda.test.js
    console.log(event, "event from cognito")
    const message = 'Hello from Lambda!';

    // All log statements are written to CloudWatch
    console.info(`${message}`);

    context.done(null, event)
}
