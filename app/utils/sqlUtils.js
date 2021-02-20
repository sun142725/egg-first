async function fingCount(mysql, table, whereSql) {
    console.log('sql:', `select count(*) from ${table} WHERE ${whereSql}`)
    console.log(this)
    const count = await mysql.query(`select count(*) from ${table} WHERE ${whereSql}`)
    return count[0]['count(*)']
}

module.exports = {
    fingCount,

}