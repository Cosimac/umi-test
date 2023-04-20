// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** exportExcel GET /guide/shopperf/exportExcel */
export async function exportExcelUsingGET1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.exportExcelUsingGET1Params,
  options?: { [key: string]: any },
) {
  return request<any>('/guide/shopperf/exportExcel', {
    method: 'GET',
    params: {
      ...params,
      params: undefined,
      ...params['params'],
    },
    ...(options || {}),
  });
}

/** exportExcel PUT /guide/shopperf/exportExcel */
export async function exportExcelUsingPUT1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.exportExcelUsingPUT1Params,
  options?: { [key: string]: any },
) {
  return request<any>('/guide/shopperf/exportExcel', {
    method: 'PUT',
    params: {
      ...params,
      params: undefined,
      ...params['params'],
    },
    ...(options || {}),
  });
}

/** exportExcel POST /guide/shopperf/exportExcel */
export async function exportExcelUsingPOST1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.exportExcelUsingPOST1Params,
  options?: { [key: string]: any },
) {
  return request<any>('/guide/shopperf/exportExcel', {
    method: 'POST',
    params: {
      ...params,
      params: undefined,
      ...params['params'],
    },
    ...(options || {}),
  });
}

/** exportExcel DELETE /guide/shopperf/exportExcel */
export async function exportExcelUsingDELETE1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.exportExcelUsingDELETE1Params,
  options?: { [key: string]: any },
) {
  return request<any>('/guide/shopperf/exportExcel', {
    method: 'DELETE',
    params: {
      ...params,
      params: undefined,
      ...params['params'],
    },
    ...(options || {}),
  });
}

/** exportExcel PATCH /guide/shopperf/exportExcel */
export async function exportExcelUsingPATCH1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.exportExcelUsingPATCH1Params,
  options?: { [key: string]: any },
) {
  return request<any>('/guide/shopperf/exportExcel', {
    method: 'PATCH',
    params: {
      ...params,
      params: undefined,
      ...params['params'],
    },
    ...(options || {}),
  });
}

/** findList GET /guide/shopperf/findList */
export async function findListUsingGET13(
  body: API.TableRequestVoShopPerfVo,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/guide/shopperf/findList', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findList PUT /guide/shopperf/findList */
export async function findListUsingPUT13(
  body: API.TableRequestVoShopPerfVo,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/guide/shopperf/findList', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findList POST /guide/shopperf/findList */
export async function findListUsingPOST17(
  body: API.TableRequestVoShopPerfVo,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/guide/shopperf/findList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findList DELETE /guide/shopperf/findList */
export async function findListUsingDELETE13(
  body: API.TableRequestVoShopPerfVo,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/guide/shopperf/findList', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findList PATCH /guide/shopperf/findList */
export async function findListUsingPATCH13(
  body: API.TableRequestVoShopPerfVo,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/guide/shopperf/findList', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
