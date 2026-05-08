const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
  res.json({ metrics: 'unavailable', timestamp: new Date() });
});

module.exports = router;
