'use strict';
// app/controller/bill.js
const Controller = require('egg').Controller;

class HomeController extends Controller {
    /**
     * @api {POST} /api/bill/list 获取账单列表
     * @apiParam {string|number} pageNum 当前页
     * @apiParam {string|number} pageSize 分页大小
     * @apiParam {string} [title] 账单名称
     */
  async getBillList() {
    const { ctx } = this;
    console.log('查询sql', ctx.request.body)
    const query = ctx.request.body
    let obj = {
        pageNum: query.pageNum,
        pageSize: query.pageSize,
        where: {
       
        }
    }
    const result = await Promise.all([ctx.service.bill.findBillList(obj), ctx.service.bill.findBillCount(obj)]);
    ctx.body = {
        code: 0,
        data: {
            list: result[0],
            total: result[1]
        },
        message: ""
    }
  }
}

module.exports = HomeController;
