'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/get_alipay_auth', controller.alipay.getAuth);
  router.get('/alipay.html', controller.alipay.getTestView);
};
