// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** findList GET /guide/quotayear/findList */
export async function findListUsingGET7(
  body: API.TableRequestVoQuotaFindVo,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/guide/quotayear/findList', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findList PUT /guide/quotayear/findList */
export async function findListUsingPUT7(
  body: API.TableRequestVoQuotaFindVo,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/guide/quotayear/findList', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findList POST /guide/quotayear/findList */
export async function findListUsingPOST11(
  body: API.TableRequestVoQuotaFindVo,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/guide/quotayear/findList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findList DELETE /guide/quotayear/findList */
export async function findListUsingDELETE7(
  body: API.TableRequestVoQuotaFindVo,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/guide/quotayear/findList', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findList PATCH /guide/quotayear/findList */
export async function findListUsingPATCH7(
  body: API.TableRequestVoQuotaFindVo,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/guide/quotayear/findList', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** save GET /guide/quotayear/save */
export async function saveUsingGET1(body: API.QuotaYearVo, options?: { [key: string]: any }) {
  return request<Record<string, any>>('/guide/quotayear/save', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** save PUT /guide/quotayear/save */
export async function saveUsingPUT1(body: API.QuotaYearVo, options?: { [key: string]: any }) {
  return request<Record<string, any>>('/guide/quotayear/save', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** save POST /guide/quotayear/save */
export async function saveUsingPOST4(body: API.QuotaYearVo, options?: { [key: string]: any }) {
  return request<Record<string, any>>('/guide/quotayear/save', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** save DELETE /guide/quotayear/save */
export async function saveUsingDELETE1(body: API.QuotaYearVo, options?: { [key: string]: any }) {
  return request<Record<string, any>>('/guide/quotayear/save', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** save PATCH /guide/quotayear/save */
export async function saveUsingPATCH1(body: API.QuotaYearVo, options?: { [key: string]: any }) {
  return request<Record<string, any>>('/guide/quotayear/save', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
