const users = new Map();
let nextId = 1;

async function list() {
  return Array.from(users.values());
}

async function getById(id) {
  return users.get(String(id)) || null;
}

async function create({ name, email }) {
  if (!name || !email) {
    const err = new Error('name and email are required');
    err.status = 400;
    throw err;
  }
  const id = String(nextId++);
  const user = { id, name, email };
  users.set(id, user);
  return user;
}

module.exports = { list, getById, create };
