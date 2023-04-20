// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** deleteByIds GET /guide/sgmoreaccount/deleteByIds */
export async function deleteByIdsUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteByIdsUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/sgmoreaccount/deleteByIds', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** deleteByIds PUT /guide/sgmoreaccount/deleteByIds */
export async function deleteByIdsUsingPUT(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteByIdsUsingPUTParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/sgmoreaccount/deleteByIds', {
    method: 'PUT',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** deleteByIds POST /guide/sgmoreaccount/deleteByIds */
export async function deleteByIdsUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteByIdsUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/sgmoreaccount/deleteByIds', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** deleteByIds DELETE /guide/sgmoreaccount/deleteByIds */
export async function deleteByIdsUsingDELETE(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteByIdsUsingDELETEParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/sgmoreaccount/deleteByIds', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** deleteByIds PATCH /guide/sgmoreaccount/deleteByIds */
export async function deleteByIdsUsingPATCH(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteByIdsUsingPATCHParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/sgmoreaccount/deleteByIds', {
    method: 'PATCH',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** findList GET /guide/sgmoreaccount/findList */
export async function findListUsingGET10(body: API.TableRequest, options?: { [key: string]: any }) {
  return request<API.TableResponseRecord>('/guide/sgmoreaccount/findList', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findList PUT /guide/sgmoreaccount/findList */
export async function findListUsingPUT10(body: API.TableRequest, options?: { [key: string]: any }) {
  return request<API.TableResponseRecord>('/guide/sgmoreaccount/findList', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findList POST /guide/sgmoreaccount/findList */
export async function findListUsingPOST14(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseRecord>('/guide/sgmoreaccount/findList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findList DELETE /guide/sgmoreaccount/findList */
export async function findListUsingDELETE10(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseRecord>('/guide/sgmoreaccount/findList', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findList PATCH /guide/sgmoreaccount/findList */
export async function findListUsingPATCH10(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseRecord>('/guide/sgmoreaccount/findList', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getMoreAccountByWeight GET /guide/sgmoreaccount/getMoreAccountByWeight */
export async function getMoreAccountByWeightUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getMoreAccountByWeightUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/sgmoreaccount/getMoreAccountByWeight', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getMoreAccountByWeight PUT /guide/sgmoreaccount/getMoreAccountByWeight */
export async function getMoreAccountByWeightUsingPUT(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getMoreAccountByWeightUsingPUTParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/sgmoreaccount/getMoreAccountByWeight', {
    method: 'PUT',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getMoreAccountByWeight POST /guide/sgmoreaccount/getMoreAccountByWeight */
export async function getMoreAccountByWeightUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getMoreAccountByWeightUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/sgmoreaccount/getMoreAccountByWeight', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getMoreAccountByWeight DELETE /guide/sgmoreaccount/getMoreAccountByWeight */
export async function getMoreAccountByWeightUsingDELETE(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getMoreAccountByWeightUsingDELETEParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/sgmoreaccount/getMoreAccountByWeight', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getMoreAccountByWeight PATCH /guide/sgmoreaccount/getMoreAccountByWeight */
export async function getMoreAccountByWeightUsingPATCH(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getMoreAccountByWeightUsingPATCHParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/sgmoreaccount/getMoreAccountByWeight', {
    method: 'PATCH',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** updateCustomer GET /guide/sgmoreaccount/updateCustomer */
export async function updateCustomerUsingGET(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/sgmoreaccount/updateCustomer', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** updateCustomer PUT /guide/sgmoreaccount/updateCustomer */
export async function updateCustomerUsingPUT(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/sgmoreaccount/updateCustomer', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** updateCustomer POST /guide/sgmoreaccount/updateCustomer */
export async function updateCustomerUsingPOST(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/sgmoreaccount/updateCustomer', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** updateCustomer DELETE /guide/sgmoreaccount/updateCustomer */
export async function updateCustomerUsingDELETE(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/sgmoreaccount/updateCustomer', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** updateCustomer PATCH /guide/sgmoreaccount/updateCustomer */
export async function updateCustomerUsingPATCH(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/sgmoreaccount/updateCustomer', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** updateMoreAccount GET /guide/sgmoreaccount/updateMoreAccount */
export async function updateMoreAccountUsingGET(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/sgmoreaccount/updateMoreAccount', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** updateMoreAccount PUT /guide/sgmoreaccount/updateMoreAccount */
export async function updateMoreAccountUsingPUT(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/sgmoreaccount/updateMoreAccount', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** updateMoreAccount POST /guide/sgmoreaccount/updateMoreAccount */
export async function updateMoreAccountUsingPOST(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/sgmoreaccount/updateMoreAccount', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** updateMoreAccount DELETE /guide/sgmoreaccount/updateMoreAccount */
export async function updateMoreAccountUsingDELETE(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/sgmoreaccount/updateMoreAccount', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** updateMoreAccount PATCH /guide/sgmoreaccount/updateMoreAccount */
export async function updateMoreAccountUsingPATCH(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/sgmoreaccount/updateMoreAccount', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** uploadFile GET /guide/sgmoreaccount/uploadFile/${param0} */
export async function uploadFileUsingGET1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.uploadFileUsingGET1Params,
  body: string,
  options?: { [key: string]: any },
) {
  const { module: param0, ...queryParams } = params;
  return request<API.CommonResult>(`/guide/sgmoreaccount/uploadFile/${param0}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** uploadFile PUT /guide/sgmoreaccount/uploadFile/${param0} */
export async function uploadFileUsingPUT1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.uploadFileUsingPUT1Params,
  body: string,
  options?: { [key: string]: any },
) {
  const { module: param0, ...queryParams } = params;
  return request<API.CommonResult>(`/guide/sgmoreaccount/uploadFile/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** uploadFile POST /guide/sgmoreaccount/uploadFile/${param0} */
export async function uploadFileUsingPOST1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.uploadFileUsingPOST1Params,
  body: string,
  options?: { [key: string]: any },
) {
  const { module: param0, ...queryParams } = params;
  return request<API.CommonResult>(`/guide/sgmoreaccount/uploadFile/${param0}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** uploadFile DELETE /guide/sgmoreaccount/uploadFile/${param0} */
export async function uploadFileUsingDELETE1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.uploadFileUsingDELETE1Params,
  body: string,
  options?: { [key: string]: any },
) {
  const { module: param0, ...queryParams } = params;
  return request<API.CommonResult>(`/guide/sgmoreaccount/uploadFile/${param0}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** uploadFile PATCH /guide/sgmoreaccount/uploadFile/${param0} */
export async function uploadFileUsingPATCH1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.uploadFileUsingPATCH1Params,
  body: string,
  options?: { [key: string]: any },
) {
  const { module: param0, ...queryParams } = params;
  return request<API.CommonResult>(`/guide/sgmoreaccount/uploadFile/${param0}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}
