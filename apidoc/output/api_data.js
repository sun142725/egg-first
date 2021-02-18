define({ "api": [
  {
    "type": "POST",
    "url": "/api/bill/list",
    "title": "获取账单列表",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string|number",
            "optional": false,
            "field": "pageNum",
            "description": "<p>当前页</p>"
          },
          {
            "group": "Parameter",
            "type": "string|number",
            "optional": false,
            "field": "pageSize",
            "description": "<p>分页大小</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "title",
            "description": "<p>账单名称</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/controller/bill.js",
    "group": "C:\\Users\\jihon\\Desktop\\own\\egg-first\\app\\controller\\bill.js",
    "groupTitle": "C:\\Users\\jihon\\Desktop\\own\\egg-first\\app\\controller\\bill.js",
    "name": "PostApiBillList"
  }
] });
