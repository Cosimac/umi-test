// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取单个模板 GET /sop/template/get */
export async function TemplateListUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.TemplateListUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultsopmobanxiangqing>('/sop/template/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 点赞 POST /sop/template/like */
export async function LikeTemplateUsingPOST(body: number, options?: { [key: string]: any }) {
  return request<API.BeanCommonResult>('/sop/template/like', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取模版列表 POST /sop/template/list */
export async function TemplateListUsingPOST(
  body: API.BeanTableRequestSOPfenyeqingqiu,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultTableResponsesopmobanxiangqing>('/sop/template/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
