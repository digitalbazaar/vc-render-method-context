#!/usr/bin/env node
/*!
 * Copyright (c) 2021-2024 Digital Bazaar, Inc. All rights reserved.
 */
import fs from 'node:fs';
import {metadata} from '../lib/index.js';

// Serialize the contexts as JSON-LD
for(const {fileUrl, context} of metadata.values()) {
  fs.writeFileSync(fileUrl, JSON.stringify(context, null, 2) + '\n');
}
