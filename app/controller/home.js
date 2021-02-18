'use strict';

const Controller = require('egg').Controller;
var Mock = require('mockjs')

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  async testList() {
    const { ctx } = this;
    ctx.body = Mock.mock({
      "errcode":0,
      "data": {
        "totalCount": 100,
        "results|10": [{
          "id|+1": 1,
          "name": "@ctitle(2,3)",
          "goodsClass": "@datetime()",
          "goodsName": "@ctitle(10)",
          "goodsAddress": "@county(true)",
          "goodsImg": "@Image('100x100','@color','小甜甜')",
          "goodsSale|30-500": 30,
          "status|1-3": 1
        }]
      } 
    })
  }
}

module.exports = HomeController;
