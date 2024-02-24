/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/api/v1/schema/addSchema', controller.schema.addSchema);
  router.get('/api/v1/schema/querySchema', controller.schema.querySchema);
  router.post('/api/v1/schema/addSchemaType', controller.schema.addSchemaType);
  router.get('/api/v1/schema/querySchemaType', controller.schema.querySchemaType);
  router.get('/api/v1/schema/querySchemasByCategory', controller.schema.querySchemasByCategory);
};
