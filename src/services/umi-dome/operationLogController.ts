// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** findList GET /guide/operationlog/findList */
export async function findListUsingGET5(body: API.TableRequest, options?: { [key: string]: any }) {
  return request<API.TableResponseRecord>('/guide/operationlog/findList', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findList PUT /guide/operationlog/findList */
export async function findListUsingPUT5(body: API.TableRequest, options?: { [key: string]: any }) {
  return request<API.TableResponseRecord>('/guide/operationlog/findList', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findList POST /guide/operationlog/findList */
export async function findListUsingPOST9(body: API.TableRequest, options?: { [key: string]: any }) {
  return request<API.TableResponseRecord>('/guide/operationlog/findList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findList DELETE /guide/operationlog/findList */
export async function findListUsingDELETE5(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseRecord>('/guide/operationlog/findList', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findList PATCH /guide/operationlog/findList */
export async function findListUsingPATCH5(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseRecord>('/guide/operationlog/findList', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getDetail GET /guide/operationlog/getDetail */
export async function getDetailUsingGET2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getDetailUsingGET2Params,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/operationlog/getDetail', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getDetail PUT /guide/operationlog/getDetail */
export async function getDetailUsingPUT1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getDetailUsingPUT1Params,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/operationlog/getDetail', {
    method: 'PUT',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getDetail POST /guide/operationlog/getDetail */
export async function getDetailUsingPOST1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getDetailUsingPOST1Params,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/operationlog/getDetail', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getDetail DELETE /guide/operationlog/getDetail */
export async function getDetailUsingDELETE1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getDetailUsingDELETE1Params,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/operationlog/getDetail', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getDetail PATCH /guide/operationlog/getDetail */
export async function getDetailUsingPATCH1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getDetailUsingPATCH1Params,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/operationlog/getDetail', {
    method: 'PATCH',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
