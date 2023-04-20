// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** appletAuth GET /guide/appletcallback/appletAuth/${param0} */
export async function appletAuthUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.appletAuthUsingGETParams,
  options?: { [key: string]: any },
) {
  const { type: param0, ...queryParams } = params;
  return request<any>(`/guide/appletcallback/appletAuth/${param0}`, {
    method: 'GET',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** appletAuth PUT /guide/appletcallback/appletAuth/${param0} */
export async function appletAuthUsingPUT(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.appletAuthUsingPUTParams,
  options?: { [key: string]: any },
) {
  const { type: param0, ...queryParams } = params;
  return request<any>(`/guide/appletcallback/appletAuth/${param0}`, {
    method: 'PUT',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** appletAuth POST /guide/appletcallback/appletAuth/${param0} */
export async function appletAuthUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.appletAuthUsingPOSTParams,
  options?: { [key: string]: any },
) {
  const { type: param0, ...queryParams } = params;
  return request<any>(`/guide/appletcallback/appletAuth/${param0}`, {
    method: 'POST',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** appletAuth DELETE /guide/appletcallback/appletAuth/${param0} */
export async function appletAuthUsingDELETE(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.appletAuthUsingDELETEParams,
  options?: { [key: string]: any },
) {
  const { type: param0, ...queryParams } = params;
  return request<any>(`/guide/appletcallback/appletAuth/${param0}`, {
    method: 'DELETE',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** appletAuth PATCH /guide/appletcallback/appletAuth/${param0} */
export async function appletAuthUsingPATCH(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.appletAuthUsingPATCHParams,
  options?: { [key: string]: any },
) {
  const { type: param0, ...queryParams } = params;
  return request<any>(`/guide/appletcallback/appletAuth/${param0}`, {
    method: 'PATCH',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** getAuthUrl GET /guide/appletcallback/getAuthUrl */
export async function getAuthUrlUsingGET(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/appletcallback/getAuthUrl', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getAuthUrl PUT /guide/appletcallback/getAuthUrl */
export async function getAuthUrlUsingPUT(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/appletcallback/getAuthUrl', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getAuthUrl POST /guide/appletcallback/getAuthUrl */
export async function getAuthUrlUsingPOST(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/appletcallback/getAuthUrl', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getAuthUrl DELETE /guide/appletcallback/getAuthUrl */
export async function getAuthUrlUsingDELETE(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/appletcallback/getAuthUrl', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getAuthUrl PATCH /guide/appletcallback/getAuthUrl */
export async function getAuthUrlUsingPATCH(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/appletcallback/getAuthUrl', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getMsg GET /guide/appletcallback/getMsg */
export async function getMsgUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getMsgUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<string>('/guide/appletcallback/getMsg', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getMsg PUT /guide/appletcallback/getMsg */
export async function getMsgUsingPUT(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getMsgUsingPUTParams,
  options?: { [key: string]: any },
) {
  return request<string>('/guide/appletcallback/getMsg', {
    method: 'PUT',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getMsg POST /guide/appletcallback/getMsg */
export async function getMsgUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getMsgUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<string>('/guide/appletcallback/getMsg', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getMsg DELETE /guide/appletcallback/getMsg */
export async function getMsgUsingDELETE(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getMsgUsingDELETEParams,
  options?: { [key: string]: any },
) {
  return request<string>('/guide/appletcallback/getMsg', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getMsg PATCH /guide/appletcallback/getMsg */
export async function getMsgUsingPATCH(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getMsgUsingPATCHParams,
  options?: { [key: string]: any },
) {
  return request<string>('/guide/appletcallback/getMsg', {
    method: 'PATCH',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** receive GET /guide/appletcallback/receive */
export async function receiveUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.receiveUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<string>('/guide/appletcallback/receive', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** receive PUT /guide/appletcallback/receive */
export async function receiveUsingPUT(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.receiveUsingPUTParams,
  options?: { [key: string]: any },
) {
  return request<string>('/guide/appletcallback/receive', {
    method: 'PUT',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** receive POST /guide/appletcallback/receive */
export async function receiveUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.receiveUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<string>('/guide/appletcallback/receive', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** receive DELETE /guide/appletcallback/receive */
export async function receiveUsingDELETE(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.receiveUsingDELETEParams,
  options?: { [key: string]: any },
) {
  return request<string>('/guide/appletcallback/receive', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** receive PATCH /guide/appletcallback/receive */
export async function receiveUsingPATCH(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.receiveUsingPATCHParams,
  options?: { [key: string]: any },
) {
  return request<string>('/guide/appletcallback/receive', {
    method: 'PATCH',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
