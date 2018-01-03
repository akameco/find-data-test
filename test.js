// @flow
const sel = require('.')

test('sel()', () => {
  expect(sel('unicorn')).toBe('[data-test="unicorn"]')
})
