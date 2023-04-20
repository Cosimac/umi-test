// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** ueditorConfig GET /guide/ueditor/ueditor/ueditorConfig */
export async function ueditorConfigUsingGET1(body: string, options?: { [key: string]: any }) {
  return request<any>('/guide/ueditor/ueditor/ueditorConfig', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** ueditorConfig PUT /guide/ueditor/ueditor/ueditorConfig */
export async function ueditorConfigUsingPUT1(body: string, options?: { [key: string]: any }) {
  return request<any>('/guide/ueditor/ueditor/ueditorConfig', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** ueditorConfig POST /guide/ueditor/ueditor/ueditorConfig */
export async function ueditorConfigUsingPOST1(body: string, options?: { [key: string]: any }) {
  return request<any>('/guide/ueditor/ueditor/ueditorConfig', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** ueditorConfig DELETE /guide/ueditor/ueditor/ueditorConfig */
export async function ueditorConfigUsingDELETE1(body: string, options?: { [key: string]: any }) {
  return request<any>('/guide/ueditor/ueditor/ueditorConfig', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** ueditorConfig PATCH /guide/ueditor/ueditor/ueditorConfig */
export async function ueditorConfigUsingPATCH1(body: string, options?: { [key: string]: any }) {
  return request<any>('/guide/ueditor/ueditor/ueditorConfig', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
