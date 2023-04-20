// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** uploadImg GET /upload/uploadImg */
export async function uploadImgUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.uploadImgUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<any>('/upload/uploadImg', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** uploadImg PUT /upload/uploadImg */
export async function uploadImgUsingPUT(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.uploadImgUsingPUTParams,
  options?: { [key: string]: any },
) {
  return request<any>('/upload/uploadImg', {
    method: 'PUT',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** uploadImg POST /upload/uploadImg */
export async function uploadImgUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.uploadImgUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<any>('/upload/uploadImg', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** uploadImg DELETE /upload/uploadImg */
export async function uploadImgUsingDELETE(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.uploadImgUsingDELETEParams,
  options?: { [key: string]: any },
) {
  return request<any>('/upload/uploadImg', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** uploadImg PATCH /upload/uploadImg */
export async function uploadImgUsingPATCH(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.uploadImgUsingPATCHParams,
  options?: { [key: string]: any },
) {
  return request<any>('/upload/uploadImg', {
    method: 'PATCH',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** uploadUrl GET /upload/uploadUrl */
export async function uploadUrlUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.uploadUrlUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<any>('/upload/uploadUrl', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** uploadUrl PUT /upload/uploadUrl */
export async function uploadUrlUsingPUT(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.uploadUrlUsingPUTParams,
  options?: { [key: string]: any },
) {
  return request<any>('/upload/uploadUrl', {
    method: 'PUT',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** uploadUrl POST /upload/uploadUrl */
export async function uploadUrlUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.uploadUrlUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<any>('/upload/uploadUrl', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** uploadUrl DELETE /upload/uploadUrl */
export async function uploadUrlUsingDELETE(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.uploadUrlUsingDELETEParams,
  options?: { [key: string]: any },
) {
  return request<any>('/upload/uploadUrl', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** uploadUrl PATCH /upload/uploadUrl */
export async function uploadUrlUsingPATCH(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.uploadUrlUsingPATCHParams,
  options?: { [key: string]: any },
) {
  return request<any>('/upload/uploadUrl', {
    method: 'PATCH',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
