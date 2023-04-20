// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** errorHtml GET /error */
export async function errorHtmlUsingGET(options?: { [key: string]: any }) {
  return request<API.ModelAndView>('/error', {
    method: 'GET',
    ...(options || {}),
  });
}

/** errorHtml PUT /error */
export async function errorHtmlUsingPUT(options?: { [key: string]: any }) {
  return request<API.ModelAndView>('/error', {
    method: 'PUT',
    ...(options || {}),
  });
}

/** errorHtml POST /error */
export async function errorHtmlUsingPOST(options?: { [key: string]: any }) {
  return request<API.ModelAndView>('/error', {
    method: 'POST',
    ...(options || {}),
  });
}

/** errorHtml DELETE /error */
export async function errorHtmlUsingDELETE(options?: { [key: string]: any }) {
  return request<API.ModelAndView>('/error', {
    method: 'DELETE',
    ...(options || {}),
  });
}

/** errorHtml PATCH /error */
export async function errorHtmlUsingPATCH(options?: { [key: string]: any }) {
  return request<API.ModelAndView>('/error', {
    method: 'PATCH',
    ...(options || {}),
  });
}

/** redirectError GET /error/redirectError */
export async function redirectErrorUsingGET(options?: { [key: string]: any }) {
  return request<any>('/error/redirectError', {
    method: 'GET',
    ...(options || {}),
  });
}

/** redirectError PUT /error/redirectError */
export async function redirectErrorUsingPUT(options?: { [key: string]: any }) {
  return request<any>('/error/redirectError', {
    method: 'PUT',
    ...(options || {}),
  });
}

/** redirectError POST /error/redirectError */
export async function redirectErrorUsingPOST(options?: { [key: string]: any }) {
  return request<any>('/error/redirectError', {
    method: 'POST',
    ...(options || {}),
  });
}

/** redirectError DELETE /error/redirectError */
export async function redirectErrorUsingDELETE(options?: { [key: string]: any }) {
  return request<any>('/error/redirectError', {
    method: 'DELETE',
    ...(options || {}),
  });
}

/** redirectError PATCH /error/redirectError */
export async function redirectErrorUsingPATCH(options?: { [key: string]: any }) {
  return request<any>('/error/redirectError', {
    method: 'PATCH',
    ...(options || {}),
  });
}
