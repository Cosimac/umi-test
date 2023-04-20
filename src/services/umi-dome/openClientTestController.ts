// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** customerCountByBirthdayQuery GET /sls/customerCountByBirthdayQuery */
export async function customerCountByBirthdayQueryUsingGET(options?: { [key: string]: any }) {
  return request<string>('/sls/customerCountByBirthdayQuery', {
    method: 'GET',
    ...(options || {}),
  });
}

/** getGradeSystem GET /sls/getGradeSystem */
export async function getGradeSystemUsingGET(options?: { [key: string]: any }) {
  return request<string>('/sls/getGradeSystem', {
    method: 'GET',
    ...(options || {}),
  });
}

/** hello GET /sls/hello1 */
export async function helloUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.helloUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<string>('/sls/hello1', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** hello2 GET /sls/hello2 */
export async function hello2UsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.hello2UsingGETParams,
  options?: { [key: string]: any },
) {
  return request<string>('/sls/hello2', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** hello3 GET /sls/hello3 */
export async function hello3UsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.hello3UsingGETParams,
  options?: { [key: string]: any },
) {
  return request<string>('/sls/hello3', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
