const path = require('path');


const projectDir = path.join(__dirname, '..');
const clientDir = path.join(projectDir, 'example');
const buildDir = path.join(projectDir, 'build');
const nodeModulesDir = path.join(projectDir, 'node_modules');


module.exports = {
  projectDir,
  clientDir,
  buildDir,
  nodeModulesDir
};
