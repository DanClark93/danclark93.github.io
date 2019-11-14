# Times Armistice

> Armistice takeover page

Scaffolded using the Times Yeoman generator.

## Use

Development:

    yarn start

Testing:

    yarn test

Production:

    yarn build

Deployment:

    yarn deploy

## Contact

Dan Clark (daniel.clark@the-times.co.uk)

## Takeover page

This scaffold is for a takeover page.

### Structure

The `app/components` folder contains folders for each React component. Each folder in turn contains a `component.js` file, tests, and optional static files.

`app.js` is the top-level component.

`_browser.js` and `_server.js` support browser- and server-rendering respectively and shouldn't normally need to be edited.

### Testing

Jest is included for React component testing. Tests for a component should be placed in a `__tests__` directory inside each component directory.

Jest supports mocks as part of a test suite; these should be placed in the top-level `__mocks__` folder.

### Takeover pages

The `templates` directory contains templates for the `article.xml` and `component.xml` files that are required to publish a takeover page.

The variables that are inserted into these templates can all be edited in `times.config.json`.

### Deployment

After running `npm run build` you can run `npm run deploy` to upload the `article.xml` and `component.xml` files to S3 and publish them to the website using the [`times-api-publisher`](https://github.com/times/times-api-publisher) module.

By default the takeover page will publish to UAT and can be accessed at the following URLs:

- Logged-in view: `http://cps-render-uat.elb.tnl-dev.ntch.co.uk/article/<ARTICLE_ID>`
- Logged-out view: `https://www.uat-thetimes.co.uk/article/<ARTICLE_ID>`
- JSON document view: `http://cps-api-tnl-uat.elb.tnl-dev.ntch.co.uk/v0.8/document/<ARTICLE_ID>`

To publish to prod (i.e. the live website) you can change `--environment=uat` to `--environment=prod` in `scripts/deploy.js`. The takeover page will then be available at:

- Logged-out view: `http://cps-render-prod.elb.tnl-prod.ntch.co.uk/article/<ARTICLE_ID>`
- Logged-in view: `http://www.thetimes.co.uk/article/<ARTICLE_ID>`
- JSON document view: `http://cps-api-tnl-prod.elb.tnl-prod.ntch.co.uk/v0.8/document/<ARTICLE_ID>`

## Styling

This project has been scaffolded using [SASS](http://sass-lang.com/) to manage CSS files. SASS uses a `.scss` file extension.
