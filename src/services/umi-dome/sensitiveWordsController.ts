// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 增加关键词 GET /guide/sensitiveWords/add */
export async function addUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.addUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/sensitiveWords/add', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 敏感词内容列表 POST /guide/sensitiveWords/contentList */
export async function contentListUsingPOST(
  body: API.SaveTalkPageQuery,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/sensitiveWords/contentList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除关键词 GET /guide/sensitiveWords/delete */
export async function deleteUsingGET3(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteUsingGET3Params,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/sensitiveWords/delete', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 查询敏感词列表 POST /guide/sensitiveWords/list */
export async function listUsingPOST14(
  body: API.SaveTalkPageQuery,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/sensitiveWords/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
