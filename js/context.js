/*!
 * Copyright (c) 2023 Digital Bazaar, Inc. All rights reserved.
 */
/* eslint-disable-next-line quotes */
'use strict';

// Use JSON style for context
/* eslint quotes: ["error", "double"] */
/* eslint quote-props: ["error", "always"] */

module.exports =
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
;
