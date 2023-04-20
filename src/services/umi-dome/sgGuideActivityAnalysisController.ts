// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** exportData GET /guide/activityAnalysis/exportData */
export async function exportDataUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.exportDataUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<any>('/guide/activityAnalysis/exportData', {
    method: 'GET',
    params: {
      ...params,
      params: undefined,
      ...params['params'],
    },
    ...(options || {}),
  });
}

/** exportData PUT /guide/activityAnalysis/exportData */
export async function exportDataUsingPUT(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.exportDataUsingPUTParams,
  options?: { [key: string]: any },
) {
  return request<any>('/guide/activityAnalysis/exportData', {
    method: 'PUT',
    params: {
      ...params,
      params: undefined,
      ...params['params'],
    },
    ...(options || {}),
  });
}

/** exportData POST /guide/activityAnalysis/exportData */
export async function exportDataUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.exportDataUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<any>('/guide/activityAnalysis/exportData', {
    method: 'POST',
    params: {
      ...params,
      params: undefined,
      ...params['params'],
    },
    ...(options || {}),
  });
}

/** exportData DELETE /guide/activityAnalysis/exportData */
export async function exportDataUsingDELETE(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.exportDataUsingDELETEParams,
  options?: { [key: string]: any },
) {
  return request<any>('/guide/activityAnalysis/exportData', {
    method: 'DELETE',
    params: {
      ...params,
      params: undefined,
      ...params['params'],
    },
    ...(options || {}),
  });
}

/** exportData PATCH /guide/activityAnalysis/exportData */
export async function exportDataUsingPATCH(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.exportDataUsingPATCHParams,
  options?: { [key: string]: any },
) {
  return request<any>('/guide/activityAnalysis/exportData', {
    method: 'PATCH',
    params: {
      ...params,
      params: undefined,
      ...params['params'],
    },
    ...(options || {}),
  });
}

/** findList GET /guide/activityAnalysis/findList */
export async function findListUsingGET9(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/guide/activityAnalysis/findList', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findList PUT /guide/activityAnalysis/findList */
export async function findListUsingPUT9(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/guide/activityAnalysis/findList', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findList POST /guide/activityAnalysis/findList */
export async function findListUsingPOST13(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/guide/activityAnalysis/findList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findList DELETE /guide/activityAnalysis/findList */
export async function findListUsingDELETE9(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/guide/activityAnalysis/findList', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findList PATCH /guide/activityAnalysis/findList */
export async function findListUsingPATCH9(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/guide/activityAnalysis/findList', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getGuideMsg GET /guide/activityAnalysis/getGuideMsg */
export async function getGuideMsgUsingGET1(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/guide/activityAnalysis/getGuideMsg', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getGuideMsg PUT /guide/activityAnalysis/getGuideMsg */
export async function getGuideMsgUsingPUT1(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/guide/activityAnalysis/getGuideMsg', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getGuideMsg POST /guide/activityAnalysis/getGuideMsg */
export async function getGuideMsgUsingPOST1(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/guide/activityAnalysis/getGuideMsg', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getGuideMsg DELETE /guide/activityAnalysis/getGuideMsg */
export async function getGuideMsgUsingDELETE1(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/guide/activityAnalysis/getGuideMsg', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getGuideMsg PATCH /guide/activityAnalysis/getGuideMsg */
export async function getGuideMsgUsingPATCH1(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/guide/activityAnalysis/getGuideMsg', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
