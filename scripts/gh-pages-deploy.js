#!/usr/bin/env node
const path = require('path');
const ghpages = require('gh-pages');
const distPath = path.join(__dirname, '../guide/dist');
const repoUrl = require('../package.json').repository.url;

ghpages.publish(distPath, { repo: repoUrl });
