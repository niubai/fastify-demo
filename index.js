// Require the framework and instantiate it
const fastify = require('fastify')();
fastify.register(require('./route/user'));
// Declare a route
fastify.get('/', async (req, res) => {
  res.send({ hello: 'world' });
});

// Run the server!
fastify.listen(3000, (err) => {
  if (err) {
    throw err;
  }
  console.log(`server lisening on ${fastify.server.address().port}`);
  fastify.log.info(`server lisening on ${fastify.server.address().port}`);
});
