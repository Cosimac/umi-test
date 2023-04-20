// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** getShopDetailList POST /wework/welcomecodemsglog/getShopDetailList */
export async function getShopDetailListUsingPOST(
  body: API.BeanTableRequestWelcomeMsgLogDTO,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/wework/welcomecodemsglog/getShopDetailList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 欢迎语日志列表查询 POST /wework/welcomecodemsglog/list */
export async function listUsingPOST23(
  body: API.BeanTableRequestWelcomeMsgLogDTO,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultBeanTableResponseWelcomeMsgLogVo>(
    '/wework/welcomecodemsglog/list',
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

/** queryMsgInfoById GET /wework/welcomecodemsglog/queryMsgInfoById */
export async function queryMsgInfoByIdUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.queryMsgInfoByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultListWeWorkWelcomeCodeMsgDTO>(
    '/wework/welcomecodemsglog/queryMsgInfoById',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}
