const { test } = require('node:test');
const assert = require('node:assert');
const usersService = require('../src/services/usersService');

test('creates and retrieves a user', async () => {
  const created = await usersService.create({ name: 'Alice', email: 'a@example.com' });
  assert.ok(created.id);
  const fetched = await usersService.getById(created.id);
  assert.deepStrictEqual(fetched, created);
});

test('rejects missing fields', async () => {
  await assert.rejects(() => usersService.create({}), /required/);
});
