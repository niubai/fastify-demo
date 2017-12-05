const mongoose = require('mongoose');

async function user(fastify, options) {
  const animalSchema = new mongoose.Schema({ name: String, type: String });
  const Animal = mongoose.model('Animal', animalSchema);

  // Declare a route
  fastify.get('/', async (req, res) => {
    res.send({ hello: 'world' });
  });

  fastify.get('/search/:id', async (request, reply) => {
    console.log(request.params.id);
    const data = await Animal.findOne({ name: request.params.id });
    return data;
  });

  const schemaBody = {
    schema: {
      body: {
        type: 'object',
        properties: {
          someKey: { type: 'string' },
          someOtherKey: { type: 'number' },
        },
      },
    },
  };
  // fetch('/userInfo', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({}),
  // });
  fastify.post('/schemaBody', schemaBody, async (request, reply) => ({ hello: 'world' }));

  const schemaResponse = {
    schema: {
      response: {
        200: {
          type: 'object',
          properties: {
            hello: { type: 'string' },
          },
        },
      },
    },
  };
  // fetch('/schemaResponse');
  fastify.get('/schemaResponse', schemaResponse, async (request, reply) => ({ hello: 'world', name: 'fastify' }));
}
module.exports = user;
