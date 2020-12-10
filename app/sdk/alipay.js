const fs = require('fs');
const path = require("path");
// TypeScript
const AlipaySdk = require('alipay-sdk').default;
// 普通公钥模式
const alipaySdk = new AlipaySdk({
  // 参考下方 SDK 配置
  appId: '2021001186630064',
  privateKey: fs.readFileSync(path.resolve(__dirname, '../public/private-key/alipay-mini.pem'), 'ascii'),
});
// // 证书模式
// const alipaySdk = new AlipaySdk({
//   // 参考下方 SDK 配置
//   appId: '2016123456789012',
//   privateKey: fs.readFileSync('./private-key.pem', 'ascii'),
//   alipayRootCertPath: path.join(__dirname,'../fixtures/alipayRootCert.crt'),
//   appCertPath: path.join(__dirname,'../fixtures/appCertPublicKey.crt'),
//   alipayPublicCertPath: path.join(__dirname,'../fixtures/alipayCertPublicKey_RSA2.crt'),
// });



async function getAuth(code, next) {
  try {
    const result = await alipaySdk.exec('alipay.system.oauth.token', {
        grantType: 'authorization_code',
        code: code
    });
    next(result);
  } catch (err) {
    next(err);
  }
}
module.exports = getAuth