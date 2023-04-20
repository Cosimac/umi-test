// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** delete GET /guide/sgwxaccount/delete */
export async function deleteUsingGET5(body: API.SgWxAccount, options?: { [key: string]: any }) {
  return request<Record<string, any>>('/guide/sgwxaccount/delete', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** delete PUT /guide/sgwxaccount/delete */
export async function deleteUsingPUT3(body: API.SgWxAccount, options?: { [key: string]: any }) {
  return request<Record<string, any>>('/guide/sgwxaccount/delete', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** delete POST /guide/sgwxaccount/delete */
export async function deleteUsingPOST8(body: API.SgWxAccount, options?: { [key: string]: any }) {
  return request<Record<string, any>>('/guide/sgwxaccount/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** delete DELETE /guide/sgwxaccount/delete */
export async function deleteUsingDELETE3(body: API.SgWxAccount, options?: { [key: string]: any }) {
  return request<Record<string, any>>('/guide/sgwxaccount/delete', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** delete PATCH /guide/sgwxaccount/delete */
export async function deleteUsingPATCH3(body: API.SgWxAccount, options?: { [key: string]: any }) {
  return request<Record<string, any>>('/guide/sgwxaccount/delete', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findList GET /guide/sgwxaccount/findList */
export async function findListUsingGET12(body: API.TableRequest, options?: { [key: string]: any }) {
  return request<Record<string, any>>('/guide/sgwxaccount/findList', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findList PUT /guide/sgwxaccount/findList */
export async function findListUsingPUT12(body: API.TableRequest, options?: { [key: string]: any }) {
  return request<Record<string, any>>('/guide/sgwxaccount/findList', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findList POST /guide/sgwxaccount/findList */
export async function findListUsingPOST16(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/guide/sgwxaccount/findList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findList DELETE /guide/sgwxaccount/findList */
export async function findListUsingDELETE12(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/guide/sgwxaccount/findList', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findList PATCH /guide/sgwxaccount/findList */
export async function findListUsingPATCH12(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/guide/sgwxaccount/findList', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取应用信息 GET /guide/sgwxaccount/getAppIdletInfo */
export async function getAppIdletInfoUsingGET(options?: { [key: string]: any }) {
  return request<API.BeanCommonResultAppIdletInfoVo>('/guide/sgwxaccount/getAppIdletInfo', {
    method: 'GET',
    ...(options || {}),
  });
}

/** save GET /guide/sgwxaccount/save */
export async function saveUsingGET3(body: API.SgWxAccountVo, options?: { [key: string]: any }) {
  return request<Record<string, any>>('/guide/sgwxaccount/save', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** save PUT /guide/sgwxaccount/save */
export async function saveUsingPUT3(body: API.SgWxAccountVo, options?: { [key: string]: any }) {
  return request<Record<string, any>>('/guide/sgwxaccount/save', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** save POST /guide/sgwxaccount/save */
export async function saveUsingPOST6(body: API.SgWxAccountVo, options?: { [key: string]: any }) {
  return request<Record<string, any>>('/guide/sgwxaccount/save', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** save DELETE /guide/sgwxaccount/save */
export async function saveUsingDELETE3(body: API.SgWxAccountVo, options?: { [key: string]: any }) {
  return request<Record<string, any>>('/guide/sgwxaccount/save', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** save PATCH /guide/sgwxaccount/save */
export async function saveUsingPATCH3(body: API.SgWxAccountVo, options?: { [key: string]: any }) {
  return request<Record<string, any>>('/guide/sgwxaccount/save', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
