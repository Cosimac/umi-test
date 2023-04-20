// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 导出 POST /redpack/dataAnalysis/export */
export async function exportUsingPOST1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.exportUsingPOST1Params,
  options?: { [key: string]: any },
) {
  return request<any>('/redpack/dataAnalysis/export', {
    method: 'POST',
    params: {
      ...params,
      map: undefined,
      ...params['map'],
    },
    ...(options || {}),
  });
}

/** 按员工统计导出 POST /redpack/dataAnalysis/exportByGuide */
export async function exportByGuideUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.exportByGuideUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<any>('/redpack/dataAnalysis/exportByGuide', {
    method: 'POST',
    params: {
      ...params,
      map: undefined,
      ...params['map'],
    },
    ...(options || {}),
  });
}

/** 数据分析列表 POST /redpack/dataAnalysis/list */
export async function listUsingPOST13(
  body: API.SearchRequestVORecordStatisticsQueryVO,
  options?: { [key: string]: any },
) {
  return request<API.TableResponse>('/redpack/dataAnalysis/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 按员工统计 POST /redpack/dataAnalysis/listByGuideId */
export async function listByGuideIdUsingPOST(
  body: API.SearchRequestVORecordStatisticsQueryVO,
  options?: { [key: string]: any },
) {
  return request<API.TableResponse>('/redpack/dataAnalysis/listByGuideId', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 出入帐统计 POST /redpack/dataAnalysis/recordStatistics */
export async function recordStatisticsUsingPOST(
  body: API.RecordStatisticsQueryVO,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultRecordStatisticsDTO>(
    '/redpack/dataAnalysis/recordStatistics',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}
