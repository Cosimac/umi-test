// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** pv,uv的数量根据时间和门店和类型来分页计算 POST /externalLog/logPageByType */
export async function logPageByTypeUsingPOST(
  body: API.ExternalLogByTypeQuery,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/externalLog/logPageByType', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** pv,uv的数量根据时间和门店计算 POST /externalLog/pvAndUv */
export async function pvAndUvUsingPOST(
  body: API.ExternalLogQuery,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/externalLog/pvAndUv', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
