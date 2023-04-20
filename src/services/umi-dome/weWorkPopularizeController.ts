// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 企微-注册相关的消息 企微-注册相关的消息 GET /wework/popularize/registerMsg */
export async function registerMsgUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.registerMsgUsingGETParams,
  body: string,
  options?: { [key: string]: any },
) {
  return request<string>('/wework/popularize/registerMsg', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    params: {
      ...params,
    },
    data: body,
    ...(options || {}),
  });
}

/** 企微-注册相关的消息 企微-注册相关的消息 POST /wework/popularize/registerMsg */
export async function registerMsgUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.registerMsgUsingPOSTParams,
  body: string,
  options?: { [key: string]: any },
) {
  return request<string>('/wework/popularize/registerMsg', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: {
      ...params,
    },
    data: body,
    ...(options || {}),
  });
}

/** 企微-获取注册链接 企微-获取注册链接 GET /wework/popularize/registerUrl */
export async function getRegisterUrlUsingGET(options?: { [key: string]: any }) {
  return request<any>('/wework/popularize/registerUrl', {
    method: 'GET',
    ...(options || {}),
  });
}
