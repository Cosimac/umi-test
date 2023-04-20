// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** deleteMenu GET /operate/action/deleteMenu */
export async function deleteMenuUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteMenuUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/operate/action/deleteMenu', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** deleteMenu PUT /operate/action/deleteMenu */
export async function deleteMenuUsingPUT(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteMenuUsingPUTParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/operate/action/deleteMenu', {
    method: 'PUT',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** deleteMenu POST /operate/action/deleteMenu */
export async function deleteMenuUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteMenuUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/operate/action/deleteMenu', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** deleteMenu DELETE /operate/action/deleteMenu */
export async function deleteMenuUsingDELETE(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteMenuUsingDELETEParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/operate/action/deleteMenu', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** deleteMenu PATCH /operate/action/deleteMenu */
export async function deleteMenuUsingPATCH(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteMenuUsingPATCHParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/operate/action/deleteMenu', {
    method: 'PATCH',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** saveOrUpdateMenu GET /operate/action/saveOrUpdateMenu */
export async function saveOrUpdateMenuUsingGET(
  body: API.SgOperateMenuDao,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/operate/action/saveOrUpdateMenu', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** saveOrUpdateMenu PUT /operate/action/saveOrUpdateMenu */
export async function saveOrUpdateMenuUsingPUT(
  body: API.SgOperateMenuDao,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/operate/action/saveOrUpdateMenu', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** saveOrUpdateMenu POST /operate/action/saveOrUpdateMenu */
export async function saveOrUpdateMenuUsingPOST(
  body: API.SgOperateMenuDao,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/operate/action/saveOrUpdateMenu', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** saveOrUpdateMenu DELETE /operate/action/saveOrUpdateMenu */
export async function saveOrUpdateMenuUsingDELETE(
  body: API.SgOperateMenuDao,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/operate/action/saveOrUpdateMenu', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** saveOrUpdateMenu PATCH /operate/action/saveOrUpdateMenu */
export async function saveOrUpdateMenuUsingPATCH(
  body: API.SgOperateMenuDao,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/operate/action/saveOrUpdateMenu', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getSession GET /operate/getSession */
export async function getSessionUsingGET1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getSessionUsingGET1Params,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/operate/getSession', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getSession PUT /operate/getSession */
export async function getSessionUsingPUT1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getSessionUsingPUT1Params,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/operate/getSession', {
    method: 'PUT',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getSession POST /operate/getSession */
export async function getSessionUsingPOST1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getSessionUsingPOST1Params,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/operate/getSession', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getSession DELETE /operate/getSession */
export async function getSessionUsingDELETE1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getSessionUsingDELETE1Params,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/operate/getSession', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getSession PATCH /operate/getSession */
export async function getSessionUsingPATCH1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getSessionUsingPATCH1Params,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/operate/getSession', {
    method: 'PATCH',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** login GET /operate/login */
export async function loginUsingGET(body: Record<string, any>, options?: { [key: string]: any }) {
  return request<API.CommonResult>('/operate/login', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** login PUT /operate/login */
export async function loginUsingPUT(body: Record<string, any>, options?: { [key: string]: any }) {
  return request<API.CommonResult>('/operate/login', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** login POST /operate/login */
export async function loginUsingPOST(body: Record<string, any>, options?: { [key: string]: any }) {
  return request<API.CommonResult>('/operate/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** login DELETE /operate/login */
export async function loginUsingDELETE(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/operate/login', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** login PATCH /operate/login */
export async function loginUsingPATCH(body: Record<string, any>, options?: { [key: string]: any }) {
  return request<API.CommonResult>('/operate/login', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
