// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** checkWelcomeCodeName GET /wework/welcomecode/checkWelcomeCodeName */
export async function checkWelcomeCodeNameUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.checkWelcomeCodeNameUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/wework/welcomecode/checkWelcomeCodeName', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 删除智能欢迎语 POST /wework/welcomecode/deleteWelcomeCode */
export async function deleteWelcomeCodeUsingPOST1(
  body: API.zhinenghuanyingyushitiduixiang,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/wework/welcomecode/deleteWelcomeCode', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询渠道列表 GET /wework/welcomecode/findChannelList */
export async function findChannelListUsingGET(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/wework/welcomecode/findChannelList', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 查询智能欢迎语配置列表 导购管理后台用于查询智能欢迎语配置列表，默认数据范围为：当前登录账号所在公司. POST /wework/welcomecode/findList */
export async function findListUsingPOST22(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseWelcomeCodeListVo>('/wework/welcomecode/findList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询智能欢迎语渠道使用范围 GET /wework/welcomecode/findWelcomeCodeChannelList */
export async function findWelcomeCodeChannelListUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.findWelcomeCodeChannelListUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/wework/welcomecode/findWelcomeCodeChannelList', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 查询智能欢迎语员工使用范围 POST /wework/welcomecode/findWelcomeCodeEmployeeList */
export async function findWelcomeCodeEmployeeListUsingPOST1(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponse>('/wework/welcomecode/findWelcomeCodeEmployeeList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询智能欢迎语门店使用范围 POST /wework/welcomecode/findWelcomeCodeShopList */
export async function findWelcomeCodeShopListUsingPOST1(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponse>('/wework/welcomecode/findWelcomeCodeShopList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询智能欢迎语详情 GET /wework/welcomecode/getWelcomeCode */
export async function getWelcomeCodeUsingGET2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getWelcomeCodeUsingGET2Params,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/wework/welcomecode/getWelcomeCode', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 欢迎语文件导入门店 POST /wework/welcomecode/importShopQueryByImportFile */
export async function importShopQueryByImportFileUsingPOST(
  body: string,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/wework/welcomecode/importShopQueryByImportFile', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 欢迎语手动导入门店 POST /wework/welcomecode/importShopQueryByManualEntry */
export async function importShopQueryByManualEntryUsingPOST(
  body: API.GuideImportQuery,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/wework/welcomecode/importShopQueryByManualEntry', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 新增/修改智能欢迎语 POST /wework/welcomecode/saveOrUpdateWelcomeCode */
export async function saveOrUpdateWelcomeCodeUsingPOST1(
  body: API.zhinenghuanyingyushitiduixiang,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/wework/welcomecode/saveOrUpdateWelcomeCode', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
