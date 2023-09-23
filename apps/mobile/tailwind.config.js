const path = require('path');
// const theme = require('../../packages/ui/src/styles/theme');
const theme = require('ui/src/styles/theme');


const twFiles = '/**/*.{ts,tsx,mdx}';

module.exports = {
  theme: theme.theme,
  content: [
    `./src/${twFiles}`,
    path.resolve(__dirname, 'node_modules', 'ui', twFiles),
  ],
};
