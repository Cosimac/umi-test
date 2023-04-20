// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** queryGroupData POST /operate/overview/queryGroupData */
export async function queryGroupDataUsingPOST(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/operate/overview/queryGroupData', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
