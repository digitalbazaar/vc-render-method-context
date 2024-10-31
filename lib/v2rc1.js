/*!
 * Copyright (c) 2024 Digital Bazaar, Inc. All rights reserved.
 */
// Use JSON style for context
/* eslint quotes: ['error', 'double'] */
/* eslint quote-props: ['error', 'always'] */
/* eslint-disable max-len */

export default
/* context-url: https://w3id.org/vc/render-method/v2rc1 */
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

        "css3MediaQuery": {
          "@id": "https://w3id.org/vc/render-method#css3MediaQuery"
        },
        "digestMultibase": {
          "@id": "https://w3id.org/security#digestMultibase",
          "@type": "https://w3id.org/security#multibase"
        },
        "name": "https://schema.org/name"
      }
    },
    "SvgRenderingTemplate2024": {
      "@id": "https://w3id.org/vc/render-method#SvgRenderingTemplate2024",

      "@context": {
        "@protected": true,
        "id": "@id",
        "type": "@type",

        "digestMultibase": {
          "@id": "https://w3id.org/security#digestMultibase",
          "@type": "https://w3id.org/security#multibase"
        },
        "mediaQuery": "https://w3id.org/vc/render-method#mediaQuery",
        "mediaType": "https://schema.org/encodingFormat",
        "name": "https://schema.org/name",
        "template": "https://w3id.org/vc/render-method#template"
      }
    }
  }
}
/* context-end */;
