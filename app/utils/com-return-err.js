const ERROR_CODE = require('../public/error-code')
/**
 * return7000 一般为 sql语句出错
 * @param {*} res 用于回应
 * @param {*} err 报错信息
 */
function return7000(){
    return {
        code: '700000',
        body: null,
        describe: ERROR_CODE['700000'],
    }
}
function returnSuccess(data, describe){
    return {
        code: 0,
        data: data || null,
        describe: describe || "success!",
    }
}
/**
 * 
 * @param {*} res 
 * @param {*} code 错误码
 */
function returnBody(code, describe){
    return {
        code: code,
        data: null,
        describe: describe || ERROR_CODE[code],
    }
}
function returnNull(data, key, rule = null){
        if(!rule.test(data[key])){
            return {
                code: '700002',
                body: null,
                describe: key + '不符合规则',
            }
        }
}
module.exports = {
    return7000,
    returnSuccess,
    returnBody,
    returnNull
}