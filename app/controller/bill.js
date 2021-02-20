'use strict';
// app/controller/bill.js
const Controller = require('egg').Controller;
const returnBody = require('../utils/com-return-err').returnBody

class HomeController extends Controller {
    /**
     * @api {POST} /api/bill/list 获取账单列表
     * @apiParam {string|number} pageNum 当前页
     * @apiParam {string|number} pageSize 分页大小
     * @apiParam {string} [title] 账单名称
     * @apiParam {string|number} [type] 账单类型
     * @apiParam {string} [category] 账单种类
     */
    async getBillList() {
        const { ctx } = this;
        console.log('查询sql', ctx.request.body)
        const query = ctx.request.body
        let obj = {
            pageNum: query.pageNum || 1,
            pageSize: query.pageSize || 15,
            where: {}
        }
        query.hasOwnProperty('title') && (obj.where['title'] = query.title)
        query.hasOwnProperty('category') && (obj.where['category'] = query.category)
        query.hasOwnProperty('type') && (obj.where['type'] = query.type)
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
        const result = await ctx.service.bill.insertBill(obj)
        ctx.body = result ? returnBody(0, "添加成功") : returnBody(200001)
    }
    /**
     * @api {POST} /api/bill/update 修改账单信息
     * @apiParam {string|number} title 账单名称
     * @apiParam {number} id 账单id
     * @apiParam {string} [title] 账单名称
     */
    async update(){
        const { ctx } = this;
        const query = ctx.request.body
        const obj = {
            id: query.id,
            title: query.title,
            category: query.category,
            amount: query.amount,
            mark: query.mark
        }
        const result = await ctx.service.bill.updateBillInfo(obj)
        ctx.body = result ? returnBody(0, '更新成功') : returnBody(500, '更新失败')
    }
    /**
     * @api {POST} /api/bill/delete 修改账单信息
     * @apiParam {number} id 账单id
     */
    async delete(){
        const { ctx } = this;
        const query = ctx.request.body
        const result = await ctx.service.bill.delBillInfo({id: query.id})
        ctx.body = result ? returnBody(0, '删除成功') : returnBody(200002)
    }
    /**
     * @api {POST} /api/bill/info 修改账单信息
     * @apiParam {number} id 账单id
     */
    async info(){

    }
}

module.exports = HomeController;
