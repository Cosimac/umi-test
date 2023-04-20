// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** queryConfigList POST /setting/friendDetailConfig/queryConfigList */
export async function queryConfigListUsingPOST(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/setting/friendDetailConfig/queryConfigList', {
    method: 'POST',
    ...(options || {}),
  });
}

/** saveOrUpdateConfig POST /setting/friendDetailConfig/saveOrUpdateConfig */
export async function saveOrUpdateConfigUsingPOST(
  body: API.huiyuanxiangqingqiyepeizhibiaoDTO[],
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/setting/friendDetailConfig/saveOrUpdateConfig', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
