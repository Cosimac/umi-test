// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 查询集团配置 导购管理后台用于查询集团配置 GET /group/getGroupConfig */
export async function getGroupConfigUsingGET(options?: { [key: string]: any }) {
  return request<API.BeanCommonResultSgGroupConfigDao>('/group/getGroupConfig', {
    method: 'GET',
    ...(options || {}),
  });
}

/** getLogo GET /group/getLogo */
export async function getLogoUsingGET(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/group/getLogo', {
    method: 'GET',
    ...(options || {}),
  });
}

/** getLogo PUT /group/getLogo */
export async function getLogoUsingPUT(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/group/getLogo', {
    method: 'PUT',
    ...(options || {}),
  });
}

/** getLogo POST /group/getLogo */
export async function getLogoUsingPOST(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/group/getLogo', {
    method: 'POST',
    ...(options || {}),
  });
}

/** getLogo DELETE /group/getLogo */
export async function getLogoUsingDELETE(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/group/getLogo', {
    method: 'DELETE',
    ...(options || {}),
  });
}

/** getLogo PATCH /group/getLogo */
export async function getLogoUsingPATCH(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/group/getLogo', {
    method: 'PATCH',
    ...(options || {}),
  });
}

/** queryGroupMsg GET /group/queryGroupMsg */
export async function queryGroupMsgUsingGET(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/group/queryGroupMsg', {
    method: 'GET',
    ...(options || {}),
  });
}

/** queryGroupMsg PUT /group/queryGroupMsg */
export async function queryGroupMsgUsingPUT(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/group/queryGroupMsg', {
    method: 'PUT',
    ...(options || {}),
  });
}

/** queryGroupMsg POST /group/queryGroupMsg */
export async function queryGroupMsgUsingPOST(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/group/queryGroupMsg', {
    method: 'POST',
    ...(options || {}),
  });
}

/** queryGroupMsg DELETE /group/queryGroupMsg */
export async function queryGroupMsgUsingDELETE(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/group/queryGroupMsg', {
    method: 'DELETE',
    ...(options || {}),
  });
}

/** queryGroupMsg PATCH /group/queryGroupMsg */
export async function queryGroupMsgUsingPATCH(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/group/queryGroupMsg', {
    method: 'PATCH',
    ...(options || {}),
  });
}

/** saveLogo GET /group/saveLogo */
export async function saveLogoUsingGET(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/group/saveLogo', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** saveLogo PUT /group/saveLogo */
export async function saveLogoUsingPUT(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/group/saveLogo', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** saveLogo POST /group/saveLogo */
export async function saveLogoUsingPOST(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/group/saveLogo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** saveLogo DELETE /group/saveLogo */
export async function saveLogoUsingDELETE(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/group/saveLogo', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** saveLogo PATCH /group/saveLogo */
export async function saveLogoUsingPATCH(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/group/saveLogo', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
