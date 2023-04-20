// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** getAuthUrl GET /wework/Auth/authUrl */
export async function getAuthUrlUsingGET1(options?: { [key: string]: any }) {
  return request<any>('/wework/Auth/authUrl', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 企业微信后台推送-授权相关的消息 企业微信后台推送-授权相关的消息 GET /wework/Auth/callbackMsg */
export async function callbackMsgUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.callbackMsgUsingGETParams,
  body: string,
  options?: { [key: string]: any },
) {
  return request<string>('/wework/Auth/callbackMsg', {
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

/** 企业微信后台推送-授权相关的消息 企业微信后台推送-授权相关的消息 POST /wework/Auth/callbackMsg */
export async function callbackMsgUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.callbackMsgUsingPOSTParams,
  body: string,
  options?: { [key: string]: any },
) {
  return request<string>('/wework/Auth/callbackMsg', {
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

/** LoginCallBack GET /wework/Auth/LoginCallBack */
export async function LoginCallBackUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.LoginCallBackUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<string>('/wework/Auth/LoginCallBack', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** wxQRCode GET /wework/Auth/loginUrl */
export async function wxQRCodeUsingGET(options?: { [key: string]: any }) {
  return request<any>('/wework/Auth/loginUrl', {
    method: 'GET',
    ...(options || {}),
  });
}

/** wxWorkAuth GET /wework/Auth/WxWorkAuth */
export async function wxWorkAuthUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.wxWorkAuthUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<any>('/wework/Auth/WxWorkAuth', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
