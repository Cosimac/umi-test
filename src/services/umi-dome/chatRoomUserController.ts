// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** list POST /chatRoomUser/list */
export async function listUsingPOST3(body: API.TableRequest, options?: { [key: string]: any }) {
  return request<API.TableResponseRecord>('/chatRoomUser/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** syncUser GET /chatRoomUser/syncUser */
export async function syncUserUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.syncUserUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/chatRoomUser/syncUser', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
