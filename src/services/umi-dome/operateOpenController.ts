// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** deleteContactWay GET /operate/open/deleteContactWay */
export async function deleteContactWayUsingGET(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/operate/open/deleteContactWay', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteContactWay PUT /operate/open/deleteContactWay */
export async function deleteContactWayUsingPUT(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/operate/open/deleteContactWay', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteContactWay POST /operate/open/deleteContactWay */
export async function deleteContactWayUsingPOST(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/operate/open/deleteContactWay', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteContactWay DELETE /operate/open/deleteContactWay */
export async function deleteContactWayUsingDELETE(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/operate/open/deleteContactWay', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteContactWay PATCH /operate/open/deleteContactWay */
export async function deleteContactWayUsingPATCH(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/operate/open/deleteContactWay', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getContactWay GET /operate/open/getContactWay */
export async function getContactWayUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getContactWayUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/operate/open/getContactWay', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getContactWay PUT /operate/open/getContactWay */
export async function getContactWayUsingPUT(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getContactWayUsingPUTParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/operate/open/getContactWay', {
    method: 'PUT',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getContactWay POST /operate/open/getContactWay */
export async function getContactWayUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getContactWayUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/operate/open/getContactWay', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getContactWay DELETE /operate/open/getContactWay */
export async function getContactWayUsingDELETE(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getContactWayUsingDELETEParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/operate/open/getContactWay', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getContactWay PATCH /operate/open/getContactWay */
export async function getContactWayUsingPATCH(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getContactWayUsingPATCHParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/operate/open/getContactWay', {
    method: 'PATCH',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getContactWayGuideInfo GET /operate/open/getContactWayGuideInfo */
export async function getContactWayGuideInfoUsingGET(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponse>('/operate/open/getContactWayGuideInfo', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getContactWayGuideInfo PUT /operate/open/getContactWayGuideInfo */
export async function getContactWayGuideInfoUsingPUT(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponse>('/operate/open/getContactWayGuideInfo', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getContactWayGuideInfo POST /operate/open/getContactWayGuideInfo */
export async function getContactWayGuideInfoUsingPOST(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponse>('/operate/open/getContactWayGuideInfo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getContactWayGuideInfo DELETE /operate/open/getContactWayGuideInfo */
export async function getContactWayGuideInfoUsingDELETE(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponse>('/operate/open/getContactWayGuideInfo', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getContactWayGuideInfo PATCH /operate/open/getContactWayGuideInfo */
export async function getContactWayGuideInfoUsingPATCH(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponse>('/operate/open/getContactWayGuideInfo', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getGuideInfo GET /operate/open/getGuideInfo */
export async function getGuideInfoUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getGuideInfoUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/operate/open/getGuideInfo', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getGuideInfo PUT /operate/open/getGuideInfo */
export async function getGuideInfoUsingPUT(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getGuideInfoUsingPUTParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/operate/open/getGuideInfo', {
    method: 'PUT',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getGuideInfo POST /operate/open/getGuideInfo */
export async function getGuideInfoUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getGuideInfoUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/operate/open/getGuideInfo', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getGuideInfo DELETE /operate/open/getGuideInfo */
export async function getGuideInfoUsingDELETE(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getGuideInfoUsingDELETEParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/operate/open/getGuideInfo', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getGuideInfo PATCH /operate/open/getGuideInfo */
export async function getGuideInfoUsingPATCH(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getGuideInfoUsingPATCHParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/operate/open/getGuideInfo', {
    method: 'PATCH',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** queryMaterial GET /operate/open/queryMaterial */
export async function queryMaterialUsingGET1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.queryMaterialUsingGET1Params,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/operate/open/queryMaterial', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** queryMaterial PUT /operate/open/queryMaterial */
export async function queryMaterialUsingPUT(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.queryMaterialUsingPUTParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/operate/open/queryMaterial', {
    method: 'PUT',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** queryMaterial POST /operate/open/queryMaterial */
export async function queryMaterialUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.queryMaterialUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/operate/open/queryMaterial', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** queryMaterial DELETE /operate/open/queryMaterial */
export async function queryMaterialUsingDELETE(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.queryMaterialUsingDELETEParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/operate/open/queryMaterial', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** queryMaterial PATCH /operate/open/queryMaterial */
export async function queryMaterialUsingPATCH(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.queryMaterialUsingPATCHParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/operate/open/queryMaterial', {
    method: 'PATCH',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** setContactWay GET /operate/open/setContactWay */
export async function setContactWayUsingGET(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/operate/open/setContactWay', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** setContactWay PUT /operate/open/setContactWay */
export async function setContactWayUsingPUT(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/operate/open/setContactWay', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** setContactWay POST /operate/open/setContactWay */
export async function setContactWayUsingPOST(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/operate/open/setContactWay', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** setContactWay DELETE /operate/open/setContactWay */
export async function setContactWayUsingDELETE(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/operate/open/setContactWay', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** setContactWay PATCH /operate/open/setContactWay */
export async function setContactWayUsingPATCH(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/operate/open/setContactWay', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** updateContactWay GET /operate/open/updateContactWay */
export async function updateContactWayUsingGET(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/operate/open/updateContactWay', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** updateContactWay PUT /operate/open/updateContactWay */
export async function updateContactWayUsingPUT(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/operate/open/updateContactWay', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** updateContactWay POST /operate/open/updateContactWay */
export async function updateContactWayUsingPOST(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/operate/open/updateContactWay', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** updateContactWay DELETE /operate/open/updateContactWay */
export async function updateContactWayUsingDELETE(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/operate/open/updateContactWay', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** updateContactWay PATCH /operate/open/updateContactWay */
export async function updateContactWayUsingPATCH(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/operate/open/updateContactWay', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
