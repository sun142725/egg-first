// app/middleware/customHistory.js
const ck2 = require('koa-connect')
const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require("path");
module.exports = () => {
    return async function(ctx, next) {
        if(!~ctx.url.indexOf('/api/ant')){
            await next()
        } else {
            try{
                const Proxy = ck2(createProxyMiddleware('/api/ant', {
                    target: 'http://proapi.azurewebsites.net',
                    pathRewrite: {'/api/ant': '/api'},
                    changeOrigin: true,
                    secure: false,
                    body:ctx.request.body
                }))
                await Proxy(ctx, next);
              } catch(err){
                  await next()
              }
        }
        
      
    };
  };