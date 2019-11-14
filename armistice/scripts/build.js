const fs = require('fs-extra');
const config = require('../times.config');

// Copy the component XML file to use its UUID
fs.move('./dist/component.xml.html', `./dist/${config.componentId}`, err => {
  if (err) console.log(err);
});

// Copy the article XML file to use its UUID
fs.move('./dist/article.xml.html', `./dist/${config.articleId}`, err => {
  if (err) console.log(err);
});
