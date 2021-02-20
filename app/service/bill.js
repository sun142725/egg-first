const Service = require('egg').Service;
const { fingCount, pagingSql, simpleQuerySql } = require('../utils/sqlUtils')

class UserService extends Service{
    // 账单搜索条件组织
    billCondition(paramWhere){
        let whereList = []
        paramWhere.hasOwnProperty('title') && whereList.push(`title LIKE "%${paramWhere.title}%"`)
        paramWhere.hasOwnProperty('category') && whereList.push(`category="${paramWhere.category}"`)
        paramWhere.hasOwnProperty('type') && whereList.push(`type="${paramWhere.type}"`)
        paramWhere.hasOwnProperty('startTime') && paramWhere.hasOwnProperty('endTime') && whereList.push(`gmt_created between ${paramWhere.startTime} AND ${paramWhere.endTime}`)
        return whereList.join(" AND ")
    }
    async insertBill(billinfo){
        const result = await this.app.mysql.insert('bill_info', billinfo);
        const insertSuccess = result.affectedRows === 1;
        return insertSuccess
    }
    async findBillList(param) {
        let whereSql = this.billCondition(param.where)
        let sql = `${simpleQuerySql('*', 'bill_info')} WHERE ${whereSql} ORDER BY gmt_created DESC ${pagingSql(param.pageNum, param.pageSize)}`
        console.log("sql:", sql)
        const list = await this.app.mysql.query(sql);
        return list
    }
    async findBillCount(param) {
        let whereSql = this.billCondition(param.where)
        const count = await fingCount(this.app.mysql, 'bill_info', whereSql)
        return count
    }
    async updateBillInfo(param) {
        const result = await this.app.mysql.update('bill_info',{
            ...param
        });
        return result.affectedRows === 1
    }
    async delBillInfo(param) {
        const result = await this.app.mysql.delete('bill_info',{
            id: param.id
        });
        return result.affectedRows === 1
    }
}
module.exports = UserService;