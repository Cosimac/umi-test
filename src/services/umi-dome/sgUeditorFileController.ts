// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** downloadFile GET /core/ueditor/downloadFile */
export async function downloadFileUsingGET1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.downloadFileUsingGET1Params,
  options?: { [key: string]: any },
) {
  return request<any>('/core/ueditor/downloadFile', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** downloadFile PUT /core/ueditor/downloadFile */
export async function downloadFileUsingPUT1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.downloadFileUsingPUT1Params,
  options?: { [key: string]: any },
) {
  return request<any>('/core/ueditor/downloadFile', {
    method: 'PUT',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** downloadFile POST /core/ueditor/downloadFile */
export async function downloadFileUsingPOST1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.downloadFileUsingPOST1Params,
  options?: { [key: string]: any },
) {
  return request<any>('/core/ueditor/downloadFile', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** downloadFile DELETE /core/ueditor/downloadFile */
export async function downloadFileUsingDELETE1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.downloadFileUsingDELETE1Params,
  options?: { [key: string]: any },
) {
  return request<any>('/core/ueditor/downloadFile', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** downloadFile PATCH /core/ueditor/downloadFile */
export async function downloadFileUsingPATCH1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.downloadFileUsingPATCH1Params,
  options?: { [key: string]: any },
) {
  return request<any>('/core/ueditor/downloadFile', {
    method: 'PATCH',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** ueditorConfig GET /core/ueditor/ueditorConfig */
export async function ueditorConfigUsingGET(body: string, options?: { [key: string]: any }) {
  return request<any>('/core/ueditor/ueditorConfig', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** ueditorConfig PUT /core/ueditor/ueditorConfig */
export async function ueditorConfigUsingPUT(body: string, options?: { [key: string]: any }) {
  return request<any>('/core/ueditor/ueditorConfig', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** ueditorConfig POST /core/ueditor/ueditorConfig */
export async function ueditorConfigUsingPOST(body: string, options?: { [key: string]: any }) {
  return request<any>('/core/ueditor/ueditorConfig', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** ueditorConfig DELETE /core/ueditor/ueditorConfig */
export async function ueditorConfigUsingDELETE(body: string, options?: { [key: string]: any }) {
  return request<any>('/core/ueditor/ueditorConfig', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** ueditorConfig PATCH /core/ueditor/ueditorConfig */
export async function ueditorConfigUsingPATCH(body: string, options?: { [key: string]: any }) {
  return request<any>('/core/ueditor/ueditorConfig', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** uploadImage GET /core/ueditor/uploadImage */
export async function uploadImageUsingGET(body: string, options?: { [key: string]: any }) {
  return request<string>('/core/ueditor/uploadImage', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** uploadImage PUT /core/ueditor/uploadImage */
export async function uploadImageUsingPUT(body: string, options?: { [key: string]: any }) {
  return request<string>('/core/ueditor/uploadImage', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** uploadImage POST /core/ueditor/uploadImage */
export async function uploadImageUsingPOST(body: string, options?: { [key: string]: any }) {
  return request<string>('/core/ueditor/uploadImage', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** uploadImage DELETE /core/ueditor/uploadImage */
export async function uploadImageUsingDELETE(body: string, options?: { [key: string]: any }) {
  return request<string>('/core/ueditor/uploadImage', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** uploadImage PATCH /core/ueditor/uploadImage */
export async function uploadImageUsingPATCH(body: string, options?: { [key: string]: any }) {
  return request<string>('/core/ueditor/uploadImage', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
