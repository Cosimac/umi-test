// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** downloadTemplate GET /guide/importquota/downloadtemplate */
export async function downloadTemplateUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.downloadTemplateUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<any>('/guide/importquota/downloadtemplate', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** downloadTemplate PUT /guide/importquota/downloadtemplate */
export async function downloadTemplateUsingPUT(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.downloadTemplateUsingPUTParams,
  options?: { [key: string]: any },
) {
  return request<any>('/guide/importquota/downloadtemplate', {
    method: 'PUT',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** downloadTemplate POST /guide/importquota/downloadtemplate */
export async function downloadTemplateUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.downloadTemplateUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<any>('/guide/importquota/downloadtemplate', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** downloadTemplate DELETE /guide/importquota/downloadtemplate */
export async function downloadTemplateUsingDELETE(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.downloadTemplateUsingDELETEParams,
  options?: { [key: string]: any },
) {
  return request<any>('/guide/importquota/downloadtemplate', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** downloadTemplate PATCH /guide/importquota/downloadtemplate */
export async function downloadTemplateUsingPATCH(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.downloadTemplateUsingPATCHParams,
  options?: { [key: string]: any },
) {
  return request<any>('/guide/importquota/downloadtemplate', {
    method: 'PATCH',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** updateList GET /guide/importquota/updateList */
export async function updateListUsingGET(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/importquota/updateList', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** updateList PUT /guide/importquota/updateList */
export async function updateListUsingPUT(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/importquota/updateList', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** updateList POST /guide/importquota/updateList */
export async function updateListUsingPOST(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/importquota/updateList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** updateList DELETE /guide/importquota/updateList */
export async function updateListUsingDELETE(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/importquota/updateList', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** updateList PATCH /guide/importquota/updateList */
export async function updateListUsingPATCH(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/importquota/updateList', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** uploadExcel GET /guide/importquota/uploadexcel */
export async function uploadExcelUsingGET(body: string, options?: { [key: string]: any }) {
  return request<API.CommonResult>('/guide/importquota/uploadexcel', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** uploadExcel PUT /guide/importquota/uploadexcel */
export async function uploadExcelUsingPUT(body: string, options?: { [key: string]: any }) {
  return request<API.CommonResult>('/guide/importquota/uploadexcel', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** uploadExcel POST /guide/importquota/uploadexcel */
export async function uploadExcelUsingPOST(body: string, options?: { [key: string]: any }) {
  return request<API.CommonResult>('/guide/importquota/uploadexcel', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** uploadExcel DELETE /guide/importquota/uploadexcel */
export async function uploadExcelUsingDELETE(body: string, options?: { [key: string]: any }) {
  return request<API.CommonResult>('/guide/importquota/uploadexcel', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** uploadExcel PATCH /guide/importquota/uploadexcel */
export async function uploadExcelUsingPATCH(body: string, options?: { [key: string]: any }) {
  return request<API.CommonResult>('/guide/importquota/uploadexcel', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
