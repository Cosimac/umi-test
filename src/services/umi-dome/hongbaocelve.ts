// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 红包策略列表 POST /redpack/policy/list */
export async function listUsingPOST15(
  body: API.SearchRequestVOQueryPolicyListVO,
  options?: { [key: string]: any },
) {
  return request<API.TableResponsehongbaocelveDTO>('/redpack/policy/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查看 GET /redpack/policy/queryById */
export async function queryByIdUsingGET1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.queryByIdUsingGET1Params,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResulthongbaocelveDTO>('/redpack/policy/queryById', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 红包策略保存/修改 POST /redpack/policy/saveOrUpdate */
export async function saveOrUpdateUsingPOST4(
  body: API.hongbaocelveDTO,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/redpack/policy/saveOrUpdate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 红包策略修改启用状态 POST /redpack/policy/updateState */
export async function updateStateUsingPOST(
  body: API.hongbaocelvexiugaikaiqizhuangtaiDTO,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/redpack/policy/updateState', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
