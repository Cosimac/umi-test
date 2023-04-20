// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** create GET /chatRoomGroup/create */
export async function createUsingGET(
  body: API.ChatRoomGroupConfigVo,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/chatRoomGroup/create', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** create PUT /chatRoomGroup/create */
export async function createUsingPUT(
  body: API.ChatRoomGroupConfigVo,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/chatRoomGroup/create', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** create POST /chatRoomGroup/create */
export async function createUsingPOST(
  body: API.ChatRoomGroupConfigVo,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/chatRoomGroup/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** create DELETE /chatRoomGroup/create */
export async function createUsingDELETE(
  body: API.ChatRoomGroupConfigVo,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/chatRoomGroup/create', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** create PATCH /chatRoomGroup/create */
export async function createUsingPATCH(
  body: API.ChatRoomGroupConfigVo,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/chatRoomGroup/create', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** delete GET /chatRoomGroup/deleteByConfigId */
export async function deleteUsingGET2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteUsingGET2Params,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/chatRoomGroup/deleteByConfigId', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** delete PUT /chatRoomGroup/deleteByConfigId */
export async function deleteUsingPUT1(body: string, options?: { [key: string]: any }) {
  return request<API.CommonResult>('/chatRoomGroup/deleteByConfigId', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** delete POST /chatRoomGroup/deleteByConfigId */
export async function deleteUsingPOST2(body: string, options?: { [key: string]: any }) {
  return request<API.CommonResult>('/chatRoomGroup/deleteByConfigId', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** delete DELETE /chatRoomGroup/deleteByConfigId */
export async function deleteUsingDELETE1(body: string, options?: { [key: string]: any }) {
  return request<API.CommonResult>('/chatRoomGroup/deleteByConfigId', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** delete PATCH /chatRoomGroup/deleteByConfigId */
export async function deleteUsingPATCH1(body: string, options?: { [key: string]: any }) {
  return request<API.CommonResult>('/chatRoomGroup/deleteByConfigId', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** downLoadQrCode GET /chatRoomGroup/downLoad */
export async function downLoadQrCodeUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.downLoadQrCodeUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<any>('/chatRoomGroup/downLoad', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getAllOwner GET /chatRoomGroup/getAllOwner */
export async function getAllOwnerUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getAllOwnerUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/chatRoomGroup/getAllOwner', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 查询详情 GET /chatRoomGroup/getByConfigId */
export async function getByConfigIdUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getByConfigIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/chatRoomGroup/getByConfigId', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** isWhiteList GET /chatRoomGroup/isWhiteList */
export async function isWhiteListUsingGET(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/chatRoomGroup/isWhiteList', {
    method: 'GET',
    ...(options || {}),
  });
}

/** getList GET /chatRoomGroup/list */
export async function getListUsingGET(body: API.TableRequest, options?: { [key: string]: any }) {
  return request<API.TableResponse>('/chatRoomGroup/list', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getList PUT /chatRoomGroup/list */
export async function getListUsingPUT(body: API.TableRequest, options?: { [key: string]: any }) {
  return request<API.TableResponse>('/chatRoomGroup/list', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getList POST /chatRoomGroup/list */
export async function getListUsingPOST(body: API.TableRequest, options?: { [key: string]: any }) {
  return request<API.TableResponse>('/chatRoomGroup/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getList DELETE /chatRoomGroup/list */
export async function getListUsingDELETE(body: API.TableRequest, options?: { [key: string]: any }) {
  return request<API.TableResponse>('/chatRoomGroup/list', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getList PATCH /chatRoomGroup/list */
export async function getListUsingPATCH(body: API.TableRequest, options?: { [key: string]: any }) {
  return request<API.TableResponse>('/chatRoomGroup/list', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
