const args = require('minimist')(process.argv.slice(2));

const base = require('./webpack/base.config');

let env = 'dev';
if (args.env) {
  switch (args.env) {
    case 'prod':
      env = 'prod';
      break;
  }
}

const getConfig = env => {
  return require('./webpack/' + env + '.config');
};

module.exports = getConfig(env);
