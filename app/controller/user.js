'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async getUser() {
    const { ctx } = this;
    console.log('查询sql', ctx.request.body)
    const user = await ctx.service.user.findUser(ctx.request.body);
    ctx.body = user
  }
  async login(){
    const { ctx, app } = this;
    const userList = await ctx.service.user.findUser(ctx.request.body);
    if(userList.length===1){
      const token = app.jwt.sign({
        userID: userList[0].mobile,	//需要存储的Token数据
          }, app.config.jwt.secret,{
            expiresIn: '7200s', //设置过期时间
      });
      ctx.body = {token}
    } else {
      ctx.body = {
        code: '999',
        msg: '登录失败'
      }
    }
  }
}

module.exports = HomeController;
