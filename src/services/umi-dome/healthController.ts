// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** health GET /health */
export async function healthUsingGET(options?: { [key: string]: any }) {
  return request<string>('/health', {
    method: 'GET',
    ...(options || {}),
  });
}
