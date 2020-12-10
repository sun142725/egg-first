'use strict';

const Controller = require('egg').Controller;
const getAuth = require('../sdk/alipay')
const fs = require('fs');
const path = require("path");

class AlipayController extends Controller {
  async getAuth() {
    const { ctx } = this;
    const { code } = ctx.query
    if(!code){
        ctx.body = {
            code: 200,
            data: '缺少授权code'
        }
        return
    }
    await getAuth(code, (data)=>{
        ctx.body = {
            code: 200,
            data: data
        }
    })
  }

  async getTestView() {
    const { ctx } = this;
    ctx.type = "text/html; charset=utf-8"
    ctx.body = await fs.readFileSync(path.resolve(__dirname, '../public/view/alipay.html'))
  }
}

module.exports = AlipayController;
