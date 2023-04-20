// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** links GET /actuator */
export async function linksUsingGET(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/actuator', {
    method: 'GET',
    ...(options || {}),
  });
}
