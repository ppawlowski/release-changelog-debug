const { createApp } = require('./app');
const { host, port } = require('./config');

const app = createApp();

app.listen(port, host, () => {
  console.log(`Server listening on http://${host}:${port}`);
  console.log(`Environment: ${process.env.NODE_ENV}`);
});
