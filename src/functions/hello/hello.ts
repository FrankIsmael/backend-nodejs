import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

export const lambdaHandler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  console.log('Hello this is a test log');
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message:
          'Hello World from Serverless with TypeScript! By Ismael FM with 💚🚀🔥 TEST',
        input: event,
      },
      null,
      2
    ),
  };
};
