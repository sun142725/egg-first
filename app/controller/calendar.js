'use strict';

const Controller = require('egg').Controller;

class CalendarController extends Controller {
  async queryCalendarOfMonth() {
    const { ctx } = this;
    const { code } = ctx.query
    ctx.body = {
        errcode: 0,
        "errmsg":"success",
        data: [
          {holidayDate: "2021-01-21",holidayTitle: "平安夜", content: "1"},
          {holidayDate: "2021-01-21",holidayTitle: "聖誕", content: "2"},
          {holidayDate: "2021-01-21",holidayTitle: "春節", content: "3"},
          {holidayDate: "2021-01-22",holidayTitle: "1", content: "4"},
          {holidayDate: "2021-01-23",holidayTitle: "發溫熱", content: "5"},
          {holidayDate: "2021-01-26",holidayTitle: "平安夜", content: "6"},
        ]
    }
  }

  queryLatestHoliday(){
    const { ctx } = this
    ctx.body = {
      "errcode":0,
      "errmsg":"success",
      "data": {
      "today":"2020-12-4",
      "todayOfWeekDay":"周五",
      "latestData":[
          {
            "holidayTitle":"志愿者日",
            "holidayDate":"2020-12-5",
            "holidayWeekDay":"周六",
            "countDownDay":0
          },
          {
            "holidayTitle":"大雪",
            "holidayDate":"2020-12-7",
            "holidayWeekDay":"周一",
            "countDownDay":3
          },
          {
            "holidayTitle":"PS课程",
            "holidayDate":"2020-12-8",
            "holidayWeekDay":"周二",
            "countDownDay":4
          }
        ]
      }
    }
  }

  queryCollection(){
    const { ctx } = this
    ctx.body = {
      "errcode":0,
      "errmsg":"success",
      "data":[
          {
                      "id":249,
                      "serviceId":null,
                      "title":"优惠券",
                      "description":"券动客心，营销必备",
                      "imgurl":"https://image-c.weimobwmc.com/saas-wxbiz/33d042ada5804bb4b24372009c27eda4.png",
                      "businessImgurl":null,
                      "introduceImgurl":null,
                      "linkurl":"https://master.weimob.com/app/retail2/{pid}/{storeId}/marketing/coupon/list",
                      "authCode":"ec#app.marketing.list",
                      "serviceurl":null,
                      "introduce":null,
                      "smallProgram":1,
                      "whitePids":null,
                      "detail":"",
                      "isServiceAvailable":1,
                      "upgradePackurl":null,
                      "tagId":0,
                      "tagName":null,
                      "materialType":0,
                      "channelId":3,
                      "channelName":"支持小程序和h5",
                      "visible":1,
                      "serviceStatus":null,
                      "moduleId":53,
                      "pluginType":0,
                      "materialCode":null,
                      "buyUrl":null,
                      "buyNote":null
  },
  {
                      "id":250,
                      "serviceId":null,
                      "title":"优惠券2",
                      "description":"券动客心，营销必备",
                      "imgurl":"https://image-c.weimobwmc.com/saas-wxbiz/33d042ada5804bb4b24372009c27eda4.png",
                      "businessImgurl":null,
                      "introduceImgurl":null,
                      "linkurl":"https://master.weimob.com/app/retail2/{pid}/{storeId}/marketing/coupon/list",
                      "authCode":"ec#app.marketing.list",
                      "serviceurl":null,
                      "introduce":null,
                      "smallProgram":1,
                      "whitePids":null,
                      "detail":"",
                      "isServiceAvailable":1,
                      "upgradePackurl":null,
                      "tagId":0,
                      "tagName":null,
                      "materialType":0,
                      "channelId":3,
                      "channelName":"支持小程序和h5",
                      "visible":1,
                      "serviceStatus":null,
                      "moduleId":53,
                      "pluginType":0,
                      "materialCode":null,
                      "buyUrl":null,
                      "buyNote":null
  }
  ]
  }
  }

  getResourceList(){
    const { ctx } = this
    ctx.body = {
      "errcode":0,
      "errmsg":"success",
      "data":[
          {
              "id":53,
              "name":"店铺促销",
              "description":"1",
              "isComingSoon":0,
              "visible":1,
              "materialList":[
                {
                  "id":249,
                  "serviceId":null,
                  "title":"优惠券",
                  "description":"券动客心，营销必备",
                  "imgurl":"https://image-c.weimobwmc.com/saas-wxbiz/33d042ada5804bb4b24372009c27eda4.png",
                  "businessImgurl":null,
                  "introduceImgurl":null,
                  "linkurl":"https://master.weimob.com/app/retail2/{pid}/{storeId}/marketing/coupon/list",
                  "authCode":"ec#app.marketing.list",
                  "serviceurl":null,
                  "introduce":null,
                  "smallProgram":1,
                  "whitePids":null,
                  "detail":"",
                  "isServiceAvailable":1,
                  "upgradePackurl":null,
                  "tagId":0,
                  "tagName":null,
                  "materialType":0,
                  "channelId":3,
                  "channelName":"支持小程序和h5",
                  "visible":1,
                  "serviceStatus":null,
                  "moduleId":53,
                  "pluginType":0,
                  "materialCode":null,
                  "buyUrl":null,
                  "buyNote":null
          },
          {
                  "id":250,
                  "serviceId":null,
                  "title":"优惠券2",
                  "description":"券动客心，营销必备",
                  "imgurl":"https://image-c.weimobwmc.com/saas-wxbiz/33d042ada5804bb4b24372009c27eda4.png",
                  "businessImgurl":null,
                  "introduceImgurl":null,
                  "linkurl":"https://master.weimob.com/app/retail2/{pid}/{storeId}/marketing/coupon/list",
                  "authCode":"ec#app.marketing.list",
                  "serviceurl":null,
                  "introduce":null,
                  "smallProgram":1,
                  "whitePids":null,
                  "detail":"",
                  "isServiceAvailable":1,
                  "upgradePackurl":null,
                  "tagId":0,
                  "tagName":null,
                  "materialType":0,
                  "channelId":3,
                  "channelName":"支持小程序和h5",
                  "visible":1,
                  "serviceStatus":null,
                  "moduleId":53,
                  "pluginType":0,
                  "materialCode":null,
                  "buyUrl":null,
                  "buyNote":null
          },
                  {
                      "id":252,
                      "serviceId":null,
                      "title":"优惠券3",
                      "description":"券动客心，营销必备",
                      "imgurl":"https://image-c.weimobwmc.com/saas-wxbiz/33d042ada5804bb4b24372009c27eda4.png",
                      "businessImgurl":null,
                      "introduceImgurl":null,
                      "linkurl":"https://master.weimob.com/app/retail2/{pid}/{storeId}/marketing/coupon/list",
                      "authCode":"ec#app.marketing.list",
                      "serviceurl":null,
                      "introduce":null,
                      "smallProgram":1,
                      "whitePids":null,
                      "detail":"",
                      "isServiceAvailable":1,
                      "upgradePackurl":null,
                      "tagId":0,
                      "tagName":null,
                      "materialType":0,
                      "channelId":3,
                      "channelName":"支持小程序和h5",
                      "visible":1,
                      "serviceStatus":null,
                      "moduleId":53,
                      "pluginType":0,
                      "materialCode":null,
                      "buyUrl":null,
                      "buyNote":null
                  },{
                    "id":251,
                    "serviceId":null,
                    "title":"优惠券2",
                    "description":"券动客心，营销必备",
                    "imgurl":"https://image-c.weimobwmc.com/saas-wxbiz/33d042ada5804bb4b24372009c27eda4.png",
                    "businessImgurl":null,
                    "introduceImgurl":null,
                    "linkurl":"https://master.weimob.com/app/retail2/{pid}/{storeId}/marketing/coupon/list",
                    "authCode":"ec#app.marketing.list",
                    "serviceurl":null,
                    "introduce":null,
                    "smallProgram":1,
                    "whitePids":null,
                    "detail":"",
                    "isServiceAvailable":1,
                    "upgradePackurl":null,
                    "tagId":0,
                    "tagName":null,
                    "materialType":0,
                    "channelId":3,
                    "channelName":"支持小程序和h5",
                    "visible":1,
                    "serviceStatus":null,
                    "moduleId":53,
                    "pluginType":0,
                    "materialCode":null,
                    "buyUrl":null,
                    "buyNote":null
                }]
  },
  {
    "id":54,
    "name":"店铺大促销",
    "description":"1",
    "isComingSoon":0,
    "visible":1,
    "materialList":[
      {
        "id":260,
        "serviceId":null,
        "title":"薅羊毛1",
        "description":"券动客心，营销必备",
        "imgurl":"https://image-c.weimobwmc.com/saas-wxbiz/33d042ada5804bb4b24372009c27eda4.png",
        "businessImgurl":null,
        "introduceImgurl":null,
        "linkurl":"https://master.weimob.com/app/retail2/{pid}/{storeId}/marketing/coupon/list",
        "authCode":"ec#app.marketing.list",
        "serviceurl":null,
        "introduce":null,
        "smallProgram":1,
        "whitePids":null,
        "detail":"",
        "isServiceAvailable":1,
        "upgradePackurl":null,
        "tagId":0,
        "tagName":null,
        "materialType":0,
        "channelId":3,
        "channelName":"支持小程序和h5",
        "visible":1,
        "serviceStatus":null,
        "moduleId":53,
        "pluginType":0,
        "materialCode":null,
        "buyUrl":null,
        "buyNote":null
},
{
        "id":261,
        "serviceId":null,
        "title":"优惠券2",
        "description":"券动客心，营销必备",
        "imgurl":"https://image-c.weimobwmc.com/saas-wxbiz/33d042ada5804bb4b24372009c27eda4.png",
        "businessImgurl":null,
        "introduceImgurl":null,
        "linkurl":"https://master.weimob.com/app/retail2/{pid}/{storeId}/marketing/coupon/list",
        "authCode":"ec#app.marketing.list",
        "serviceurl":null,
        "introduce":null,
        "smallProgram":1,
        "whitePids":null,
        "detail":"",
        "isServiceAvailable":1,
        "upgradePackurl":null,
        "tagId":0,
        "tagName":null,
        "materialType":0,
        "channelId":3,
        "channelName":"支持小程序和h5",
        "visible":1,
        "serviceStatus":null,
        "moduleId":53,
        "pluginType":0,
        "materialCode":null,
        "buyUrl":null,
        "buyNote":null
},
        {
            "id":262,
            "serviceId":null,
            "title":"优惠券3",
            "description":"券动客心，营销必备",
            "imgurl":"https://image-c.weimobwmc.com/saas-wxbiz/33d042ada5804bb4b24372009c27eda4.png",
            "businessImgurl":null,
            "introduceImgurl":null,
            "linkurl":"https://master.weimob.com/app/retail2/{pid}/{storeId}/marketing/coupon/list",
            "authCode":"ec#app.marketing.list",
            "serviceurl":null,
            "introduce":null,
            "smallProgram":1,
            "whitePids":null,
            "detail":"",
            "isServiceAvailable":1,
            "upgradePackurl":null,
            "tagId":0,
            "tagName":null,
            "materialType":0,
            "channelId":3,
            "channelName":"支持小程序和h5",
            "visible":1,
            "serviceStatus":null,
            "moduleId":53,
            "pluginType":0,
            "materialCode":null,
            "buyUrl":null,
            "buyNote":null
        },{
          "id":264,
          "serviceId":null,
          "title":"优惠券2",
          "description":"券动客心，营销必备",
          "imgurl":"https://image-c.weimobwmc.com/saas-wxbiz/33d042ada5804bb4b24372009c27eda4.png",
          "businessImgurl":null,
          "introduceImgurl":null,
          "linkurl":"https://master.weimob.com/app/retail2/{pid}/{storeId}/marketing/coupon/list",
          "authCode":"ec#app.marketing.list",
          "serviceurl":null,
          "introduce":null,
          "smallProgram":1,
          "whitePids":null,
          "detail":"",
          "isServiceAvailable":1,
          "upgradePackurl":null,
          "tagId":0,
          "tagName":null,
          "materialType":0,
          "channelId":3,
          "channelName":"支持小程序和h5",
          "visible":1,
          "serviceStatus":null,
          "moduleId":53,
          "pluginType":0,
          "materialCode":null,
          "buyUrl":null,
          "buyNote":null
      }]
}]
  }
  }

  editCollection(){
    const { ctx } = this
    ctx.body = {
      "errcode": 0,
      "errmsg":"success",
      data: true
    }
  }

  
}

module.exports = CalendarController;