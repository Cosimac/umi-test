// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** exportExcel GET /guide/guideperf/exportExcel */
export async function exportExcelUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.exportExcelUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<any>('/guide/guideperf/exportExcel', {
    method: 'GET',
    params: {
      ...params,
      params: undefined,
      ...params['params'],
    },
    ...(options || {}),
  });
}

/** exportExcel PUT /guide/guideperf/exportExcel */
export async function exportExcelUsingPUT(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.exportExcelUsingPUTParams,
  options?: { [key: string]: any },
) {
  return request<any>('/guide/guideperf/exportExcel', {
    method: 'PUT',
    params: {
      ...params,
      params: undefined,
      ...params['params'],
    },
    ...(options || {}),
  });
}

/** exportExcel POST /guide/guideperf/exportExcel */
export async function exportExcelUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.exportExcelUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<any>('/guide/guideperf/exportExcel', {
    method: 'POST',
    params: {
      ...params,
      params: undefined,
      ...params['params'],
    },
    ...(options || {}),
  });
}

/** exportExcel DELETE /guide/guideperf/exportExcel */
export async function exportExcelUsingDELETE(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.exportExcelUsingDELETEParams,
  options?: { [key: string]: any },
) {
  return request<any>('/guide/guideperf/exportExcel', {
    method: 'DELETE',
    params: {
      ...params,
      params: undefined,
      ...params['params'],
    },
    ...(options || {}),
  });
}

/** exportExcel PATCH /guide/guideperf/exportExcel */
export async function exportExcelUsingPATCH(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.exportExcelUsingPATCHParams,
  options?: { [key: string]: any },
) {
  return request<any>('/guide/guideperf/exportExcel', {
    method: 'PATCH',
    params: {
      ...params,
      params: undefined,
      ...params['params'],
    },
    ...(options || {}),
  });
}

/** findDetailList GET /guide/guideperf/findDetailList */
export async function findDetailListUsingGET(
  body: API.TableRequestVoGuidePerfVo,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/guide/guideperf/findDetailList', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findDetailList PUT /guide/guideperf/findDetailList */
export async function findDetailListUsingPUT(
  body: API.TableRequestVoGuidePerfVo,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/guide/guideperf/findDetailList', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findDetailList POST /guide/guideperf/findDetailList */
export async function findDetailListUsingPOST(
  body: API.TableRequestVoGuidePerfVo,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/guide/guideperf/findDetailList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findDetailList DELETE /guide/guideperf/findDetailList */
export async function findDetailListUsingDELETE(
  body: API.TableRequestVoGuidePerfVo,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/guide/guideperf/findDetailList', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findDetailList PATCH /guide/guideperf/findDetailList */
export async function findDetailListUsingPATCH(
  body: API.TableRequestVoGuidePerfVo,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/guide/guideperf/findDetailList', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findList GET /guide/guideperf/findList */
export async function findListUsingGET4(
  body: API.TableRequestVoGuidePerfVo,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/guide/guideperf/findList', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findList PUT /guide/guideperf/findList */
export async function findListUsingPUT4(
  body: API.TableRequestVoGuidePerfVo,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/guide/guideperf/findList', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findList POST /guide/guideperf/findList */
export async function findListUsingPOST5(
  body: API.TableRequestVoGuidePerfVo,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/guide/guideperf/findList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findList DELETE /guide/guideperf/findList */
export async function findListUsingDELETE4(
  body: API.TableRequestVoGuidePerfVo,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/guide/guideperf/findList', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findList PATCH /guide/guideperf/findList */
export async function findListUsingPATCH4(
  body: API.TableRequestVoGuidePerfVo,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/guide/guideperf/findList', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
