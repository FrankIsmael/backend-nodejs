# backend-nodejs
Serverless backend lambda with TypeScript

## Setup

This is a basic example of using the Serverless Framework with TypeScript to develop and deploy AWS Lambda functions.

### Prerequisites

- Node.js installed
- AWS account configured
- AWS CLI installed and configured with your credentials

### Installation

```bash
# Install dependencies
npm install
```

### Local Development

You can test your Lambda function locally:

```bash
# Invoke a specific function
npx serverless invoke local --function hello

# Or start the local development server
npm run dev
```

### Compilation

TypeScript files are automatically compiled when deploying, but you can manually compile them:

```bash
npm run build
```

### Deployment

Deploy to AWS:

```bash
npm run deploy
```

After deployment, the endpoint URL will be displayed in the terminal.

### Removing the Stack

To remove the deployed stack:

```bash
npx serverless remove
```
