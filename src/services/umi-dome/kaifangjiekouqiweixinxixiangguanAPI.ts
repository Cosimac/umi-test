// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 查询企业微信服务商token信息 POST /open/wework/queryServiceToken */
export async function queryServiceTokenUsingPOST(
  body: API.WeWorkServiceTokenRequest,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/open/wework/queryServiceToken', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询企业微信授权信息 POST /open/wework/queryWorkWechatCorp */
export async function queryWorkWechatCorpUsingPOST(
  body: API.WeWorkCorpRequest,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/open/wework/queryWorkWechatCorp', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
