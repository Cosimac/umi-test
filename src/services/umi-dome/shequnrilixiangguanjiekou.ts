// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 创建/更新社群日历 POST /roomSOP/addOrUp */
export async function addOrUpUsingPOST(
  body: API.qunrilichuangjianbianjiduixiang,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/roomSOP/addOrUp', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除这条数据 GET /roomSOP/delete */
export async function deleteUsingGET6(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteUsingGET6Params,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/roomSOP/delete', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 查看详情接口 GET /roomSOP/findById */
export async function findByIdUsingGET3(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.findByIdUsingGET3Params,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/roomSOP/findById', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取使用认证范围 GET /roomSOP/getAuthRange */
export async function getAuthRangeUsingGET(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/roomSOP/getAuthRange', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 群列表 POST /roomSOP/getChatRoomInfoList */
export async function getChatRoomInfoListUsingPOST(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponsequnxiangqingshuju>('/roomSOP/getChatRoomInfoList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取编号接口 GET /roomSOP/getCode */
export async function getCodeUsingGET(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/roomSOP/getCode', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 查看不同状态的总数量, GET /roomSOP/getCountByStatus */
export async function getCountByStatusUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getCountByStatusUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/roomSOP/getCountByStatus', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 查看月份下每天的任务数量, GET /roomSOP/getEveryDayForCountByMonth */
export async function getEveryDayForCountByMonthUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getEveryDayForCountByMonthUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/roomSOP/getEveryDayForCountByMonth', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 下载成功的日志数据流 GET /roomSOP/getLog */
export async function getLogUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getLogUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<any>('/roomSOP/getLog', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 群详情列表导出. GET /roomSOP/getLogForChatRoom */
export async function getLogForChatRoomUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getLogForChatRoomUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<any>('/roomSOP/getLogForChatRoom', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 任务群发送成功数量 GET /roomSOP/getSuccessTotal */
export async function getSuccessTotalUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getSuccessTotalUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/roomSOP/getSuccessTotal', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 日历列表 POST /roomSOP/list */
export async function listUsingPOST21(
  body: API.qunrililiebiaoduixiang,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultliebiaoshujuqunrilichuangjianbianjiduixiang>('/roomSOP/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 设置使用范围 POST /roomSOP/setAuthRange */
export async function setAuthRangeUsingPOST(
  body: API.shiyongdeyonghu,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/roomSOP/setAuthRange', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 变更审核状态 GET /roomSOP/updateStatus */
export async function updateStatusUsingGET1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateStatusUsingGET1Params,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/roomSOP/updateStatus', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
