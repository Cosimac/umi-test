// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 好友分析统计按员工导出 POST /wework/friendsAnalysis/export */
export async function exportUsingPOST2(body: API.TableRequest, options?: { [key: string]: any }) {
  return request<any>('/wework/friendsAnalysis/export', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询好友分析列表数据 POST /wework/friendsAnalysis/queryAnalysisListByDate */
export async function queryAnalysisListByDateUsingPOST(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultTableResponseRecord>(
    '/wework/friendsAnalysis/queryAnalysisListByDate',
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

/** 查询好友分析报表数据 POST /wework/friendsAnalysis/queryAnalysisListByDateReturnList */
export async function queryAnalysisListByDateReturnListUsingPOST(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultListWeWorkUserBehaviorDTO>(
    '/wework/friendsAnalysis/queryAnalysisListByDateReturnList',
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

/** 查询好友分析列表数据-成员 POST /wework/friendsAnalysis/queryAnalysisListByUser */
export async function queryAnalysisListByUserUsingPOST(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultTableResponseRecord>(
    '/wework/friendsAnalysis/queryAnalysisListByUser',
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

/** 查询昨天好友分析数据 POST /wework/friendsAnalysis/queryAnalysisOverview */
export async function queryAnalysisOverviewUsingPOST(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultWeWorkUserBehaviorDTO>(
    '/wework/friendsAnalysis/queryAnalysisOverview',
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
