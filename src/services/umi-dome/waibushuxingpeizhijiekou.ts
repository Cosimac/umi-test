// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 添加接口 POST /externalProfile/add */
export async function addUsingPOST3(
  body: API.ExternalProFileDTO,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/externalProfile/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除接口 GET /externalProfile/delById */
export async function delByIdUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.delByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/externalProfile/delById', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 详情接口 GET /externalProfile/findById */
export async function findByIdUsingGET2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.findByIdUsingGET2Params,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/externalProfile/findById', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 列表接口 POST /externalProfile/list */
export async function listUsingPOST20(
  body: API.ExternalProFileQuery,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/externalProfile/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 同步成员配置接口 GET /externalProfile/sync */
export async function syncByIdUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.syncByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/externalProfile/sync', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
