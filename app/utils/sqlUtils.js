async function fingCount(mysql, table, whereSql) {
    console.log('sql:', `select count(*) from ${table} WHERE ${whereSql}`)
    const count = await mysql.query(`select count(*) from ${table} WHERE ${whereSql}`)
    return count[0]['count(*)']
}
function pagingSql(pageNum=1, pageSize=15) {
    return `LIMIT ${pageSize} offset ${pageNum * pageSize - pageSize}`
}
function simpleQuerySql(condition, table) {
    return `SELECT ${condition} FROM ${table}`
}

module.exports = {
    fingCount,
    pagingSql,
    simpleQuerySql
}