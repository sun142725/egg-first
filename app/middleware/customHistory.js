// app/middleware/customHistory.js
const fs = require('fs');
const path = require("path");
module.exports = () => {
    return async function customHistory(ctx, next) {
      await next();
      if (ctx.status === 404 && !ctx.body) {
        if (ctx.acceptJSON) {
          ctx.body = { error: 'Not Found' };
        } else {
          ctx.type = "text/html; charset=utf-8"
          ctx.body = await fs.readFileSync(path.resolve(__dirname, '../public/admin-web/index.html'))
        }
      }
    };
  };