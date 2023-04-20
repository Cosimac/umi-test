/*
 * @Describe:
 * @Date: 2023-02-27 17:50:00
 * @LastEditors: Cosima
 * @LastEditTime: 2023-04-18 17:52:40
 * @FilePath: \umi-test\plugin\plugin-get-json\index.js
 */

const { program } = require('commander');
const axios = require('axios').default;
const fs = require('fs');
const path = require('path');

program.option('--first')

program.parse();
const options = program.opts();
const args = program.args
const SESSION = program.args[0] || ''

const instance = axios.create({
  headers: { 'cookie': 'SESSION=' + SESSION }
});

const reqMethods = ['get', 'post', 'put', 'delete']

// baseURL: 'https://sandbox-sg-v6.vecrp.com/v2/api-docs',
instance.get('https://sandbox-sg-v6.vecrp.com/crmWebApi/v3/api-docs')
  // instance.get('https://gw.alipayobjects.com/os/antfincdn/M%24jrzTTYJN/oneapi.json')
  .then(function (response) {
    // console.log(__dirname, process.cwd(), '__dirname---1');
    for (let key in response.data.paths) {
      for (let k in response.data.paths[key]) {
        if (reqMethods.includes(k)) {
          if (response.data.paths[key][k].responses[200].content && response.data.paths[key][k].responses[200].content['*/*']) {
            response.data.paths[key][k].responses[200].content['application/json'] = response.data.paths[key][k].responses[200].content['*/*']
            delete response.data.paths[key][k].responses[200].content['*/*']
          } else {
            continue
          }
        }
      }
    }
    let schemas = response.data.components.schemas
    for (let key in schemas) {
      const properties = schemas[key].properties
      for (let k in properties) {
        if (properties[k].items && properties[k].items['$ref']) {
          const $ref = properties[k].items.$ref
          const refSchemas = $ref.split('/').splice(-1)[0]
          if (refSchemas == key) {
            console.log('refSchemas', refSchemas)
            properties[k].items = { "type": "object" }
          }
        } else {
          continue
        }
      }
    }

    const content = JSON.stringify(response.data)
    const mockFolder = path.join(process.cwd(), '/oneapi1.json')
    // 如果mock 文件不存在，创建一下
    // if (mockFolder && fs.existsSync(mockFolder)) {
    //   fs.rm(mockFolder, function (err) {
    //     console.log(err, 'err-12');
    //   })
    // }
    fs.writeFileSync(mockFolder, content)
  })
  .catch(function (error) {
    // 处理错误情况
    console.log(error, '获取swagger Json 失败');
  })