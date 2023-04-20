// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取企业微信侧边栏配置 POST /wework/config/findWeWorkSidebarConfig */
export async function findWeWorkSidebarConfigUsingPOST7(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/wework/config/findWeWorkSidebarConfig', {
    method: 'POST',
    ...(options || {}),
  });
}
