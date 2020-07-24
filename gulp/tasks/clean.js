'use strict'
const del = require('del');
module.exports.fullClean = () => del('build');
module.exports.clean = () => del('build/!(images){,/**}');