/*
 * @Describe:
 * @Date: 2023-02-23 18:37:07
 * @LastEditors: Cosima
 * @LastEditTime: 2023-04-20 16:32:51
 * @FilePath: \umi-test\.umirc.ts
 */
import { defineConfig } from 'umi';
import { join } from 'path';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/index' }],
  fastRefresh: {},
  // plugins: ['./plugin/plugin-pages/index.ts'],
  openAPI: {
    requestLibPath: "import { request } from 'umi'",
    // 或者使用在线的版本
    // schemaPath: 'https://gw.alipayobjects.com/os/antfincdn/M%24jrzTTYJN/oneapi.json',
    schemaPath: join(__dirname, 'oneapi.json'),
    mock: true,
  },
  mock: false,
});
