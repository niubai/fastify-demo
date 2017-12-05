// Require the framework and instantiate it
const fastify = require('fastify')({
  logger: true,
});

fastify.register(require('fastify-mongoose'), {
  uri: 'mongodb://127.0.0.1/test',
}, (err) => {
  if (err) throw err;
  console.log('mongodb open');
});

fastify.register(require('./route/user'));

fastify.ready((err) => {
  if (err) throw err;
  console.log('plugins are loaded');
  for (const route of fastify) {
    console.log(route);
    /* will output:
    {
      '/route': {
        get: {
          method: String,
          url: String,
          schema: Object,
          handler: Function,
          Request: Function,
          Reply: Function
        }
      }
    }
    */
  }
});

// Run the server!
fastify.server.listen(3000, (err) => {
  if (err) {
    throw err;
  }
  console.log(`server lisening on ${fastify.server.address().port}`);
  fastify.log.info(`server lisening on ${fastify.server.address().port}`);
});
