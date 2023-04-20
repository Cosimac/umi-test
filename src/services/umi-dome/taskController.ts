// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** v7.20.0-关闭任务 GET /guide/task/closeTask */
export async function closeTaskUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.closeTaskUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/task/closeTask', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** deleteTask GET /guide/task/deleteTask */
export async function deleteTaskUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteTaskUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/task/deleteTask', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** deleteTask PUT /guide/task/deleteTask */
export async function deleteTaskUsingPUT(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteTaskUsingPUTParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/task/deleteTask', {
    method: 'PUT',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** deleteTask POST /guide/task/deleteTask */
export async function deleteTaskUsingPOST1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteTaskUsingPOST1Params,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/task/deleteTask', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** deleteTask DELETE /guide/task/deleteTask */
export async function deleteTaskUsingDELETE(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteTaskUsingDELETEParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/task/deleteTask', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** deleteTask PATCH /guide/task/deleteTask */
export async function deleteTaskUsingPATCH(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteTaskUsingPATCHParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/task/deleteTask', {
    method: 'PATCH',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** downloadTaskTemple GET /guide/task/downloadTaskTemple */
export async function downloadTaskTempleUsingGET(options?: { [key: string]: any }) {
  return request<any>('/guide/task/downloadTaskTemple', {
    method: 'GET',
    ...(options || {}),
  });
}

/** findDailyStatistics GET /guide/task/findDailyStatistics */
export async function findDailyStatisticsUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.findDailyStatisticsUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/task/findDailyStatistics', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** findDailyStatistics PUT /guide/task/findDailyStatistics */
export async function findDailyStatisticsUsingPUT(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.findDailyStatisticsUsingPUTParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/task/findDailyStatistics', {
    method: 'PUT',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** findDailyStatistics POST /guide/task/findDailyStatistics */
export async function findDailyStatisticsUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.findDailyStatisticsUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/task/findDailyStatistics', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** findDailyStatistics DELETE /guide/task/findDailyStatistics */
export async function findDailyStatisticsUsingDELETE(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.findDailyStatisticsUsingDELETEParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/task/findDailyStatistics', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** findDailyStatistics PATCH /guide/task/findDailyStatistics */
export async function findDailyStatisticsUsingPATCH(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.findDailyStatisticsUsingPATCHParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/task/findDailyStatistics', {
    method: 'PATCH',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 查询导购任务数完成排行 查询导购任务数完成排行, 不统计已关闭的任务 GET /guide/task/findGuideRanking */
export async function findGuideRankingUsingGET1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.findGuideRankingUsingGET1Params,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/task/findGuideRanking', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 查询导购任务数完成排行 查询导购任务数完成排行, 不统计已关闭的任务 PUT /guide/task/findGuideRanking */
export async function findGuideRankingUsingPUT1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.findGuideRankingUsingPUT1Params,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/task/findGuideRanking', {
    method: 'PUT',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 查询导购任务数完成排行 查询导购任务数完成排行, 不统计已关闭的任务 POST /guide/task/findGuideRanking */
export async function findGuideRankingUsingPOST1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.findGuideRankingUsingPOST1Params,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/task/findGuideRanking', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 查询导购任务数完成排行 查询导购任务数完成排行, 不统计已关闭的任务 DELETE /guide/task/findGuideRanking */
export async function findGuideRankingUsingDELETE1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.findGuideRankingUsingDELETE1Params,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/task/findGuideRanking', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 查询导购任务数完成排行 查询导购任务数完成排行, 不统计已关闭的任务 PATCH /guide/task/findGuideRanking */
export async function findGuideRankingUsingPATCH1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.findGuideRankingUsingPATCH1Params,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/task/findGuideRanking', {
    method: 'PATCH',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** findList GET /guide/task/findList */
export async function findListUsingGET14(body: API.TableRequest, options?: { [key: string]: any }) {
  return request<API.TableResponserenwukuozhanduixiangVO>('/guide/task/findList', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findList PUT /guide/task/findList */
export async function findListUsingPUT14(body: API.TableRequest, options?: { [key: string]: any }) {
  return request<API.TableResponserenwukuozhanduixiangVO>('/guide/task/findList', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findList POST /guide/task/findList */
export async function findListUsingPOST19(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponserenwukuozhanduixiangVO>('/guide/task/findList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findList DELETE /guide/task/findList */
export async function findListUsingDELETE14(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponserenwukuozhanduixiangVO>('/guide/task/findList', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findList PATCH /guide/task/findList */
export async function findListUsingPATCH14(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponserenwukuozhanduixiangVO>('/guide/task/findList', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findShopList GET /guide/task/findShopList */
export async function findShopListUsingGET1(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponsemendianrenwukuozhanduixiangVO>('/guide/task/findShopList', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findShopList PUT /guide/task/findShopList */
export async function findShopListUsingPUT(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponsemendianrenwukuozhanduixiangVO>('/guide/task/findShopList', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findShopList POST /guide/task/findShopList */
export async function findShopListUsingPOST(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponsemendianrenwukuozhanduixiangVO>('/guide/task/findShopList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findShopList DELETE /guide/task/findShopList */
export async function findShopListUsingDELETE(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponsemendianrenwukuozhanduixiangVO>('/guide/task/findShopList', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findShopList PATCH /guide/task/findShopList */
export async function findShopListUsingPATCH(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponsemendianrenwukuozhanduixiangVO>('/guide/task/findShopList', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询门店任务数完成排行 查询门店任务数完成排行, 不统计已关闭的任务 GET /guide/task/findShopRanking */
export async function findShopRankingUsingGET1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.findShopRankingUsingGET1Params,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/task/findShopRanking', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 查询门店任务数完成排行 查询门店任务数完成排行, 不统计已关闭的任务 PUT /guide/task/findShopRanking */
export async function findShopRankingUsingPUT1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.findShopRankingUsingPUT1Params,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/task/findShopRanking', {
    method: 'PUT',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 查询门店任务数完成排行 查询门店任务数完成排行, 不统计已关闭的任务 POST /guide/task/findShopRanking */
export async function findShopRankingUsingPOST1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.findShopRankingUsingPOST1Params,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/task/findShopRanking', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 查询门店任务数完成排行 查询门店任务数完成排行, 不统计已关闭的任务 DELETE /guide/task/findShopRanking */
export async function findShopRankingUsingDELETE1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.findShopRankingUsingDELETE1Params,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/task/findShopRanking', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 查询门店任务数完成排行 查询门店任务数完成排行, 不统计已关闭的任务 PATCH /guide/task/findShopRanking */
export async function findShopRankingUsingPATCH1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.findShopRankingUsingPATCH1Params,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/task/findShopRanking', {
    method: 'PATCH',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 任务统计 任务统计, 不统计已关闭的任务 GET /guide/task/getTaskCount */
export async function getTaskCountUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getTaskCountUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/task/getTaskCount', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 任务统计 任务统计, 不统计已关闭的任务 PUT /guide/task/getTaskCount */
export async function getTaskCountUsingPUT(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getTaskCountUsingPUTParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/task/getTaskCount', {
    method: 'PUT',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 任务统计 任务统计, 不统计已关闭的任务 POST /guide/task/getTaskCount */
export async function getTaskCountUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getTaskCountUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/task/getTaskCount', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 任务统计 任务统计, 不统计已关闭的任务 DELETE /guide/task/getTaskCount */
export async function getTaskCountUsingDELETE(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getTaskCountUsingDELETEParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/task/getTaskCount', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 任务统计 任务统计, 不统计已关闭的任务 PATCH /guide/task/getTaskCount */
export async function getTaskCountUsingPATCH(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getTaskCountUsingPATCHParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/task/getTaskCount', {
    method: 'PATCH',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 任务进度 任务进度, 不统计已关闭的任务 GET /guide/task/getTaskProgress */
export async function getTaskProgressUsingGET(
  body: API.TaskQueryVo,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/task/getTaskProgress', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 任务进度 任务进度, 不统计已关闭的任务 PUT /guide/task/getTaskProgress */
export async function getTaskProgressUsingPUT(
  body: API.TaskQueryVo,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/task/getTaskProgress', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 任务进度 任务进度, 不统计已关闭的任务 POST /guide/task/getTaskProgress */
export async function getTaskProgressUsingPOST(
  body: API.TaskQueryVo,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/task/getTaskProgress', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 任务进度 任务进度, 不统计已关闭的任务 DELETE /guide/task/getTaskProgress */
export async function getTaskProgressUsingDELETE(
  body: API.TaskQueryVo,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/task/getTaskProgress', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 任务进度 任务进度, 不统计已关闭的任务 PATCH /guide/task/getTaskProgress */
export async function getTaskProgressUsingPATCH(
  body: API.TaskQueryVo,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/task/getTaskProgress', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** importFileAndManual POST /guide/task/importFileAndManual */
export async function importFileAndManualUsingPOST(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/task/importFileAndManual', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** importFileShopIds POST /guide/task/importFileShopIds */
export async function importFileShopIdsUsingPOST(body: string, options?: { [key: string]: any }) {
  return request<API.CommonResult>('/guide/task/importFileShopIds', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** queryArea POST /guide/task/queryArea */
export async function queryAreaUsingPOST(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/guide/task/queryArea', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 查询客户跟踪记录 POST /guide/task/queryCustomerFollowRecordByGuide */
export async function queryCustomerFollowRecordByGuideUsingPOST(
  body: API.BeanTableRequestPCduangenjinjiluchaxuncanshu,
  options?: { [key: string]: any },
) {
  return request<API.BeanTableResponsegenjinjilu>('/guide/task/queryCustomerFollowRecordByGuide', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** queryDetailSubgroupMsg POST /guide/task/queryDetailSubgroupMsg */
export async function queryDetailSubgroupMsgUsingPOST(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponsekehufenzuduixiangVO>('/guide/task/queryDetailSubgroupMsg', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询导购任务朋友圈信息 GET /guide/task/queryGuideTaskMomentList */
export async function queryGuideTaskMomentListUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.queryGuideTaskMomentListUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/task/queryGuideTaskMomentList', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 查询最近一次任务的客户下发规则 GET /guide/task/queryLastAssignCustomerRule */
export async function queryLastAssignCustomerRuleUsingGET(options?: { [key: string]: any }) {
  return request<API.BeanCommonResultrenwukuozhanduixiangVO>(
    '/guide/task/queryLastAssignCustomerRule',
    {
      method: 'GET',
      ...(options || {}),
    },
  );
}

/** queryProgressStatistics POST /guide/task/queryProgressStatistics */
export async function queryProgressStatisticsUsingPOST(
  body: API.TaskQueryVo,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/task/queryProgressStatistics', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** queryShopGuideList GET /guide/task/queryShopGuideList */
export async function queryShopGuideListUsingGET(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseRecord>('/guide/task/queryShopGuideList', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** queryShopGuideList PUT /guide/task/queryShopGuideList */
export async function queryShopGuideListUsingPUT(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseRecord>('/guide/task/queryShopGuideList', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** queryShopGuideList POST /guide/task/queryShopGuideList */
export async function queryShopGuideListUsingPOST(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseRecord>('/guide/task/queryShopGuideList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** queryShopGuideList DELETE /guide/task/queryShopGuideList */
export async function queryShopGuideListUsingDELETE(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseRecord>('/guide/task/queryShopGuideList', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** queryShopGuideList PATCH /guide/task/queryShopGuideList */
export async function queryShopGuideListUsingPATCH(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseRecord>('/guide/task/queryShopGuideList', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** queryShopTaskDetail POST /guide/task/queryShopTaskDetail */
export async function queryShopTaskDetailUsingPOST(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponsedaogoukehushuliangxinxiVo>('/guide/task/queryShopTaskDetail', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** queryShopTaskExecution GET /guide/task/queryShopTaskExecution */
export async function queryShopTaskExecutionUsingGET(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponsedaogourenwuVO>('/guide/task/queryShopTaskExecution', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** queryShopTaskExecution PUT /guide/task/queryShopTaskExecution */
export async function queryShopTaskExecutionUsingPUT(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponsedaogourenwuVO>('/guide/task/queryShopTaskExecution', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** queryShopTaskExecution POST /guide/task/queryShopTaskExecution */
export async function queryShopTaskExecutionUsingPOST(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponsedaogourenwuVO>('/guide/task/queryShopTaskExecution', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** queryShopTaskExecution DELETE /guide/task/queryShopTaskExecution */
export async function queryShopTaskExecutionUsingDELETE(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponsedaogourenwuVO>('/guide/task/queryShopTaskExecution', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** queryShopTaskExecution PATCH /guide/task/queryShopTaskExecution */
export async function queryShopTaskExecutionUsingPATCH(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponsedaogourenwuVO>('/guide/task/queryShopTaskExecution', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** querySubgroup POST /guide/task/querySubgroup */
export async function querySubgroupUsingPOST(
  body: API.fenzuchaxunshiti,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/task/querySubgroup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询会员列表 POST /guide/task/querySubGroupCustomerMsg */
export async function querySubGroupCustomerMsgUsingPOST(
  body: API.BeanTableRequesthuoquhuiyuanxinxichaxuncanshu,
  options?: { [key: string]: any },
) {
  return request<API.BeanTableResponserenwutixihuiyuanxinxi>(
    '/guide/task/querySubGroupCustomerMsg',
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

/** querySubgroupMsg POST /guide/task/querySubgroupMsg */
export async function querySubgroupMsgUsingPOST(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseRecord>('/guide/task/querySubgroupMsg', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** queryTask POST /guide/task/queryTask */
export async function queryTaskUsingPOST(body: API.TaskQueryVo, options?: { [key: string]: any }) {
  return request<API.CommonResult>('/guide/task/queryTask', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** queryTaskNotAssignedShopInfo GET /guide/task/queryTaskNotAssignedShopInfo */
export async function queryTaskNotAssignedShopInfoUsingGET(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponsemendiankehushuliangxinxiVo>(
    '/guide/task/queryTaskNotAssignedShopInfo',
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}

/** queryTaskNotAssignedShopInfo PUT /guide/task/queryTaskNotAssignedShopInfo */
export async function queryTaskNotAssignedShopInfoUsingPUT(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponsemendiankehushuliangxinxiVo>(
    '/guide/task/queryTaskNotAssignedShopInfo',
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}

/** queryTaskNotAssignedShopInfo POST /guide/task/queryTaskNotAssignedShopInfo */
export async function queryTaskNotAssignedShopInfoUsingPOST(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponsemendiankehushuliangxinxiVo>(
    '/guide/task/queryTaskNotAssignedShopInfo',
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

/** queryTaskNotAssignedShopInfo DELETE /guide/task/queryTaskNotAssignedShopInfo */
export async function queryTaskNotAssignedShopInfoUsingDELETE(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponsemendiankehushuliangxinxiVo>(
    '/guide/task/queryTaskNotAssignedShopInfo',
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}

/** queryTaskNotAssignedShopInfo PATCH /guide/task/queryTaskNotAssignedShopInfo */
export async function queryTaskNotAssignedShopInfoUsingPATCH(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponsemendiankehushuliangxinxiVo>(
    '/guide/task/queryTaskNotAssignedShopInfo',
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}

/** 查询任务设置 GET /guide/task/queryTaskSettings */
export async function queryTaskSettingsUsingGET(options?: { [key: string]: any }) {
  return request<API.BeanCommonResultrenwushezhishitu>('/guide/task/queryTaskSettings', {
    method: 'GET',
    ...(options || {}),
  });
}

/** queryTaskShopInfo GET /guide/task/queryTaskShopInfo */
export async function queryTaskShopInfoUsingGET(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponsemendiankehushuliangxinxiVo>('/guide/task/queryTaskShopInfo', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** queryTaskShopInfo PUT /guide/task/queryTaskShopInfo */
export async function queryTaskShopInfoUsingPUT(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponsemendiankehushuliangxinxiVo>('/guide/task/queryTaskShopInfo', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** queryTaskShopInfo POST /guide/task/queryTaskShopInfo */
export async function queryTaskShopInfoUsingPOST(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponsemendiankehushuliangxinxiVo>('/guide/task/queryTaskShopInfo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** queryTaskShopInfo DELETE /guide/task/queryTaskShopInfo */
export async function queryTaskShopInfoUsingDELETE(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponsemendiankehushuliangxinxiVo>('/guide/task/queryTaskShopInfo', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** queryTaskShopInfo PATCH /guide/task/queryTaskShopInfo */
export async function queryTaskShopInfoUsingPATCH(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponsemendiankehushuliangxinxiVo>('/guide/task/queryTaskShopInfo', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** queryTaskTargetIds GET /guide/task/queryTaskTargetIds */
export async function queryTaskTargetIdsUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.queryTaskTargetIdsUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<number[]>('/guide/task/queryTaskTargetIds', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** queryTaskTargetIds PUT /guide/task/queryTaskTargetIds */
export async function queryTaskTargetIdsUsingPUT(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.queryTaskTargetIdsUsingPUTParams,
  options?: { [key: string]: any },
) {
  return request<number[]>('/guide/task/queryTaskTargetIds', {
    method: 'PUT',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** queryTaskTargetIds POST /guide/task/queryTaskTargetIds */
export async function queryTaskTargetIdsUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.queryTaskTargetIdsUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<number[]>('/guide/task/queryTaskTargetIds', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** queryTaskTargetIds DELETE /guide/task/queryTaskTargetIds */
export async function queryTaskTargetIdsUsingDELETE(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.queryTaskTargetIdsUsingDELETEParams,
  options?: { [key: string]: any },
) {
  return request<number[]>('/guide/task/queryTaskTargetIds', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** queryTaskTargetIds PATCH /guide/task/queryTaskTargetIds */
export async function queryTaskTargetIdsUsingPATCH(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.queryTaskTargetIdsUsingPATCHParams,
  options?: { [key: string]: any },
) {
  return request<number[]>('/guide/task/queryTaskTargetIds', {
    method: 'PATCH',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** saveOrUpdateTask GET /guide/task/saveOrUpdateTask */
export async function saveOrUpdateTaskUsingGET(
  body: API.TaskSaveVo,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/task/saveOrUpdateTask', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** saveOrUpdateTask PUT /guide/task/saveOrUpdateTask */
export async function saveOrUpdateTaskUsingPUT(
  body: API.TaskSaveVo,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/task/saveOrUpdateTask', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** saveOrUpdateTask POST /guide/task/saveOrUpdateTask */
export async function saveOrUpdateTaskUsingPOST(
  body: API.TaskSaveVo,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/task/saveOrUpdateTask', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** saveOrUpdateTask DELETE /guide/task/saveOrUpdateTask */
export async function saveOrUpdateTaskUsingDELETE(
  body: API.TaskSaveVo,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/task/saveOrUpdateTask', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** saveOrUpdateTask PATCH /guide/task/saveOrUpdateTask */
export async function saveOrUpdateTaskUsingPATCH(
  body: API.TaskSaveVo,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/task/saveOrUpdateTask', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 保存或新增任务设置 POST /guide/task/saveOrUpdateTaskSettings */
export async function saveOrUpdateTaskSettingsUsingPOST(
  body: API.renwushezhishitu,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/task/saveOrUpdateTaskSettings', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 统计会员信息 POST /guide/task/statisticsSubGroupCustomerMsg */
export async function statisticsSubGroupCustomerMsgUsingPOST(
  body: API.BeanTableRequesthuoquhuiyuanxinxichaxuncanshu,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResulttongjihuiyuanxinxi>(
    '/guide/task/statisticsSubGroupCustomerMsg',
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

/** 获取拉取分组客户预估耗时 GET /guide/task/subdivisionCustomer/cost */
export async function costTimeUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.costTimeUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResulthaoshi>('/guide/task/subdivisionCustomer/cost', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** updateTaskState GET /guide/task/updateTaskState */
export async function updateTaskStateUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateTaskStateUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/task/updateTaskState', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** updateTaskState PUT /guide/task/updateTaskState */
export async function updateTaskStateUsingPUT(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateTaskStateUsingPUTParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/task/updateTaskState', {
    method: 'PUT',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** updateTaskState POST /guide/task/updateTaskState */
export async function updateTaskStateUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateTaskStateUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/task/updateTaskState', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** updateTaskState DELETE /guide/task/updateTaskState */
export async function updateTaskStateUsingDELETE(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateTaskStateUsingDELETEParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/task/updateTaskState', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** updateTaskState PATCH /guide/task/updateTaskState */
export async function updateTaskStateUsingPATCH(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateTaskStateUsingPATCHParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/task/updateTaskState', {
    method: 'PATCH',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
