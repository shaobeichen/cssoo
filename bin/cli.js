#!/usr/bin/env node

import clipboard from 'clipboardy'

clipboard.writeSync('hello world!')

console.log(clipboard.readSync())
