/*!
 * Copyright (c) 2023-2024 Digital Bazaar, Inc. All rights reserved.
 */
export default {
  output: {
    libraryTarget: 'commonjs',
    filename: 'main.cjs'
  },
  mode: 'production',
  entry: './lib/index.js',
  module: {
    parser: {
      javascript: {
        url: false
      }
    }
  }
};
