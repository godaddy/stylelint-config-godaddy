# stylelint-config-godaddy

A repository for CSS and Sass linting rules that have been derived from best practices and the GoDaddy Styleguide.

## The rules `index.js` file

The rules for our style linting are defined in `index.js`. The rules are separated into error reporting rules, warning reporting rules and Sass specific rules. This was done to create a divide among the different types of rules and give a more visual way of distinguishing between them.

## Installation

```
npm i --save-dev stylelint stylelint-config-godaddy
```

## Usage

Create a `.stylelintrc` file in the root of your project and extend the config file:

``` json
{
  "extends": "stylelint-config-godaddy"
}
```

## Adding your own rules

You can add your own rules beyond those that are defined here. You can find all the rules for `stylelint` [here](https://stylelint.io/user-guide/rules/). You can find all the rules for `stylelint-scss` [here](https://github.com/kristerkari/stylelint-scss#list-of-rules). There are also many other plugins that can be used to extend `stylelint` if you feel the need. To Add your own rules it would look like these examples:

##### Sample .stylelintrc file:

``` json
{
  "extends": "stylelint-config-godaddy",
  "rules": {
    "block-no-empty": true,

    "number-no-trailing-zeros": [true, {
      "severity": "warning"
    }]
  }
}
```

##### Sample .stylelintrc file with plugins:

``` json
{
  "extends": "stylelint-config-godaddy",
  "plugins": [
    "stylelint-plugin-here"
  ],
  "rules": {
    "block-no-empty": true,

    "number-no-trailing-zeros": [true, {
      "severity": "warning"
    }],

    "plugin/rule": ["always", {
      "severity": "warning"
    }]
  }
}
```

## Running the tests

To run the tests is very similar to other linting packages. Add a script to the `scripts` area in your `package.json`.

##### Linting scss files in the root of your project:

``` json
"test:styles": "stylelint '*.scss'"
```

##### Linting scss files are in another folder:

``` json
"test:styles": "stylelint '**/*.scss'"
```

## Rules are meant to be broken, right?
Sometimes there is code that should be ignored by the linter and that's totally cool as long as there is a good reason. There are two ways to do this and each way has a way to turn off only specific rules. Most of the time you wouldn't turn off all the rules for the file or the parts of the file you would turn off specific rules.

  1. Full file `stlyelint-disable`, not usually recommended by itself
  2. Parts of a file using `stlyelint-disable` and `stlyelint-enable`, also not usually recommended by itself
  3. Specific rule disabling, **highly recommended** if needed. **Rules are comma separated**

As an example of a full file disable of certain rules you would add this to the top of the file:

##### Full file `stylelint` disable with specific rule disabling:

``` scss
// stylelint-disable selector-no-qualifying-type, color-no-hex
```

Disabling parts of a file need both the disabling and enabling parts so as to not hinder the linting of the rest of the file. As an example disabling parts of a file, it would look like this:

##### Sample of parts of a file `stylelint` disable:

``` scss
// stylelint-disable selector-no-qualifying-type
select[multiple].form-control {
  height: auto;
  min-height: $input-height;
  overflow-y: scroll;
}
// stylelint-enable selector-no-qualifying-type
```
