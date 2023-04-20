// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** findCustomerList GET /guide/guide/findCustomerList */
export async function findCustomerListUsingGET1(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/guide/findCustomerList', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findCustomerList PUT /guide/guide/findCustomerList */
export async function findCustomerListUsingPUT1(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/guide/findCustomerList', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findCustomerList POST /guide/guide/findCustomerList */
export async function findCustomerListUsingPOST1(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/guide/findCustomerList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findCustomerList DELETE /guide/guide/findCustomerList */
export async function findCustomerListUsingDELETE1(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/guide/findCustomerList', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findCustomerList PATCH /guide/guide/findCustomerList */
export async function findCustomerListUsingPATCH1(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/guide/findCustomerList', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findGuideDetail GET /guide/guide/findGuideDetail */
export async function findGuideDetailUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.findGuideDetailUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/guide/findGuideDetail', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据导购id，查询导购列表 POST /guide/guide/findGuideListWithShop */
export async function findEmployeeListUsingPOST(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponse>('/guide/guide/findGuideListWithShop', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findGuideShopList GET /guide/guide/findGuideShopList */
export async function findGuideShopListUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.findGuideShopListUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/guide/guide/findGuideShopList', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** findGuideShopList PUT /guide/guide/findGuideShopList */
export async function findGuideShopListUsingPUT(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.findGuideShopListUsingPUTParams,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/guide/guide/findGuideShopList', {
    method: 'PUT',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** findGuideShopList POST /guide/guide/findGuideShopList */
export async function findGuideShopListUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.findGuideShopListUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/guide/guide/findGuideShopList', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** findGuideShopList DELETE /guide/guide/findGuideShopList */
export async function findGuideShopListUsingDELETE(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.findGuideShopListUsingDELETEParams,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/guide/guide/findGuideShopList', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** findGuideShopList PATCH /guide/guide/findGuideShopList */
export async function findGuideShopListUsingPATCH(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.findGuideShopListUsingPATCHParams,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/guide/guide/findGuideShopList', {
    method: 'PATCH',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** findList GET /guide/guide/findList */
export async function findListUsingGET3(body: API.TableRequest, options?: { [key: string]: any }) {
  return request<API.TableResponseRecord>('/guide/guide/findList', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findList PUT /guide/guide/findList */
export async function findListUsingPUT3(body: API.TableRequest, options?: { [key: string]: any }) {
  return request<API.TableResponseRecord>('/guide/guide/findList', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findList POST /guide/guide/findList */
export async function findListUsingPOST4(body: API.TableRequest, options?: { [key: string]: any }) {
  return request<API.TableResponseRecord>('/guide/guide/findList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findList DELETE /guide/guide/findList */
export async function findListUsingDELETE3(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseRecord>('/guide/guide/findList', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findList PATCH /guide/guide/findList */
export async function findListUsingPATCH3(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseRecord>('/guide/guide/findList', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findManualInputTypeList GET /guide/guide/findManualInputTypeList */
export async function findManualInputTypeListUsingGET(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/guide/guide/findManualInputTypeList', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 根据门店、员工、排除员工筛选出最终结果 POST /guide/guide/findSelectResult */
export async function getSearchResultUsingPOST(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/guide/findSelectResult', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findShopGuide GET /guide/guide/findShopGuide */
export async function findShopGuideUsingGET(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseGuideInfoDTO>('/guide/guide/findShopGuide', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findShopGuide PUT /guide/guide/findShopGuide */
export async function findShopGuideUsingPUT(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseGuideInfoDTO>('/guide/guide/findShopGuide', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findShopGuide POST /guide/guide/findShopGuide */
export async function findShopGuideUsingPOST(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseGuideInfoDTO>('/guide/guide/findShopGuide', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findShopGuide DELETE /guide/guide/findShopGuide */
export async function findShopGuideUsingDELETE(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseGuideInfoDTO>('/guide/guide/findShopGuide', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findShopGuide PATCH /guide/guide/findShopGuide */
export async function findShopGuideUsingPATCH(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseGuideInfoDTO>('/guide/guide/findShopGuide', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findTotalGuide GET /guide/guide/findTotalGuide */
export async function findTotalGuideUsingGET(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/guide/findTotalGuide', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findTotalGuide PUT /guide/guide/findTotalGuide */
export async function findTotalGuideUsingPUT(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/guide/findTotalGuide', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findTotalGuide POST /guide/guide/findTotalGuide */
export async function findTotalGuideUsingPOST(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/guide/findTotalGuide', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findTotalGuide DELETE /guide/guide/findTotalGuide */
export async function findTotalGuideUsingDELETE(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/guide/findTotalGuide', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findTotalGuide PATCH /guide/guide/findTotalGuide */
export async function findTotalGuideUsingPATCH(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/guide/findTotalGuide', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getGuideList GET /guide/guide/getGuideList */
export async function getGuideListUsingGET(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/guide/guide/getGuideList', {
    method: 'GET',
    ...(options || {}),
  });
}

/** getGuideTree GET /guide/guide/getGuideTree */
export async function getGuideTreeUsingGET(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/guide/getGuideTree', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getGuideTree PUT /guide/guide/getGuideTree */
export async function getGuideTreeUsingPUT(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/guide/getGuideTree', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getGuideTree POST /guide/guide/getGuideTree */
export async function getGuideTreeUsingPOST(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/guide/getGuideTree', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getGuideTree DELETE /guide/guide/getGuideTree */
export async function getGuideTreeUsingDELETE(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/guide/getGuideTree', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getGuideTree PATCH /guide/guide/getGuideTree */
export async function getGuideTreeUsingPATCH(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/guide/getGuideTree', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据输入内容搜索门店、员工 GET /guide/guide/getSearchResult */
export async function getSearchResultUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getSearchResultUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/guide/getSearchResult', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getShopAndGuideList GET /guide/guide/getShopAndGuideList */
export async function getShopAndGuideListUsingGET(
  body: API.huiyuanliebiaozujiansousuoshitileiDTO,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/guide/getShopAndGuideList', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getShopAndGuideList PUT /guide/guide/getShopAndGuideList */
export async function getShopAndGuideListUsingPUT(
  body: API.huiyuanliebiaozujiansousuoshitileiDTO,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/guide/getShopAndGuideList', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getShopAndGuideList POST /guide/guide/getShopAndGuideList */
export async function getShopAndGuideListUsingPOST(
  body: API.huiyuanliebiaozujiansousuoshitileiDTO,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/guide/getShopAndGuideList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getShopAndGuideList DELETE /guide/guide/getShopAndGuideList */
export async function getShopAndGuideListUsingDELETE(
  body: API.huiyuanliebiaozujiansousuoshitileiDTO,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/guide/getShopAndGuideList', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getShopAndGuideList PATCH /guide/guide/getShopAndGuideList */
export async function getShopAndGuideListUsingPATCH(
  body: API.huiyuanliebiaozujiansousuoshitileiDTO,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/guide/getShopAndGuideList', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getShopAndGuideTree GET /guide/guide/getShopAndGuideTree */
export async function getShopAndGuideTreeUsingGET(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/guide/getShopAndGuideTree', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getShopAndGuideTree PUT /guide/guide/getShopAndGuideTree */
export async function getShopAndGuideTreeUsingPUT(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/guide/getShopAndGuideTree', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getShopAndGuideTree POST /guide/guide/getShopAndGuideTree */
export async function getShopAndGuideTreeUsingPOST(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/guide/getShopAndGuideTree', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getShopAndGuideTree DELETE /guide/guide/getShopAndGuideTree */
export async function getShopAndGuideTreeUsingDELETE(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/guide/getShopAndGuideTree', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getShopAndGuideTree PATCH /guide/guide/getShopAndGuideTree */
export async function getShopAndGuideTreeUsingPATCH(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/guide/getShopAndGuideTree', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** importGuideQuery POST /guide/guide/importGuideQuery */
export async function importGuideQueryUsingPOST(
  body: API.GuideImportQuery,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/guide/importGuideQuery', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** importGuideQueryByImportFile POST /guide/guide/importGuideQueryByImportFile */
export async function importGuideQueryByImportFileUsingPOST(
  body: string,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/guide/importGuideQueryByImportFile', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** importGuideQueryByManualEntry POST /guide/guide/importGuideQueryByManualEntry */
export async function importGuideQueryByManualEntryUsingPOST(
  body: API.GuideImportQuery,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/guide/importGuideQueryByManualEntry', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 导购列表（只列出权限可见的导购） POST /guide/guide/list */
export async function listUsingPOST6(
  body: API.BeanTableRequestSearchGuideVo,
  options?: { [key: string]: any },
) {
  return request<API.TableResponsedaogoujianyaoxinxi>('/guide/guide/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 当更换员工下的会员为0时,根据门店、员工限制这个更换门店的员工不再展示 POST /guide/guide/noDisplayGuide */
export async function noDisplayGuideUsingPOST(
  body: API.GuideShopChangeRecordQuery,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/guide/noDisplayGuide', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** queryGuideShopList GET /guide/guide/queryGuideShopList */
export async function queryGuideShopListUsingGET(
  body: API.SgGuideShop,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/guide/queryGuideShopList', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** queryGuideShopList PUT /guide/guide/queryGuideShopList */
export async function queryGuideShopListUsingPUT(
  body: API.SgGuideShop,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/guide/queryGuideShopList', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** queryGuideShopList POST /guide/guide/queryGuideShopList */
export async function queryGuideShopListUsingPOST(
  body: API.SgGuideShop,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/guide/queryGuideShopList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** queryGuideShopList DELETE /guide/guide/queryGuideShopList */
export async function queryGuideShopListUsingDELETE(
  body: API.SgGuideShop,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/guide/queryGuideShopList', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** queryGuideShopList PATCH /guide/guide/queryGuideShopList */
export async function queryGuideShopListUsingPATCH(
  body: API.SgGuideShop,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/guide/queryGuideShopList', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** uploadGuideImportFile POST /guide/guide/uploadGuideImportFile */
export async function uploadGuideImportFileUsingPOST(
  body: string,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/guide/uploadGuideImportFile', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
