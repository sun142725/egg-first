'use strict';

const Controller = require('egg').Controller;
var Mock = require('mockjs')

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
}

module.exports = HomeController;
