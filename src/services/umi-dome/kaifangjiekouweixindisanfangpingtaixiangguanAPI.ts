// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取第三方平台token POST /open/mp/getMpComponentToken */
export async function getMpComponentTokenUsingPOST7(
  body: API.GetMpComponentTokenRequest,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultMpComponentTokenVo>('/open/mp/getMpComponentToken', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 上报微信第三方平台授权结果 POST /open/mp/reportMpComponentAuth */
export async function reportMpComponentAuthUsingPOST7(
  body: API.ReportMpComponentAuthRequest,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResult>('/open/mp/reportMpComponentAuth', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
