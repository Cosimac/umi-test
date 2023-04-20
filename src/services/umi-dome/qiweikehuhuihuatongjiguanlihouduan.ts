// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 客户会话统计按员工导出 POST /wework/sessionStatistics/export */
export async function exportUsingPOST4(body: API.TableRequest, options?: { [key: string]: any }) {
  return request<any>('/wework/sessionStatistics/export', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询定时器统计最后时间 POST /wework/sessionStatistics/getStatisticsLastTime */
export async function setAuthRangeUsingPOST1(
  body: API.jinduleixing,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/wework/sessionStatistics/getStatisticsLastTime', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询好友会话统计分析列表数据 POST /wework/sessionStatistics/queryAnalysisListByDate */
export async function queryAnalysisListByDateUsingPOST1(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultTableResponseRecord>(
    '/wework/sessionStatistics/queryAnalysisListByDate',
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

/** 查询好友会话统计分析报表数据 POST /wework/sessionStatistics/queryAnalysisListByDateReturnList */
export async function queryAnalysisListByDateReturnListUsingPOST1(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultListWeWorkUserBehaviorDTO>(
    '/wework/sessionStatistics/queryAnalysisListByDateReturnList',
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

/** 查询好友会话统计分析列表数据-成员 POST /wework/sessionStatistics/queryAnalysisListByUser */
export async function queryAnalysisListByUserUsingPOST1(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultTableResponseRecord>(
    '/wework/sessionStatistics/queryAnalysisListByUser',
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

/** 查询昨天好友会话统计分析数据 POST /wework/sessionStatistics/queryAnalysisOverview */
export async function queryAnalysisOverviewUsingPOST1(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultWeWorkUserBehaviorDTO>(
    '/wework/sessionStatistics/queryAnalysisOverview',
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
