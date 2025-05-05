import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

export const lambdaHandler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message:
          'Hello World from Serverless with TypeScript! By 🤖Ismael FcoM with 💚',
        input: event,
      },
      null,
      2
    ),
  };
};
