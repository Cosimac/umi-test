// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** findGoodBankList GET /guide/goods/findGoodBankList */
export async function findGoodBankListUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.findGoodBankListUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/goods/findGoodBankList', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** findGoodBankList PUT /guide/goods/findGoodBankList */
export async function findGoodBankListUsingPUT(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.findGoodBankListUsingPUTParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/goods/findGoodBankList', {
    method: 'PUT',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** findGoodBankList POST /guide/goods/findGoodBankList */
export async function findGoodBankListUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.findGoodBankListUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/goods/findGoodBankList', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** findGoodBankList DELETE /guide/goods/findGoodBankList */
export async function findGoodBankListUsingDELETE(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.findGoodBankListUsingDELETEParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/goods/findGoodBankList', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** findGoodBankList PATCH /guide/goods/findGoodBankList */
export async function findGoodBankListUsingPATCH(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.findGoodBankListUsingPATCHParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/goods/findGoodBankList', {
    method: 'PATCH',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** findMallGoodsList GET /guide/goods/findMallGoodsList */
export async function findMallGoodsListUsingGET(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/goods/findMallGoodsList', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findMallGoodsList PUT /guide/goods/findMallGoodsList */
export async function findMallGoodsListUsingPUT(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/goods/findMallGoodsList', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findMallGoodsList POST /guide/goods/findMallGoodsList */
export async function findMallGoodsListUsingPOST(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/goods/findMallGoodsList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findMallGoodsList DELETE /guide/goods/findMallGoodsList */
export async function findMallGoodsListUsingDELETE(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/goods/findMallGoodsList', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findMallGoodsList PATCH /guide/goods/findMallGoodsList */
export async function findMallGoodsListUsingPATCH(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/goods/findMallGoodsList', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取店铺商品列表 POST /guide/goods/findShopGoodsList */
export async function findShopGoodsListUsingPOST(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/goods/findShopGoodsList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getGoodsCategory GET /guide/goods/getGoodsCategory */
export async function getGoodsCategoryUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getGoodsCategoryUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/goods/getGoodsCategory', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getGoodsCategory PUT /guide/goods/getGoodsCategory */
export async function getGoodsCategoryUsingPUT(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getGoodsCategoryUsingPUTParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/goods/getGoodsCategory', {
    method: 'PUT',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getGoodsCategory POST /guide/goods/getGoodsCategory */
export async function getGoodsCategoryUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getGoodsCategoryUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/goods/getGoodsCategory', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getGoodsCategory DELETE /guide/goods/getGoodsCategory */
export async function getGoodsCategoryUsingDELETE(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getGoodsCategoryUsingDELETEParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/goods/getGoodsCategory', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getGoodsCategory PATCH /guide/goods/getGoodsCategory */
export async function getGoodsCategoryUsingPATCH(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getGoodsCategoryUsingPATCHParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/goods/getGoodsCategory', {
    method: 'PATCH',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
