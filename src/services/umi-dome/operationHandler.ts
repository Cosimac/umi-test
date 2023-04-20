// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** handle GET /actuator/health */
export async function handleUsingGET(body: Record<string, any>, options?: { [key: string]: any }) {
  return request<Record<string, any>>('/actuator/health', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** handle GET /actuator/health/&#42;&#42; */
export async function handleUsingGET1(body: Record<string, any>, options?: { [key: string]: any }) {
  return request<Record<string, any>>('/actuator/health/**', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** handle GET /actuator/info */
export async function handleUsingGET2(body: Record<string, any>, options?: { [key: string]: any }) {
  return request<Record<string, any>>('/actuator/info', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
