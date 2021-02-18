const Service = require('egg').Service;


class UserService extends Service{
    async insertBill(billinfo){
        const result = await this.app.mysql.insert('bill_info', billinfo);
        const insertSuccess = result.affectedRows === 1;
        return insertSuccess
    }
    async findBillList(param) {
        const userList = await this.app.mysql.select('bill_info',{
            where: { ...param.where },
            orders: [['gmt_created','desc']],
            limit: param.pageSize,
            offset: param.pageNum * param.pageSize - param.pageSize
        });
        return userList
    }
    async findBillCount(param) {
        const count = await this.app.mysql.query('select count(*) from bill_info',{
            where: { ...param.where }
        });
        return count[0]['count(*)']
    }
}
module.exports = UserService;