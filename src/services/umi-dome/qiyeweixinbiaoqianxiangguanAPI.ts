// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 查询企业微信标签列表 GET /wework/weworktag/findWeWorkTagList */
export async function findWeWorkTagListUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.findWeWorkTagListUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultListqiweibiaoqianshitiduixiang>(
    '/wework/weworktag/findWeWorkTagList',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 查询企业微信标签列表 POST /wework/weworktag/list */
export async function listUsingPOST22(
  body: API.SearchWeworkTagVo,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultListWeworkTagVo>('/wework/weworktag/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
