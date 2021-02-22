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

  // 账单
  router.post('/api/bill/list', controller.bill.getBillList);
  // router.post('/api/bill/info', controller.bill.info);
  router.post('/api/bill/insert', controller.bill.insert);
  router.post('/api/bill/update', controller.bill.update);
  router.post('/api/bill/delete', controller.bill.delete);
  router.post('/api/bill/getBillStatic', controller.bill.getBillStatic);
};
