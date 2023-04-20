// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 导出 POST /redpack/record/receiver/export */
export async function listUsingPOST12(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listUsingPOST12Params,
  options?: { [key: string]: any },
) {
  return request<any>('/redpack/record/receiver/export', {
    method: 'POST',
    params: {
      ...params,
      map: undefined,
      ...params['map'],
    },
    ...(options || {}),
  });
}

/** 红包领取记录列表 POST /redpack/record/receiver/list */
export async function listUsingPOST11(
  body: API.SearchRequestVOsousuohongbaolingqujilu,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseRecord>('/redpack/record/receiver/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
