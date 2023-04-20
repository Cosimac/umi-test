// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 增加内容 POST /AdPage/add */
export async function addUsingPOST(body: API.AdPageDTO, options?: { [key: string]: any }) {
  return request<API.CommonResult>('/AdPage/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除消息 GET /AdPage/deleteById */
export async function deleteByIdUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/AdPage/deleteById', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 查看内容详情 GET /AdPage/findById */
export async function findByIdUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.findByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/AdPage/findById', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 创建人列表 GET /AdPage/foundList */
export async function founderListUsingGET(options?: { [key: string]: any }) {
  return request<API.BeanCommonResultListFounderVo>('/AdPage/foundList', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 内容列表 POST /AdPage/list */
export async function listUsingPOST(body: API.TableRequest, options?: { [key: string]: any }) {
  return request<API.CommonResult>('/AdPage/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 置顶消息 GET /AdPage/toTop */
export async function toTopUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.toTopUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/AdPage/toTop', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
