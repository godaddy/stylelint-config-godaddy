const assert = require('assert');
const { spawn } = require('child_process');
const path = require('path');

const stylelint = spawn('npx', ['stylelint', path.join(__dirname, 'invalid.scss')]);
const stdoutChunks = [];
stylelint.stdout.on('data', data => {
  stdoutChunks.push(data);
});
stylelint.on('close', code => {
  assert.strictEqual(code, 2, `Unexpected result code (expected 2, got ${code}).`);
  const stdout = stdoutChunks.join('');
  [
    'selector-class-pattern',
    'block-opening-brace-space-before',
    'color-hex-length',
    'color-no-hex',
    'shorthand-property-no-redundant-values',
    'length-zero-no-unit',
    'declaration-colon-space-after',
    'declaration-block-semicolon-newline-after',
    'property-case',
    'scss/double-slash-comment-whitespace-inside',
    'declaration-block-trailing-semicolon'
  ].forEach(brokenRule => {
    assert.ok(stdout.includes(brokenRule), `Did not see expected '${brokenRule}' failure in stylelint output.`);
  });
});
