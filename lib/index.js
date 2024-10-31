/*!
 * Copyright (c) 2023-2024 Digital Bazaar, Inc. All rights reserved.
 */
import v1Context from './v1.js';
import v2rc1Context from './v2rc1.js';

// map of context id to context
export const contexts = new Map();
// map of context id to context metadata
export const metadata = new Map();
// map of short names to context metadata
export const named = new Map();

function setExportsFromMetadata({
  contextsMap, metadataMap, namedMap, metadata
}) {
  contextsMap.set(metadata.id, metadata.context);
  metadataMap.set(metadata.id, metadata);
  namedMap.set(metadata.shortName, metadata);
}

setExportsFromMetadata({
  contextsMap: contexts, metadataMap: metadata, namedMap: named,
  metadata: {
    id: 'https://w3id.org/vc/render-method/v1',
    type: 'ContextMetadata',
    shortName: 'v1',
    fileUrl: new URL('../contexts/v1.jsonld', import.meta.url),
    context: v1Context
  }
});
setExportsFromMetadata({
  contextsMap: contexts, metadataMap: metadata, namedMap: named,
  metadata: {
    id: 'https://w3id.org/vc/render-method/v2rc1',
    type: 'ContextMetadata',
    shortName: 'v2rc1',
    fileUrl: new URL('../contexts/v2rc1.jsonld', import.meta.url),
    context: v2rc1Context
  }
});
