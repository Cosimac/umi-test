// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取前端的URL地址 POST /liberty/url/appUrl */
export async function appUrlUsingPOST(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/liberty/url/appUrl', {
    method: 'POST',
    ...(options || {}),
  });
}
