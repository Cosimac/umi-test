// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** casLogin GET /casLogin */
export async function casLoginUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.casLoginUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<string>('/casLogin', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** changePageVersion POST /core/access/changePageVersion */
export async function changePageVersionUsingPOST(
  body: API.biangengyemianbanben,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/core/access/changePageVersion', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** changeView GET /core/access/changeView */
export async function changeViewUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.changeViewUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/core/access/changeView', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** changeView PUT /core/access/changeView */
export async function changeViewUsingPUT(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.changeViewUsingPUTParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/core/access/changeView', {
    method: 'PUT',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** changeView POST /core/access/changeView */
export async function changeViewUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.changeViewUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/core/access/changeView', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** changeView DELETE /core/access/changeView */
export async function changeViewUsingDELETE(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.changeViewUsingDELETEParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/core/access/changeView', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** changeView PATCH /core/access/changeView */
export async function changeViewUsingPATCH(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.changeViewUsingPATCHParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/core/access/changeView', {
    method: 'PATCH',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** exit GET /core/access/exit */
export async function exitUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.exitUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/core/access/exit', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** exit PUT /core/access/exit */
export async function exitUsingPUT(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.exitUsingPUTParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/core/access/exit', {
    method: 'PUT',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** exit POST /core/access/exit */
export async function exitUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.exitUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/core/access/exit', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** exit DELETE /core/access/exit */
export async function exitUsingDELETE(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.exitUsingDELETEParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/core/access/exit', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** exit PATCH /core/access/exit */
export async function exitUsingPATCH(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.exitUsingPATCHParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/core/access/exit', {
    method: 'PATCH',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** areaTree GET /core/areaTree */
export async function areaTreeUsingGET(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/core/areaTree', {
    method: 'GET',
    ...(options || {}),
  });
}

/** findExcelLoginIsOk GET /core/findExcelLoginIsOk */
export async function findExcelLoginIsOkUsingGET(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/core/findExcelLoginIsOk', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findExcelLoginIsOk PUT /core/findExcelLoginIsOk */
export async function findExcelLoginIsOkUsingPUT(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/core/findExcelLoginIsOk', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findExcelLoginIsOk POST /core/findExcelLoginIsOk */
export async function findExcelLoginIsOkUsingPOST(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/core/findExcelLoginIsOk', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findExcelLoginIsOk DELETE /core/findExcelLoginIsOk */
export async function findExcelLoginIsOkUsingDELETE(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/core/findExcelLoginIsOk', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findExcelLoginIsOk PATCH /core/findExcelLoginIsOk */
export async function findExcelLoginIsOkUsingPATCH(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/core/findExcelLoginIsOk', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findExcelLoginLog GET /core/findExcelLoginLog */
export async function findExcelLoginLogUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.findExcelLoginLogUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<any>('/core/findExcelLoginLog', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** findLoginList GET /core/findLoginList */
export async function findLoginListUsingGET(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseRecord>('/core/findLoginList', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findLoginList PUT /core/findLoginList */
export async function findLoginListUsingPUT(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseRecord>('/core/findLoginList', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findLoginList POST /core/findLoginList */
export async function findLoginListUsingPOST(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseRecord>('/core/findLoginList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findLoginList DELETE /core/findLoginList */
export async function findLoginListUsingDELETE(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseRecord>('/core/findLoginList', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findLoginList PATCH /core/findLoginList */
export async function findLoginListUsingPATCH(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseRecord>('/core/findLoginList', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getCloudPlatformAddress GET /getCloudPlatformAddress */
export async function getCloudPlatformAddressUsingGET(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/getCloudPlatformAddress', {
    method: 'GET',
    ...(options || {}),
  });
}

/** getSession GET /getSession */
export async function getSessionUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getSessionUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/getSession', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getSession PUT /getSession */
export async function getSessionUsingPUT(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getSessionUsingPUTParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/getSession', {
    method: 'PUT',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getSession POST /getSession */
export async function getSessionUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getSessionUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/getSession', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getSession DELETE /getSession */
export async function getSessionUsingDELETE(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getSessionUsingDELETEParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/getSession', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getSession PATCH /getSession */
export async function getSessionUsingPATCH(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getSessionUsingPATCHParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/getSession', {
    method: 'PATCH',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** loginTest GET /loginTest */
export async function loginTestUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.loginTestUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/loginTest', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** loginTest PUT /loginTest */
export async function loginTestUsingPUT(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.loginTestUsingPUTParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/loginTest', {
    method: 'PUT',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** loginTest POST /loginTest */
export async function loginTestUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.loginTestUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/loginTest', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** loginTest DELETE /loginTest */
export async function loginTestUsingDELETE(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.loginTestUsingDELETEParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/loginTest', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** loginTest PATCH /loginTest */
export async function loginTestUsingPATCH(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.loginTestUsingPATCHParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/loginTest', {
    method: 'PATCH',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
