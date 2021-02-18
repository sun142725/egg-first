const Service = require('egg').Service;


class UserService extends Service{
    async insertUser(user){
        const result = await this.app.mysql.insert('user', { mobile: user.mobile });
        const insertSuccess = result.affectedRows === 1;
        return insertSuccess
    }
    async findUser(param) {
        const userList = await this.app.mysql.select('user',{
            where: { ...param},
        });
        return userList
    }
}
module.exports = UserService;