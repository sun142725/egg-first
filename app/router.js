'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', app.jwt, controller.home.index);
  router.get('/get_alipay_auth', controller.alipay.getAuth);
  router.get('/alipay.html', controller.alipay.getTestView);


  
  router.post('/getuser', controller.user.getUser);
  router.post('/login', controller.user.login);

  router.post('/api/bill/list', controller.bill.getBillList);
  router.post('/api/bill/insert', controller.bill.insert);

};
