// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** index GET /debugger/service */
export async function indexUsingGET(options?: { [key: string]: any }) {
  return request<API.ServiceDTO[]>('/debugger/service', {
    method: 'GET',
    ...(options || {}),
  });
}

/** call POST /debugger/service/call/${param0}/${param1} */
export async function callUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.callUsingPOSTParams,
  body: string,
  options?: { [key: string]: any },
) {
  const { beanName: param0, methodName: param1, ...queryParams } = params;
  return request<Record<string, any>>(`/debugger/service/call/${param0}/${param1}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}
