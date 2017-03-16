This is a starting point for new React projects.
It was created using create-react-app.

## Installation
```bash
npm install -g yarn
yarn
```

## Steps to start REST server:
1. open a terminal window
2. cd starter-api
3. sudo -E npm start

## Steps to start web server:
1. open a terminal window
2. cd starter
3. export HTTPS=true
4. sudo -E npm start

Browse http://localhost:3000

If it fails to fetch data, it could be that the browser doesn't yet trust
the domain of the REST serves.  To enable this:
1. browse https://localhost/project
2. click "ADVANCED"
3. click "Proceed to localhost (unsafe)"

## Sass Linting
For all the rules and options for `stylelint` see:
[Stylelint Rules](https://github.com/stylelint/stylelint/blob/master/docs/user-guide/example-config.md)

To see a list of color names supported by all browsers with CSS3 support, including IE9+, see:
[CSS3 Colors](https://www.w3.org/TR/css3-color/#svg-color)

> NOTE: Rules do not have defaults with stylelint. Any rule not present is not enforced.
> If you had a `.stylelintrc` with `{ "rules": {} }` then it would do nothing.

## Cloud Foundry

To install Cloud Foundry locally, we are using pcfdev, follow the instructions here:
https://pivotal.io/platform/pcf-tutorials/getting-started-with-pivotal-cloud-foundry-dev/introduction

The cloud foundry tutorial above will have you do this, but if you restart your computer, run:
`npm run cf:init`
This will start the pcfdev VM and login to your dev space.

To start a new UI server in a local cloud foundry container:
`npm run cf:up`

To delete the UI server:
`npm run cf:down

*Note: The UI container relies on:
1) A local database
2) A cloud foundry API container
See the starter-api project for details on the API container*

Other useful CF commands:
`cf apps`
`cf logs app-name`
`cf logs app-name --recent`
`cf events app-name`
`cf push app-name`
`cf push app-name --no-start`
`cf delete app-name`
`cf start app-name`
`cf stop app-name`
`cf set-env APP_NAME ENV_VAR_NAME ENV_VAR_VALUE`
