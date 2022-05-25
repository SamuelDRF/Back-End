const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swager_output.json'
const endpointsFile = ['./app.js']

swaggerAutogen(outputFile, endpointsFile)