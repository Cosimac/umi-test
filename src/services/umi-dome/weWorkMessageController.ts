// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 企业微信-消息回调 企业微信-消息回调 GET /wework/weworkmessage/handle */
export async function handleUsingGET3(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.handleUsingGET3Params,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/wework/weworkmessage/handle', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 企业微信-消息回调 企业微信-消息回调 POST /wework/weworkmessage/handle */
export async function handleUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.handleUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/wework/weworkmessage/handle', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 企业微信-消息回调 企业微信-消息回调 GET /wework/weworkmessage/handle/${param0} */
export async function handleUsingGET4(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.handleUsingGET4Params,
  options?: { [key: string]: any },
) {
  const { agentId: param0, ...queryParams } = params;
  return request<API.CommonResult>(`/wework/weworkmessage/handle/${param0}`, {
    method: 'GET',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 企业微信-消息回调 企业微信-消息回调 POST /wework/weworkmessage/handle/${param0} */
export async function handleUsingPOST1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.handleUsingPOST1Params,
  options?: { [key: string]: any },
) {
  const { agentId: param0, ...queryParams } = params;
  return request<API.CommonResult>(`/wework/weworkmessage/handle/${param0}`, {
    method: 'POST',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}
