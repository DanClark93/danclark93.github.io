// Dependencies
const { exec } = require('child_process');
const chalk = require('chalk');
const util = require('util');
const hash = require('custom-hash');

// Config
const config = require('../times.config');

const generateHash = (uuid, slug) => {
  hash.configure({
    charSet: [
      'b',
      'c',
      'd',
      'f',
      'g',
      'h',
      'j',
      'k',
      'l',
      'm',
      'n',
      'p',
      'q',
      'r',
      's',
      't',
      'v',
      'w',
      'x',
      'z',
      '2',
      '3',
      '5',
      '6',
      '7',
      '8',
      '9',
      '0',
    ],
    maxLength: 9,
    right: true,
  });

  return `${slug}-${hash.digest(uuid)}`;
};

const syncCmd = `aws s3 sync ./dist s3://nuk-tnl-editorial-prod-staticassets/public/takeover-pages/${
  config.slug
} --acl=public-read`;
const publishCmd = `./node_modules/times-api-publisher/publish.js ./dist/${
  config.articleId
} --environment=uat --title=${config.publication}`;

exec(syncCmd, err => {
  if (err) console.log('Error syncing to AWS:', err);
  else
    console.log(`
${chalk.bold.bgKeyword('green').keyword('white')('✅  Assets synced with S3')}
S3 path: ${chalk.blue(
      `s3://nuk-tnl-editorial-prod-staticassets/public/takeover-pages/${
        config.slug
      }`
    )}
  `);
});

exec(publishCmd, err => {
  if (err) console.log('Error publishing to the API:', err);
  else {
    const canonicalHash = generateHash(config.articleId, config.slug);
    console.log(`
${chalk.bold.bgKeyword('green').keyword('white')(
      '✅  Deployed to the content hub'
    )}
${chalk.bold('Development URLs')}
API: ${chalk.blue(
      `http://cps-api-tnl-uat.elb.tnl-dev.ntch.co.uk/v0.8/document/${
        config.articleId
      }`
    )}
Logged in: ${chalk.blue(
      `http://cps-render-uat.elb.tnl-dev.ntch.co.uk/article/${canonicalHash}`
    )}
Logged out: ${chalk.blue(
      `https://www.uat-thetimes.co.uk/article/${canonicalHash}`
    )}

${chalk.bold('Production URLs')}
API: ${chalk.blue(
      `http://cps-api-tnl-prod.elb.tnl-prod.ntch.co.uk/v0.8/document/${
        config.articleId
      }`
    )}
Render: ${chalk.blue(`https://www.thetimes.co.uk/article/${canonicalHash}`)}
  `);
  }
});
