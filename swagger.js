// swagger.js
const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Dividend Tracker API',
      version: '1.0.0',
      description: 'API for tracking dividend income.', 
    },
    components: {
      responses: {
        BadRequest: {
          description: 'Malformed JSON or missing required fields.',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  error: {
                    type: 'string',
                    example: 'Invalid JSON. Please check your request body format.',
                  },
                },
              },
            },
          },
        },
        UnsupportedMediaType: {
          description: 'Unsupported content type.',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  error: {
                    type: 'string',
                    example: 'Expected content-type application/json.',
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  apis: ['./index.js', './routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;

