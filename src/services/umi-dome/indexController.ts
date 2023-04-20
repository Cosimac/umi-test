// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** logout GET /logout */
export async function logoutUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.logoutUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/logout', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** logout PUT /logout */
export async function logoutUsingPUT(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.logoutUsingPUTParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/logout', {
    method: 'PUT',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** logout POST /logout */
export async function logoutUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.logoutUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/logout', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** logout DELETE /logout */
export async function logoutUsingDELETE(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.logoutUsingDELETEParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/logout', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** logout PATCH /logout */
export async function logoutUsingPATCH(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.logoutUsingPATCHParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/logout', {
    method: 'PATCH',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** validate GET /validate */
export async function validateUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.validateUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/validate', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** validate PUT /validate */
export async function validateUsingPUT(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.validateUsingPUTParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/validate', {
    method: 'PUT',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** validate POST /validate */
export async function validateUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.validateUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/validate', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** validate DELETE /validate */
export async function validateUsingDELETE(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.validateUsingDELETEParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/validate', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** validate PATCH /validate */
export async function validateUsingPATCH(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.validateUsingPATCHParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/validate', {
    method: 'PATCH',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
