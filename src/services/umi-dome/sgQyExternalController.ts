// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** event GET /qy/external/event/${param0} */
export async function eventUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.eventUsingGETParams,
  body: string,
  options?: { [key: string]: any },
) {
  const { brandId: param0, ...queryParams } = params;
  return request<Record<string, any>>(`/qy/external/event/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** event PUT /qy/external/event/${param0} */
export async function eventUsingPUT(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.eventUsingPUTParams,
  body: string,
  options?: { [key: string]: any },
) {
  const { brandId: param0, ...queryParams } = params;
  return request<Record<string, any>>(`/qy/external/event/${param0}`, {
    method: 'PUT',
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** event POST /qy/external/event/${param0} */
export async function eventUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.eventUsingPOSTParams,
  body: string,
  options?: { [key: string]: any },
) {
  const { brandId: param0, ...queryParams } = params;
  return request<Record<string, any>>(`/qy/external/event/${param0}`, {
    method: 'POST',
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** event DELETE /qy/external/event/${param0} */
export async function eventUsingDELETE(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.eventUsingDELETEParams,
  body: string,
  options?: { [key: string]: any },
) {
  const { brandId: param0, ...queryParams } = params;
  return request<Record<string, any>>(`/qy/external/event/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** event PATCH /qy/external/event/${param0} */
export async function eventUsingPATCH(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.eventUsingPATCHParams,
  body: string,
  options?: { [key: string]: any },
) {
  const { brandId: param0, ...queryParams } = params;
  return request<Record<string, any>>(`/qy/external/event/${param0}`, {
    method: 'PATCH',
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}
