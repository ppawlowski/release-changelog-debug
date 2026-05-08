const { Router } = require('express');
const pkg = require('../../package.json');

const router = Router();

router.get('/', (req, res) => {
  res.json({
    name: pkg.name,
    version: pkg.version,
    node: process.version,
  });
});

module.exports = router;
