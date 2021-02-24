'use strict';

const Controller = require('egg').Controller;
const fs = require('fs');
const path = require("path");

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.type = "text/html; charset=utf-8"
    ctx.body = await fs.readFileSync(path.resolve(__dirname, '../public/admin-web/index.html'))
  }

}

module.exports = HomeController;
