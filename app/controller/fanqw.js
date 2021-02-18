'use strict';

const Controller = require('egg').Controller;
var Mock = require('mockjs')

class FanqwController extends Controller {
  async getInvitedDetail() {
    const { ctx } = this;
    ctx.body = Mock.mock({
      "errcode":0,
      "data": {
        "newGuest|100-9999": 100,
        "newAddGuest|100-9999": 100,
        "totalCount": 300,
        "detaiList|10": [{
          "id|+1": 1,
          "nickName": "@ctitle(2,3)",
          "invitedStatus": 2,
          "isLoss|1-2": 1,
          "joinTime": "@datetime()"
        }]
      } 
    })
  }
  async getJoinRecordS() {
    const { ctx } = this;
    ctx.body = Mock.mock({
      "errcode":0,
      "data": {
        "totalCount": 500,
        "results|10": [{
          "id|+1": 1,
          "userId|+1": 100,
          "joinTime": "@datetime()",
          "nickName": "@ctitle(2,3)",
          "employee": "@ctitle(2,3)",
          "inviteNum|10-100": 10,
          "hasInvitedNum|10-100": 10,
          "taskFinishTime": "@datetime()",
          "taskStatus|2-4": 2
        }]
      } 
    })
  }
  async getTableDate() {
    const { ctx } = this;
    ctx.body = Mock.mock({
      "errcode":0,
      "data": {
        "guestTotal|100-9999": 100,
        "newGuestTotal|100-9999": 100,
        "addGuestTotal|100-9999": 100,
        "dailyNewGuest|100-9999": 100,
        "dailyNewAddTotal|100-9999": 100,
      } 
    })
  }
}

module.exports = FanqwController;
