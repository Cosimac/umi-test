// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 导出 POST /redpack/record/export */
export async function exportUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.exportUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<any>('/redpack/record/export', {
    method: 'POST',
    params: {
      ...params,
      map: undefined,
      ...params['map'],
    },
    ...(options || {}),
  });
}

/** 发放记录列表 POST /redpack/record/list */
export async function listUsingPOST10(
  body: API.SearchRequestVOQueryRecordListVO,
  options?: { [key: string]: any },
) {
  return request<API.TableResponse>('/redpack/record/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 红包发放记录>领取详情 POST /redpack/record/receiveDetail */
export async function receiveDetailUsingPOST(
  body: API.SearchRequestVOReceiveDetailVO,
  options?: { [key: string]: any },
) {
  return request<API.TableResponse>('/redpack/record/receiveDetail', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 红包发放记录>发放统计 POST /redpack/record/sendStatistics */
export async function sendStatisticsUsingPOST(
  body: API.SendStatisticsVO,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultSendStatisticsDTO>('/redpack/record/sendStatistics', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
