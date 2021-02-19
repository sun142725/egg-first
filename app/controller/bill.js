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
    /**
     * @api {POST} /api/bill/insert 添加新账单
     * @apiParam {string} title 账单名称
     * @apiParam {string} category 账单类别
     * @apiParam {string|number} amount 账单金额
     * @apiParam {string} [mark] 账单备注
     */
    async insert(){
        const { ctx } = this;
        const query = ctx.request.body
        const obj = {
            title: query.title,
            category: query.category,
            amount: query.amount,
            mark: query.mark
        }
        const result = ctx.service.bill.insertBill(obj)
        ctx.body = result ? {
            code: 0,
            data: null,
            message: "添加成功"
        } : {
            code: 500,
            message: "异常信息"
        }
    }
    /**
     * @api {POST} /api/bill/update 修改账单信息
     * @apiParam {string|number} title 账单名称
     * @apiParam {number} id 账单id
     * @apiParam {string} [title] 账单名称
     */
    async update(){

    }
}

module.exports = HomeController;
