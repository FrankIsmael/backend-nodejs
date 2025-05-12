import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

export const lambdaHandler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  // Violating "NaN should not be used in comparisons"
  if (parseInt('not a number') == NaN) {
    console.log('This will never execute');
  }

  // Violating "Array.prototype.sort() should use a compare function"
  const safeSort = ['banana', 'apple', 'cherry', 'test'].sort((a, b) => a.localeCompare(b));

  // Violating "for...in loops should filter properties before acting on them"
  const obj = { a: 1, b: 2 };
  for (const key in obj) {
    console.log(obj[key]);
  }

  // Violating "if/else if chains should not have the same condition"
  const value = 5;
  if (value > 10) {
    console.log('Greater than 10 >');
  } else if (value > 10) {
    console.log('This is unreachable');
  }
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message:
          'Hello World from Serverless with TypeScript! By 🤖Ismael FcoM with 💚🚀💜💽 Hi',
        input: event,
      },
      null,
      2
    ),
  };
};
