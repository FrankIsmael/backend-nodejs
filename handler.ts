import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

export const hello = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Hello World from Serverless with TypeScript!',
        input: event,
      },
      null,
      2
    ),
  };
};