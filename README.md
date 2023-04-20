<!--
 * @Describe: 
 * @Date: 2023-02-23 18:37:07
 * @LastEditors: Cosima
 * @LastEditTime: 2023-04-07 13:53:26
 * @FilePath: \umi-test\README.md
-->
# umi project

## Getting Started

Install dependencies,

```bash
$ yarn
```

Start the dev server,

```bash
$ yarn start
```

```javaScript
// step1: 获取swagger Json数据 (MTM2Nzc5MWYtZTMxNC00ZDA2LWIxYTAtMDBiNTVmM2IxNGQ5: 接口鉴权Session) 
$ node plugin/plugin-get-json/index.js N2I5Nzg2NGItMjdjMS00OTY0LTljZGUtMDY3MTM5ZDZmMzRk
```


```javaScript
// step2: 生成serives/mock文件
$ npm run openapi
```

## TODO
### 自动生成services √
### 自动生成mock文件 swagger2 返回数据必须包含 ${
  "content": {
    "application/json": {
      "schema": { "$ref": "#/definitions/CommonResult" }
    }
  }
} ×
### mock.js自定义规则补充 ×

### umi mock开关控制 开启式即使有接口能通也依然会走mock接口
