/*!
 * Copyright (c) 2023-2024 Digital Bazaar, Inc. All rights reserved.
 */
// Use JSON style for context
/* eslint quotes: ['error', 'double'] */
/* eslint quote-props: ['error', 'always'] */
/* eslint-disable max-len */

export default
/* context-url: https://w3id.org/vc/render-method/v1 */
/* context-begin */
{
  "@context": {
    "@protected": true,
    "id": "@id",
    "type": "@type",

    "SvgRenderingTemplate2023": {
      "@id": "https://w3id.org/vc/render-method#SvgRenderingTemplate2023",

      "@context": {
        "@protected": true,
        "id": "@id",
        "type": "@type",

        "name": "https://schema.org/name",
        "css3MediaQuery": {
          "@id": "https://w3id.org/vc/render-method#css3MediaQuery"
        },
        "digestMultibase": {
          "@id": "https://w3id.org/security#digestMultibase",
          "@type": "https://w3id.org/security#multibase"
        }
      }
    }
  }
}
/* context-end */;
