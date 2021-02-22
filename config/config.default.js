/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {
    security  : {
      csrf: {
        enable: false,
        ignoreJSON: true
      },
      domainWhiteList: [ 'http://master.saas.weimobqa.com' ], // 白名单
    },
    cors: {
      origin: 'http://localhost:8001', // 如果不写origin则会按照白名单中的域名允许跨域， * 代表允许所有的域名进行跨域请求
      allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
      credentials: true
    },
    mysql: {
      client: {
        host: '47.93.206.48',
        port: '3306',
        user: 'root',
        password: '18334771358s',
        database: 'hs_tororo'
      },
      app: true,
      agent: false
    },
    jwt:{
      secret: 'tororo'
    },
    auth: {
      jwtExclude: [],
      errorCode: -2,
      output: 'apidoc/output',
      template: 'apidoc/template'
    }
  };


  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1605775383742_4061';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
