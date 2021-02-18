'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', app.jwt, controller.home.index);
  router.get('/get_alipay_auth', controller.alipay.getAuth);
  router.get('/alipay.html', controller.alipay.getTestView);
  router.post('/api3/interactive/marketcenter/plugin/calendar/queryCalendarOfMonth', controller.calendar.queryCalendarOfMonth);
  router.post('/api3/interactive/marketcenter/plugin/calendar/queryLatestHoliday', controller.calendar.queryLatestHoliday);
  router.post('/api3/interactive/marketcenter/plugin/collection/queryCollection', controller.calendar.queryCollection);
  router.post('/api3/interactive/marketcenter/plugin/resource/getResourceList', controller.calendar.getResourceList);
  router.post('/api3/interactive/marketcenter/plugin/collection/editCollection', controller.calendar.editCollection);
  router.post('/fanqw/getInvitedDetail', controller.fanqw.getInvitedDetail);
  router.post('/fanqw/getJoinRecordS', controller.fanqw.getJoinRecordS);
  router.post('/fanqw/getTableDate', controller.fanqw.getTableDate);


  
  router.post('/getuser', controller.user.getUser);
  router.post('/login', controller.user.login);

  router.post('/api/bill/list', controller.bill.getBillList);

};
