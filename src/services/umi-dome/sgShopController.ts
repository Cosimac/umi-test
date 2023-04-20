// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** findBrandListOnCondition GET /core/sgshop/findBrandListOnCondition */
export async function findBrandListOnConditionUsingGET(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseRecord>('/core/sgshop/findBrandListOnCondition', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findBrandListOnCondition PUT /core/sgshop/findBrandListOnCondition */
export async function findBrandListOnConditionUsingPUT(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseRecord>('/core/sgshop/findBrandListOnCondition', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findBrandListOnCondition POST /core/sgshop/findBrandListOnCondition */
export async function findBrandListOnConditionUsingPOST(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseRecord>('/core/sgshop/findBrandListOnCondition', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findBrandListOnCondition DELETE /core/sgshop/findBrandListOnCondition */
export async function findBrandListOnConditionUsingDELETE(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseRecord>('/core/sgshop/findBrandListOnCondition', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findBrandListOnCondition PATCH /core/sgshop/findBrandListOnCondition */
export async function findBrandListOnConditionUsingPATCH(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseRecord>('/core/sgshop/findBrandListOnCondition', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findGroupShopList POST /core/sgshop/findGroupShopList */
export async function findGroupShopListUsingPOST(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/core/sgshop/findGroupShopList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findIsShopLegal GET /core/sgshop/findIsShopLegal */
export async function findIsShopLegalUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.findIsShopLegalUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/core/sgshop/findIsShopLegal', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** findIsShopLegal PUT /core/sgshop/findIsShopLegal */
export async function findIsShopLegalUsingPUT(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.findIsShopLegalUsingPUTParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/core/sgshop/findIsShopLegal', {
    method: 'PUT',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** findIsShopLegal POST /core/sgshop/findIsShopLegal */
export async function findIsShopLegalUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.findIsShopLegalUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/core/sgshop/findIsShopLegal', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** findIsShopLegal DELETE /core/sgshop/findIsShopLegal */
export async function findIsShopLegalUsingDELETE(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.findIsShopLegalUsingDELETEParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/core/sgshop/findIsShopLegal', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** findIsShopLegal PATCH /core/sgshop/findIsShopLegal */
export async function findIsShopLegalUsingPATCH(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.findIsShopLegalUsingPATCHParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/core/sgshop/findIsShopLegal', {
    method: 'PATCH',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** findShopGrade GET /core/sgshop/findShopGrade */
export async function findShopGradeUsingGET(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/core/sgshop/findShopGrade', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findShopGrade PUT /core/sgshop/findShopGrade */
export async function findShopGradeUsingPUT(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/core/sgshop/findShopGrade', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findShopGrade POST /core/sgshop/findShopGrade */
export async function findShopGradeUsingPOST(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/core/sgshop/findShopGrade', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findShopGrade DELETE /core/sgshop/findShopGrade */
export async function findShopGradeUsingDELETE(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/core/sgshop/findShopGrade', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findShopGrade PATCH /core/sgshop/findShopGrade */
export async function findShopGradeUsingPATCH(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/core/sgshop/findShopGrade', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findShopInfoByIds GET /core/sgshop/findShopInfoByIds */
export async function findShopInfoByIdsUsingGET(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseRecord>('/core/sgshop/findShopInfoByIds', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findShopInfoByIds PUT /core/sgshop/findShopInfoByIds */
export async function findShopInfoByIdsUsingPUT(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseRecord>('/core/sgshop/findShopInfoByIds', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findShopInfoByIds POST /core/sgshop/findShopInfoByIds */
export async function findShopInfoByIdsUsingPOST(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseRecord>('/core/sgshop/findShopInfoByIds', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findShopInfoByIds DELETE /core/sgshop/findShopInfoByIds */
export async function findShopInfoByIdsUsingDELETE(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseRecord>('/core/sgshop/findShopInfoByIds', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findShopInfoByIds PATCH /core/sgshop/findShopInfoByIds */
export async function findShopInfoByIdsUsingPATCH(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseRecord>('/core/sgshop/findShopInfoByIds', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findShopList GET /core/sgshop/findShopList */
export async function findShopListUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.findShopListUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/core/sgshop/findShopList', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** findShopListByShopIds GET /core/sgshop/findShopListByShopIds */
export async function findShopListByShopIdsUsingGET(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/core/sgshop/findShopListByShopIds', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findShopListByShopIds PUT /core/sgshop/findShopListByShopIds */
export async function findShopListByShopIdsUsingPUT(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/core/sgshop/findShopListByShopIds', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findShopListByShopIds POST /core/sgshop/findShopListByShopIds */
export async function findShopListByShopIdsUsingPOST(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/core/sgshop/findShopListByShopIds', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findShopListByShopIds DELETE /core/sgshop/findShopListByShopIds */
export async function findShopListByShopIdsUsingDELETE(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/core/sgshop/findShopListByShopIds', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findShopListByShopIds PATCH /core/sgshop/findShopListByShopIds */
export async function findShopListByShopIdsUsingPATCH(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/core/sgshop/findShopListByShopIds', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findShopListOnCondition GET /core/sgshop/findShopListOnCondition */
export async function findShopListOnConditionUsingGET(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseRecord>('/core/sgshop/findShopListOnCondition', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findShopListOnCondition PUT /core/sgshop/findShopListOnCondition */
export async function findShopListOnConditionUsingPUT(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseRecord>('/core/sgshop/findShopListOnCondition', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findShopListOnCondition POST /core/sgshop/findShopListOnCondition */
export async function findShopListOnConditionUsingPOST(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseRecord>('/core/sgshop/findShopListOnCondition', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findShopListOnCondition DELETE /core/sgshop/findShopListOnCondition */
export async function findShopListOnConditionUsingDELETE(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseRecord>('/core/sgshop/findShopListOnCondition', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findShopListOnCondition PATCH /core/sgshop/findShopListOnCondition */
export async function findShopListOnConditionUsingPATCH(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseRecord>('/core/sgshop/findShopListOnCondition', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findShopPage POST /core/sgshop/findShopPage */
export async function findShopPageUsingPOST(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/core/sgshop/findShopPage', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findShopPageToWelcomeCode POST /core/sgshop/findShopPageToWelcomeCode */
export async function findShopPageToWelcomeCodeUsingPOST(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/core/sgshop/findShopPageToWelcomeCode', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getBrandList GET /core/sgshop/getBrandList */
export async function getBrandListUsingGET(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/core/sgshop/getBrandList', {
    method: 'GET',
    ...(options || {}),
  });
}

/** getBrandList PUT /core/sgshop/getBrandList */
export async function getBrandListUsingPUT(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/core/sgshop/getBrandList', {
    method: 'PUT',
    ...(options || {}),
  });
}

/** getBrandList POST /core/sgshop/getBrandList */
export async function getBrandListUsingPOST(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/core/sgshop/getBrandList', {
    method: 'POST',
    ...(options || {}),
  });
}

/** getBrandList DELETE /core/sgshop/getBrandList */
export async function getBrandListUsingDELETE(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/core/sgshop/getBrandList', {
    method: 'DELETE',
    ...(options || {}),
  });
}

/** getBrandList PATCH /core/sgshop/getBrandList */
export async function getBrandListUsingPATCH(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/core/sgshop/getBrandList', {
    method: 'PATCH',
    ...(options || {}),
  });
}

/** getShopByAccount GET /core/sgshop/getShopByAccount */
export async function getShopByAccountUsingGET(options?: { [key: string]: any }) {
  return request<API.BeanCommonResultListzhanghaoquanxianxiademendian>(
    '/core/sgshop/getShopByAccount',
    {
      method: 'GET',
      ...(options || {}),
    },
  );
}

/** getShopByShopIds GET /core/sgshop/getShopByShopIds */
export async function getShopByShopIdsUsingGET(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/core/sgshop/getShopByShopIds', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getShopByShopIds PUT /core/sgshop/getShopByShopIds */
export async function getShopByShopIdsUsingPUT(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/core/sgshop/getShopByShopIds', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getShopByShopIds POST /core/sgshop/getShopByShopIds */
export async function getShopByShopIdsUsingPOST(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/core/sgshop/getShopByShopIds', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getShopByShopIds DELETE /core/sgshop/getShopByShopIds */
export async function getShopByShopIdsUsingDELETE(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/core/sgshop/getShopByShopIds', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getShopByShopIds PATCH /core/sgshop/getShopByShopIds */
export async function getShopByShopIdsUsingPATCH(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/core/sgshop/getShopByShopIds', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getShopTree GET /core/sgshop/getShopTree */
export async function getShopTreeUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getShopTreeUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/core/sgshop/getShopTree', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** queryShopList GET /core/sgshop/queryShopList */
export async function queryShopListUsingGET(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseRecord>('/core/sgshop/queryShopList', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** queryShopList PUT /core/sgshop/queryShopList */
export async function queryShopListUsingPUT(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseRecord>('/core/sgshop/queryShopList', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** queryShopList POST /core/sgshop/queryShopList */
export async function queryShopListUsingPOST(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseRecord>('/core/sgshop/queryShopList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** queryShopList DELETE /core/sgshop/queryShopList */
export async function queryShopListUsingDELETE(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseRecord>('/core/sgshop/queryShopList', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** queryShopList PATCH /core/sgshop/queryShopList */
export async function queryShopListUsingPATCH(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseRecord>('/core/sgshop/queryShopList', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** shopSyn GET /core/sgshop/shopSyn */
export async function shopSynUsingGET(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/core/sgshop/shopSyn', {
    method: 'GET',
    ...(options || {}),
  });
}
