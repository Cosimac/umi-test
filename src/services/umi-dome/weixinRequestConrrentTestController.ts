// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** listATAMetrics1 POST /weixin/test/testRequest */
export async function listATAMetrics1UsingPOST(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/weixin/test/testRequest', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
