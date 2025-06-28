const fs = require('fs');
const path = require('path');
const yaml = require('yaml');

const swaggerSpec = require('./swagger');

// Convert JSON spec to YAML string
const yamlSpec = yaml.stringify(swaggerSpec);

// Define output path (adjust if needed)
const outputPath = path.join(__dirname, '../docs/openapi.yaml');

// Write YAML spec to file
fs.writeFileSync(outputPath, yamlSpec, 'utf8');

console.log(`✅ OpenAPI YAML spec generated at: ${outputPath}`);

/*Readme: 

To output the file, run:

  node scripts/generate-openapi.js

It will create the openapi.yaml in the docs folder.

*/
