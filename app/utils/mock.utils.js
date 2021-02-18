function getRandom(min, max){
    return Math.floor(Math.random()*(max-min)+min)
}
function createData(obj, total){
    return Array.from({ length: 10 }).map((v, i)=>{
      return eachObj(obj, i)
    })
  }
  function eachObj(obj, id){
    var returnObj = {}
    for(let key in obj){
      returnObj[key] = createSingleData(obj[key], id)
    }
    console.log(returnObj, id)
    return returnObj
  }
  function createSingleData(item, index){
    if(item.type === 'number'){
      return Number('' + item.render()+index)
    } else if(item.type === 'string'){
      return '测试数据'
    } else if(item.type === 'array'){
      return []
    } else if(item.type === 'object'){
      return {}
    }
  }

module.exports = {
    getRandom,
    createData
}