// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** getList POST /materialAnalysis/getList */
export async function getListUsingPOST1(body: API.TableRequest, options?: { [key: string]: any }) {
  return request<API.CommonResult>('/materialAnalysis/getList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getListById POST /materialAnalysis/getListById */
export async function getListByIdUsingPOST(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/materialAnalysis/getListById', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** listDetailExcelById GET /materialAnalysis/listDetailExcelById */
export async function listDetailExcelByIdUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listDetailExcelByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<any>('/materialAnalysis/listDetailExcelById', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getListExcel GET /materialAnalysis/listExcel */
export async function getListExcelUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getListExcelUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<any>('/materialAnalysis/listExcel', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getListExcelById GET /materialAnalysis/listExcelById */
export async function getListExcelByIdUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getListExcelByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<any>('/materialAnalysis/listExcelById', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
