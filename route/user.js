async function user(fastify, options) {
  fastify.get('/userInfo', async (request, reply) => ({ hello: 'world' }));
}
module.exports = user;
