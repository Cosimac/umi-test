// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 营销活动审核 导购管理后台用于营销活动审核 POST /wework/marketing/auditActivity */
export async function auditActivityUsingPOST(
  body: API.WxActivityAuditQuery,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/wework/marketing/auditActivity', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 导出发货周期报表数据 导出发货周期报表数据 POST /wework/marketing/createExportTask */
export async function createExportTaskUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.createExportTaskUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<any>('/wework/marketing/createExportTask', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 删除企微营销活动 导购管理后台用于删除企微营销活动 GET /wework/marketing/deleteWxActivity */
export async function deleteWxActivityUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteWxActivityUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/wework/marketing/deleteWxActivity', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取营销活动状态 导购管理后台用于获取获取营销活动状态 GET /wework/marketing/getActivityStatus */
export async function getActivityStatusUsingGET(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/wework/marketing/getActivityStatus', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取员工集合 导购管理后台用于获取员工集合 GET /wework/marketing/getEmployee */
export async function getEmployeeUsingGET(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/wework/marketing/getEmployee', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取企微营销活动详情 导购管理后台用于获取获取企微营销活动详情 GET /wework/marketing/getEnterpriseActivity */
export async function getEnterpriseActivityUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getEnterpriseActivityUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultEnterpriseWxActivityVo>(
    '/wework/marketing/getEnterpriseActivity',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 获取会员分群 导购管理后台用于获取会员分群 GET /wework/marketing/getSubdivisionList */
export async function getSubdivisionListUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getSubdivisionListUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/wework/marketing/getSubdivisionList', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取视角下的线下店铺信息 导购管理后台用于获取视角下的线下店铺信息 GET /wework/marketing/getViewShopOffList */
export async function getViewShopOffListUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getViewShopOffListUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/wework/marketing/getViewShopOffList', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取营销活动状态 导购管理后台用于获取获取营销活动状态 GET /wework/marketing/getWxStatus */
export async function getWxStatusUsingGET(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/wework/marketing/getWxStatus', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 查询审核信息 导购管理后台用于查询审核信息 GET /wework/marketing/queryAuditInfo */
export async function queryAuditInfoUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.queryAuditInfoUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultEnterpriseWXMarketingAuditInfoVo>(
    '/wework/marketing/queryAuditInfo',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 获取企微营销任务审核列表 导购管理后台用于获取企微营销任务审核列表 POST /wework/marketing/queryAuditTable */
export async function queryAuditTableUsingPOST(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponse>('/wework/marketing/queryAuditTable', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 企微查询群主 导购管理后台用于获取企微群主 GET /wework/marketing/queryChatRoomLeadersByActivityId */
export async function queryChatRoomLeadersByActivityIdUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.queryChatRoomLeadersByActivityIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/wework/marketing/queryChatRoomLeadersByActivityId', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取部门树 导购管理后台用于获取部门树-通过云平台 GET /wework/marketing/queryDepartmentTreeByYun */
export async function queryDepartmentTreeByYunUsingGET1(options?: { [key: string]: any }) {
  return request<API.BeanCommonResultListTreeNode>('/wework/marketing/queryDepartmentTreeByYun', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取部门列表 导购管理后台用于获取获取部门列表 GET /wework/marketing/queryDeptAndEmpl */
export async function queryDeptAndEmplUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.queryDeptAndEmplUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/wework/marketing/queryDeptAndEmpl', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 选择员工组件 导购管理后台用于获取选择员工组件工作门店分类下拉树、工作门店下拉框、部门下拉树 GET /wework/marketing/queryEmployeeTreeAndOption4Component */
export async function queryEmployeeTreeAndOption4ComponentUsingGET1(options?: {
  [key: string]: any;
}) {
  return request<API.CommonResult>('/wework/marketing/queryEmployeeTreeAndOption4Component', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 根据视角获取企微员工 导购管理后台用于获取根据视角获取企微员工 GET /wework/marketing/queryEmployeeWechatInfoList */
export async function queryEmployeeWechatInfoListUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.queryEmployeeWechatInfoListUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/wework/marketing/queryEmployeeWechatInfoList', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 企微查询群主 导购管理后台用于获取企微群主 POST /wework/marketing/queryGroupEntRoomsLeaderList */
export async function queryGroupEntRoomsLeaderListUsingPOST(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultListWechatGroupLeaderVo>(
    '/wework/marketing/queryGroupEntRoomsLeaderList',
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

/** 企微查询群主（客道） 由于种种历史原因，返回的数据结构与ECRP不一致 POST /wework/marketing/queryGroupEntRoomsLeaderListForKd */
export async function queryGroupEntRoomsLeaderListForKdUsingPOST(
  body: API.QueryChatRoomOwnerQuery,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseGuideVo>('/wework/marketing/queryGroupEntRoomsLeaderListForKd', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取企微好友营销列表 导购管理后台用于获取企微好友营销列表 POST /wework/marketing/queryTable */
export async function queryTableUsingPOST(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponse>('/wework/marketing/queryTable', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 企微好友营销效果分析 导购管理后台用于获取企微好友营销效果分析 POST /wework/marketing/queryTableSendData */
export async function queryTableSendDataUsingPOST(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponse>('/wework/marketing/queryTableSendData', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 企微好友营销效果分析 导购管理后台用于获取企微好友营销效果分析 POST /wework/marketing/queryTableSendDataToGroup */
export async function queryTableSendDataToGroupUsingPOST(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponse>('/wework/marketing/queryTableSendDataToGroup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 企微营销分析统计 导购管理后台用于获取企微营销分析统计 GET /wework/marketing/queryTotal */
export async function queryTotalUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.queryTotalUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultWXMarketingAnalysisTotalVo>('/wework/marketing/queryTotal', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取微信个人号好友分析数据 导购管理后台用于获取微信个人号好友分析数据 POST /wework/marketing/queryWxPersonalFriendsAnalysisData */
export async function queryWxPersonalFriendsAnalysisDataUsingPOST(
  body: API.WxFriendAnalysisQuery,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultListWechatAnalysisReportData>(
    '/wework/marketing/queryWxPersonalFriendsAnalysisData',
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

/** 保存或者更新企微营销活动 导购管理后台用于保存或者更新企微营销活动 POST /wework/marketing/saveOrUpdateEnterprise */
export async function saveOrUpdateEnterpriseUsingPOST(
  body: API.WxActivityEnterpriseCreateQuery,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/wework/marketing/saveOrUpdateEnterprise', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 保存或者更新企微群营销活动 导购管理后台用于保存或者更新企微群营销活动 POST /wework/marketing/saveOrUpdateEnterprise4Room */
export async function saveOrUpdateEnterprise4RoomUsingPOST(
  body: API.WxActivityEnterpriseCreateQuery,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/wework/marketing/saveOrUpdateEnterprise4Room', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 提交企微营销活动审核 导购管理后台用于提交企微营销活动审核 GET /wework/marketing/updateStatus */
export async function updateStatusUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateStatusUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/wework/marketing/updateStatus', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 校验CRM产品是否有效 导购管理后台用于校验CRM产品是否有效 GET /wework/marketing/verifyProductToCRM */
export async function verifyProductToCRMUsingGET(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/wework/marketing/verifyProductToCRM', {
    method: 'GET',
    ...(options || {}),
  });
}
