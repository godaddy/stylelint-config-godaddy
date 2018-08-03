"use strict"

module.exports = {
  "plugins": [
    "stylelint-scss"
  ],
  "rules": {
    // Error reporting rules
    "block-no-empty": true,
    "color-hex-case": "lower",
    "color-hex-length": "short",
    "color-no-invalid-hex": true,
    "declaration-block-no-duplicate-properties": [true, {
      "ignore": [
        "consecutive-duplicates"
      ]
    }],
    "declaration-block-no-redundant-longhand-properties": [true, {
      "ignoreShorthands": [
        "transition",
        "animation",
        "flex"
      ]
    }],
    "declaration-block-no-shorthand-property-overrides": true,
    "declaration-block-semicolon-newline-after": "always",
    "declaration-block-trailing-semicolon": "always",
    "function-calc-no-unspaced-operator": true,
    "indentation": [2, {
      "indentClosingBrace": false
    }],
    "length-zero-no-unit": true,
    "property-case": "lower",
    "property-no-unknown": true,
    "selector-class-pattern": "^([a-z][a-z0-9]*)(-[a-z0-9]+)*$",
    "selector-id-pattern":  "^([a-z][a-z0-9]*)(-[a-z0-9]+)*$",
    "string-no-newline": true,
    "selector-type-no-unknown": true,
    "unit-no-unknown": true,
    "value-no-vendor-prefix": [true, {
      "message": "This is taken care of by Sass, no need for vendor prefixes"
    }],
    "selector-pseudo-class-case": "lower",
    "selector-type-case": "lower",
    "unit-case": "lower",
    "value-keyword-case": "lower",

    // Warning reporting rules
    "block-opening-brace-space-before": ["always", {
      "severity": "warning"
    }],
    "color-no-hex": [true, {
      "severity": "warning"
    }],
    "comment-no-empty": [true, {
      "severity": "warning"
    }],
    "declaration-colon-space-after": ["always", {
      "severity": "warning"
    }],
    "declaration-colon-space-before": ["never", {
      "severity": "warning"
    }],
    "max-nesting-depth": [3, {
      "severity": "warning"
    }],
    "no-duplicate-at-import-rules": [true, {
      "severity": "warning"
    }],
    "no-eol-whitespace": [true, {
      "severity": "warning"
    }],
    "no-extra-semicolons": [true, {
      "severity": "warning"
    }],
    "number-leading-zero": ["never", {
      "severity": "warning"
    }],
    "number-no-trailing-zeros": [true, {
      "severity": "warning"
    }],
    "selector-combinator-space-after": ["always", {
      "severity": "warning"
    }],
    "selector-combinator-space-before": ["always", {
      "severity": "warning"
    }],
    "selector-list-comma-newline-after": ["always", {
      "severity": "warning"
    }],
    "selector-no-qualifying-type": [true, {
      "severity": "warning"
    }],
    "shorthand-property-no-redundant-values": [true, {
      "severity": "warning"
    }],

    // Plugin specific rules
    "scss/dollar-variable-colon-space-after": ["always", {
      "severity": "warning"
    }],
    "scss/double-slash-comment-whitespace-inside":  ["always", {
      "severity": "warning"
    }]
  }
};
