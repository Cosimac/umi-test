// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** findByGuideIds GET /core/user/findByGuideIds */
export async function findByGuideIdsUsingGET(
  body: API.daogouyuangongliebiaovo,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/core/user/findByGuideIds', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findByGuideIds PUT /core/user/findByGuideIds */
export async function findByGuideIdsUsingPUT(
  body: API.daogouyuangongliebiaovo,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/core/user/findByGuideIds', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findByGuideIds POST /core/user/findByGuideIds */
export async function findByGuideIdsUsingPOST(
  body: API.daogouyuangongliebiaovo,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/core/user/findByGuideIds', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findByGuideIds DELETE /core/user/findByGuideIds */
export async function findByGuideIdsUsingDELETE(
  body: API.daogouyuangongliebiaovo,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/core/user/findByGuideIds', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findByGuideIds PATCH /core/user/findByGuideIds */
export async function findByGuideIdsUsingPATCH(
  body: API.daogouyuangongliebiaovo,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/core/user/findByGuideIds', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findByUserIds GET /core/user/findByUserIds */
export async function findByUserIdsUsingGET(
  body: API.daogouyuangongliebiaovo,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/core/user/findByUserIds', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findByUserIds PUT /core/user/findByUserIds */
export async function findByUserIdsUsingPUT(
  body: API.daogouyuangongliebiaovo,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/core/user/findByUserIds', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findByUserIds POST /core/user/findByUserIds */
export async function findByUserIdsUsingPOST(
  body: API.daogouyuangongliebiaovo,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/core/user/findByUserIds', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findByUserIds DELETE /core/user/findByUserIds */
export async function findByUserIdsUsingDELETE(
  body: API.daogouyuangongliebiaovo,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/core/user/findByUserIds', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findByUserIds PATCH /core/user/findByUserIds */
export async function findByUserIdsUsingPATCH(
  body: API.daogouyuangongliebiaovo,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/core/user/findByUserIds', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getUsersAndDepartmentsByShopId GET /core/user/getUsersAndDepartmentsByShopId */
export async function getUsersAndDepartmentsByShopIdUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getUsersAndDepartmentsByShopIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/core/user/getUsersAndDepartmentsByShopId', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getUsersAndDepartmentsByShopId PUT /core/user/getUsersAndDepartmentsByShopId */
export async function getUsersAndDepartmentsByShopIdUsingPUT(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getUsersAndDepartmentsByShopIdUsingPUTParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/core/user/getUsersAndDepartmentsByShopId', {
    method: 'PUT',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getUsersAndDepartmentsByShopId POST /core/user/getUsersAndDepartmentsByShopId */
export async function getUsersAndDepartmentsByShopIdUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getUsersAndDepartmentsByShopIdUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/core/user/getUsersAndDepartmentsByShopId', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getUsersAndDepartmentsByShopId DELETE /core/user/getUsersAndDepartmentsByShopId */
export async function getUsersAndDepartmentsByShopIdUsingDELETE(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getUsersAndDepartmentsByShopIdUsingDELETEParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/core/user/getUsersAndDepartmentsByShopId', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getUsersAndDepartmentsByShopId PATCH /core/user/getUsersAndDepartmentsByShopId */
export async function getUsersAndDepartmentsByShopIdUsingPATCH(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getUsersAndDepartmentsByShopIdUsingPATCHParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/core/user/getUsersAndDepartmentsByShopId', {
    method: 'PATCH',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** queryBrandUserTreeByYun GET /core/user/queryBrandUserTreeByYun */
export async function queryBrandUserTreeByYunUsingGET(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/core/user/queryBrandUserTreeByYun', {
    method: 'GET',
    ...(options || {}),
  });
}

/** queryBrandUserTreeByYun PUT /core/user/queryBrandUserTreeByYun */
export async function queryBrandUserTreeByYunUsingPUT(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/core/user/queryBrandUserTreeByYun', {
    method: 'PUT',
    ...(options || {}),
  });
}

/** queryBrandUserTreeByYun POST /core/user/queryBrandUserTreeByYun */
export async function queryBrandUserTreeByYunUsingPOST(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/core/user/queryBrandUserTreeByYun', {
    method: 'POST',
    ...(options || {}),
  });
}

/** queryBrandUserTreeByYun DELETE /core/user/queryBrandUserTreeByYun */
export async function queryBrandUserTreeByYunUsingDELETE(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/core/user/queryBrandUserTreeByYun', {
    method: 'DELETE',
    ...(options || {}),
  });
}

/** queryBrandUserTreeByYun PATCH /core/user/queryBrandUserTreeByYun */
export async function queryBrandUserTreeByYunUsingPATCH(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/core/user/queryBrandUserTreeByYun', {
    method: 'PATCH',
    ...(options || {}),
  });
}

/** queryGuidePage GET /core/user/queryGuidePage */
export async function queryGuidePageUsingGET(
  body: API.daogouyuangongliebiaovo,
  options?: { [key: string]: any },
) {
  return request<API.TableResponse>('/core/user/queryGuidePage', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** queryGuidePage PUT /core/user/queryGuidePage */
export async function queryGuidePageUsingPUT(
  body: API.daogouyuangongliebiaovo,
  options?: { [key: string]: any },
) {
  return request<API.TableResponse>('/core/user/queryGuidePage', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** queryGuidePage POST /core/user/queryGuidePage */
export async function queryGuidePageUsingPOST(
  body: API.daogouyuangongliebiaovo,
  options?: { [key: string]: any },
) {
  return request<API.TableResponse>('/core/user/queryGuidePage', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** queryGuidePage DELETE /core/user/queryGuidePage */
export async function queryGuidePageUsingDELETE(
  body: API.daogouyuangongliebiaovo,
  options?: { [key: string]: any },
) {
  return request<API.TableResponse>('/core/user/queryGuidePage', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** queryGuidePage PATCH /core/user/queryGuidePage */
export async function queryGuidePageUsingPATCH(
  body: API.daogouyuangongliebiaovo,
  options?: { [key: string]: any },
) {
  return request<API.TableResponse>('/core/user/queryGuidePage', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** queryGuidePageByUserId GET /core/user/queryGuidePageByUserId */
export async function queryGuidePageByUserIdUsingGET(
  body: API.daogouyuangongliebiaovo,
  options?: { [key: string]: any },
) {
  return request<API.TableResponse>('/core/user/queryGuidePageByUserId', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** queryGuidePageByUserId PUT /core/user/queryGuidePageByUserId */
export async function queryGuidePageByUserIdUsingPUT(
  body: API.daogouyuangongliebiaovo,
  options?: { [key: string]: any },
) {
  return request<API.TableResponse>('/core/user/queryGuidePageByUserId', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** queryGuidePageByUserId POST /core/user/queryGuidePageByUserId */
export async function queryGuidePageByUserIdUsingPOST(
  body: API.daogouyuangongliebiaovo,
  options?: { [key: string]: any },
) {
  return request<API.TableResponse>('/core/user/queryGuidePageByUserId', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** queryGuidePageByUserId DELETE /core/user/queryGuidePageByUserId */
export async function queryGuidePageByUserIdUsingDELETE(
  body: API.daogouyuangongliebiaovo,
  options?: { [key: string]: any },
) {
  return request<API.TableResponse>('/core/user/queryGuidePageByUserId', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** queryGuidePageByUserId PATCH /core/user/queryGuidePageByUserId */
export async function queryGuidePageByUserIdUsingPATCH(
  body: API.daogouyuangongliebiaovo,
  options?: { [key: string]: any },
) {
  return request<API.TableResponse>('/core/user/queryGuidePageByUserId', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** queryShopUserTreeByYun GET /core/user/queryShopUserTreeByYun */
export async function queryShopUserTreeByYunUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.queryShopUserTreeByYunUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/core/user/queryShopUserTreeByYun', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** queryShopUserTreeByYun PUT /core/user/queryShopUserTreeByYun */
export async function queryShopUserTreeByYunUsingPUT(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.queryShopUserTreeByYunUsingPUTParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/core/user/queryShopUserTreeByYun', {
    method: 'PUT',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** queryShopUserTreeByYun POST /core/user/queryShopUserTreeByYun */
export async function queryShopUserTreeByYunUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.queryShopUserTreeByYunUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/core/user/queryShopUserTreeByYun', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** queryShopUserTreeByYun DELETE /core/user/queryShopUserTreeByYun */
export async function queryShopUserTreeByYunUsingDELETE(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.queryShopUserTreeByYunUsingDELETEParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/core/user/queryShopUserTreeByYun', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** queryShopUserTreeByYun PATCH /core/user/queryShopUserTreeByYun */
export async function queryShopUserTreeByYunUsingPATCH(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.queryShopUserTreeByYunUsingPATCHParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/core/user/queryShopUserTreeByYun', {
    method: 'PATCH',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** queryUserTreeByYun GET /core/user/queryUserTreeByYun */
export async function queryUserTreeByYunUsingGET(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/core/user/queryUserTreeByYun', {
    method: 'GET',
    ...(options || {}),
  });
}

/** queryUserTreeByYun PUT /core/user/queryUserTreeByYun */
export async function queryUserTreeByYunUsingPUT(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/core/user/queryUserTreeByYun', {
    method: 'PUT',
    ...(options || {}),
  });
}

/** queryUserTreeByYun POST /core/user/queryUserTreeByYun */
export async function queryUserTreeByYunUsingPOST(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/core/user/queryUserTreeByYun', {
    method: 'POST',
    ...(options || {}),
  });
}

/** queryUserTreeByYun DELETE /core/user/queryUserTreeByYun */
export async function queryUserTreeByYunUsingDELETE(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/core/user/queryUserTreeByYun', {
    method: 'DELETE',
    ...(options || {}),
  });
}

/** queryUserTreeByYun PATCH /core/user/queryUserTreeByYun */
export async function queryUserTreeByYunUsingPATCH(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/core/user/queryUserTreeByYun', {
    method: 'PATCH',
    ...(options || {}),
  });
}

/** 解析后台session GET /core/user/session */
export async function sessionUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.sessionUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/core/user/session', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 解析小程序 token GET /core/user/token */
export async function tokenUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.tokenUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/core/user/token', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
