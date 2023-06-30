const commonjs = require('rollup-plugin-commonjs');

module.exports = {
  // Input is created by webpack in previous build step, in CommonJS format.
  input: 'dist/main.js',
  output: {
    file: 'dist/main.esm.js',
    format: 'esm'
  },
  plugins: [
    commonjs({
      // explicitly list exports otherwise only have 'default'
      namedExports: {
        'dist/main.js': [
          'CONTEXT',
          'CONTEXT_URL',
          'appContextMap',
          'constants',
          'contexts'
        ]
      }
    })
  ]
};
