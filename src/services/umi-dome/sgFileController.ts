// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** downloadFile GET /core/sgfile/downloadFile */
export async function downloadFileUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.downloadFileUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<any>('/core/sgfile/downloadFile', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** downloadFile PUT /core/sgfile/downloadFile */
export async function downloadFileUsingPUT(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.downloadFileUsingPUTParams,
  options?: { [key: string]: any },
) {
  return request<any>('/core/sgfile/downloadFile', {
    method: 'PUT',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** downloadFile POST /core/sgfile/downloadFile */
export async function downloadFileUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.downloadFileUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<any>('/core/sgfile/downloadFile', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** downloadFile DELETE /core/sgfile/downloadFile */
export async function downloadFileUsingDELETE(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.downloadFileUsingDELETEParams,
  options?: { [key: string]: any },
) {
  return request<any>('/core/sgfile/downloadFile', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** downloadFile PATCH /core/sgfile/downloadFile */
export async function downloadFileUsingPATCH(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.downloadFileUsingPATCHParams,
  options?: { [key: string]: any },
) {
  return request<any>('/core/sgfile/downloadFile', {
    method: 'PATCH',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** uploadFile GET /core/sgfile/uploadFile/${param0} */
export async function uploadFileUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.uploadFileUsingGETParams,
  body: string,
  options?: { [key: string]: any },
) {
  const { module: param0, ...queryParams } = params;
  return request<API.CommonResult>(`/core/sgfile/uploadFile/${param0}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    params: {
      ...queryParams,
    },
    data: body,
    ...(options || {}),
  });
}

/** uploadFile PUT /core/sgfile/uploadFile/${param0} */
export async function uploadFileUsingPUT(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.uploadFileUsingPUTParams,
  body: string,
  options?: { [key: string]: any },
) {
  const { module: param0, ...queryParams } = params;
  return request<API.CommonResult>(`/core/sgfile/uploadFile/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: {
      ...queryParams,
    },
    data: body,
    ...(options || {}),
  });
}

/** uploadFile POST /core/sgfile/uploadFile/${param0} */
export async function uploadFileUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.uploadFileUsingPOSTParams,
  body: string,
  options?: { [key: string]: any },
) {
  const { module: param0, ...queryParams } = params;
  return request<API.CommonResult>(`/core/sgfile/uploadFile/${param0}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: {
      ...queryParams,
    },
    data: body,
    ...(options || {}),
  });
}

/** uploadFile DELETE /core/sgfile/uploadFile/${param0} */
export async function uploadFileUsingDELETE(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.uploadFileUsingDELETEParams,
  body: string,
  options?: { [key: string]: any },
) {
  const { module: param0, ...queryParams } = params;
  return request<API.CommonResult>(`/core/sgfile/uploadFile/${param0}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    params: {
      ...queryParams,
    },
    data: body,
    ...(options || {}),
  });
}

/** uploadFile PATCH /core/sgfile/uploadFile/${param0} */
export async function uploadFileUsingPATCH(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.uploadFileUsingPATCHParams,
  body: string,
  options?: { [key: string]: any },
) {
  const { module: param0, ...queryParams } = params;
  return request<API.CommonResult>(`/core/sgfile/uploadFile/${param0}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    params: {
      ...queryParams,
    },
    data: body,
    ...(options || {}),
  });
}

/** uploadFileBase64 POST /core/sgfile/uploadFileBase64/${param0} */
export async function uploadFileBase64UsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.uploadFileBase64UsingPOSTParams,
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  const { module: param0, ...queryParams } = params;
  return request<API.CommonResult>(`/core/sgfile/uploadFileBase64/${param0}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}
