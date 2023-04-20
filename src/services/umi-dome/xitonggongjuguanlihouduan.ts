// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 批量解密脱敏数据 导购管理后台用于批量解密脱敏数据. POST /core/common/batchDecryptData */
export async function batchDecryptDataUsingPOST(
  body: API.jiamiduixiangDTO[],
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/core/common/batchDecryptData', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取客服精灵地址 GET /core/common/findCustomerServiceUrl */
export async function findCustomerServiceUrlUsingGET7(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/core/common/findCustomerServiceUrl', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取当前登录账号权限下的商城列表 GET /core/common/findLoginMallList */
export async function findLoginMallListUsingGET7(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/core/common/findLoginMallList', {
    method: 'GET',
    ...(options || {}),
  });
}

/** findViewListByAreaId GET /core/common/findViewListByAreaId */
export async function findViewListByAreaIdUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.findViewListByAreaIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultListViewDTO>('/core/common/findViewListByAreaId', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getCareTypes GET /core/common/getCareTypes */
export async function getCareTypesUsingGET(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/core/common/getCareTypes', {
    method: 'GET',
    ...(options || {}),
  });
}

/** getCareTypes PUT /core/common/getCareTypes */
export async function getCareTypesUsingPUT(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/core/common/getCareTypes', {
    method: 'PUT',
    ...(options || {}),
  });
}

/** getCareTypes POST /core/common/getCareTypes */
export async function getCareTypesUsingPOST(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/core/common/getCareTypes', {
    method: 'POST',
    ...(options || {}),
  });
}

/** getCareTypes DELETE /core/common/getCareTypes */
export async function getCareTypesUsingDELETE(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/core/common/getCareTypes', {
    method: 'DELETE',
    ...(options || {}),
  });
}

/** getCareTypes PATCH /core/common/getCareTypes */
export async function getCareTypesUsingPATCH(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/core/common/getCareTypes', {
    method: 'PATCH',
    ...(options || {}),
  });
}

/** 解密脱敏数据 导购管理后台用于解密脱敏数据. GET /core/common/getDecryptData */
export async function getDecryptDataUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getDecryptDataUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/core/common/getDecryptData', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 查询登陆账号 GET /core/common/getLoginAccount */
export async function getLoginAccountUsingGET(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/core/common/getLoginAccount', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 查询登陆账号 PUT /core/common/getLoginAccount */
export async function getLoginAccountUsingPUT(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/core/common/getLoginAccount', {
    method: 'PUT',
    ...(options || {}),
  });
}

/** 查询登陆账号 POST /core/common/getLoginAccount */
export async function getLoginAccountUsingPOST(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/core/common/getLoginAccount', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 查询登陆账号 DELETE /core/common/getLoginAccount */
export async function getLoginAccountUsingDELETE(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/core/common/getLoginAccount', {
    method: 'DELETE',
    ...(options || {}),
  });
}

/** 查询登陆账号 PATCH /core/common/getLoginAccount */
export async function getLoginAccountUsingPATCH(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/core/common/getLoginAccount', {
    method: 'PATCH',
    ...(options || {}),
  });
}

/** getMemberManagePlan GET /core/common/getMemberManagePlan */
export async function getMemberManagePlanUsingGET(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/core/common/getMemberManagePlan', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取配置的招募版本 GET /core/common/getRecruitVersion */
export async function getRecruitVersionUsingGET7(options?: { [key: string]: any }) {
  return request<API.BeanCommonResultRecruitVersionVo>('/core/common/getRecruitVersion', {
    method: 'GET',
    ...(options || {}),
  });
}

/** getShopTable4Component GET /core/common/getShopTable4Component */
export async function getShopTable4ComponentUsingGET(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseRecord>('/core/common/getShopTable4Component', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getShopTable4Component PUT /core/common/getShopTable4Component */
export async function getShopTable4ComponentUsingPUT(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseRecord>('/core/common/getShopTable4Component', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getShopTable4Component POST /core/common/getShopTable4Component */
export async function getShopTable4ComponentUsingPOST(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseRecord>('/core/common/getShopTable4Component', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getShopTable4Component DELETE /core/common/getShopTable4Component */
export async function getShopTable4ComponentUsingDELETE(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseRecord>('/core/common/getShopTable4Component', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getShopTable4Component PATCH /core/common/getShopTable4Component */
export async function getShopTable4ComponentUsingPATCH(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseRecord>('/core/common/getShopTable4Component', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getTradeStatus GET /core/common/getTradeStatus */
export async function getTradeStatusUsingGET(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/core/common/getTradeStatus', {
    method: 'GET',
    ...(options || {}),
  });
}

/** getTradeStatus PUT /core/common/getTradeStatus */
export async function getTradeStatusUsingPUT(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/core/common/getTradeStatus', {
    method: 'PUT',
    ...(options || {}),
  });
}

/** getTradeStatus POST /core/common/getTradeStatus */
export async function getTradeStatusUsingPOST(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/core/common/getTradeStatus', {
    method: 'POST',
    ...(options || {}),
  });
}

/** getTradeStatus DELETE /core/common/getTradeStatus */
export async function getTradeStatusUsingDELETE(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/core/common/getTradeStatus', {
    method: 'DELETE',
    ...(options || {}),
  });
}

/** getTradeStatus PATCH /core/common/getTradeStatus */
export async function getTradeStatusUsingPATCH(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/core/common/getTradeStatus', {
    method: 'PATCH',
    ...(options || {}),
  });
}

/** getYsAccountInfo GET /core/common/getYsAccountInfo */
export async function getYsAccountInfoUsingGET(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/core/common/getYsAccountInfo', {
    method: 'GET',
    ...(options || {}),
  });
}

/** getYsAccountInfo PUT /core/common/getYsAccountInfo */
export async function getYsAccountInfoUsingPUT(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/core/common/getYsAccountInfo', {
    method: 'PUT',
    ...(options || {}),
  });
}

/** getYsAccountInfo POST /core/common/getYsAccountInfo */
export async function getYsAccountInfoUsingPOST(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/core/common/getYsAccountInfo', {
    method: 'POST',
    ...(options || {}),
  });
}

/** getYsAccountInfo DELETE /core/common/getYsAccountInfo */
export async function getYsAccountInfoUsingDELETE(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/core/common/getYsAccountInfo', {
    method: 'DELETE',
    ...(options || {}),
  });
}

/** getYsAccountInfo PATCH /core/common/getYsAccountInfo */
export async function getYsAccountInfoUsingPATCH(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/core/common/getYsAccountInfo', {
    method: 'PATCH',
    ...(options || {}),
  });
}

/** getYsSmsSplitInfo GET /core/common/getYsSmsSplitInfo */
export async function getYsSmsSplitInfoUsingGET(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/core/common/getYsSmsSplitInfo', {
    method: 'GET',
    ...(options || {}),
  });
}

/** getYsSmsSplitInfo PUT /core/common/getYsSmsSplitInfo */
export async function getYsSmsSplitInfoUsingPUT(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/core/common/getYsSmsSplitInfo', {
    method: 'PUT',
    ...(options || {}),
  });
}

/** getYsSmsSplitInfo POST /core/common/getYsSmsSplitInfo */
export async function getYsSmsSplitInfoUsingPOST(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/core/common/getYsSmsSplitInfo', {
    method: 'POST',
    ...(options || {}),
  });
}

/** getYsSmsSplitInfo DELETE /core/common/getYsSmsSplitInfo */
export async function getYsSmsSplitInfoUsingDELETE(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/core/common/getYsSmsSplitInfo', {
    method: 'DELETE',
    ...(options || {}),
  });
}

/** getYsSmsSplitInfo PATCH /core/common/getYsSmsSplitInfo */
export async function getYsSmsSplitInfoUsingPATCH(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/core/common/getYsSmsSplitInfo', {
    method: 'PATCH',
    ...(options || {}),
  });
}

/** queryAreaTree4Component GET /core/common/queryAreaTree4Component */
export async function queryAreaTree4ComponentUsingGET(options?: { [key: string]: any }) {
  return request<API.TreeNode[]>('/core/common/queryAreaTree4Component', {
    method: 'GET',
    ...(options || {}),
  });
}

/** queryChannelTree4Component GET /core/common/queryChannelTree4Component */
export async function queryChannelTree4ComponentUsingGET(options?: { [key: string]: any }) {
  return request<API.TreeNode[]>('/core/common/queryChannelTree4Component', {
    method: 'GET',
    ...(options || {}),
  });
}

/** queryChannelTree4Component PUT /core/common/queryChannelTree4Component */
export async function queryChannelTree4ComponentUsingPUT(options?: { [key: string]: any }) {
  return request<API.TreeNode[]>('/core/common/queryChannelTree4Component', {
    method: 'PUT',
    ...(options || {}),
  });
}

/** queryChannelTree4Component POST /core/common/queryChannelTree4Component */
export async function queryChannelTree4ComponentUsingPOST(options?: { [key: string]: any }) {
  return request<API.TreeNode[]>('/core/common/queryChannelTree4Component', {
    method: 'POST',
    ...(options || {}),
  });
}

/** queryChannelTree4Component DELETE /core/common/queryChannelTree4Component */
export async function queryChannelTree4ComponentUsingDELETE(options?: { [key: string]: any }) {
  return request<API.TreeNode[]>('/core/common/queryChannelTree4Component', {
    method: 'DELETE',
    ...(options || {}),
  });
}

/** queryChannelTree4Component PATCH /core/common/queryChannelTree4Component */
export async function queryChannelTree4ComponentUsingPATCH(options?: { [key: string]: any }) {
  return request<API.TreeNode[]>('/core/common/queryChannelTree4Component', {
    method: 'PATCH',
    ...(options || {}),
  });
}

/** queryEmployeeList4Component GET /core/common/queryEmployeeList4Component */
export async function queryEmployeeList4ComponentUsingGET(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/core/common/queryEmployeeList4Component', {
    method: 'GET',
    ...(options || {}),
  });
}

/** queryEmployeeList4Component POST /core/common/queryEmployeeList4Component */
export async function queryEmployeeList4ComponentUsingPOST(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/core/common/queryEmployeeList4Component', {
    method: 'POST',
    ...(options || {}),
  });
}

/** queryEmployeeTreeAndOption4Component GET /core/common/queryEmployeeTreeAndOption4Component */
export async function queryEmployeeTreeAndOption4ComponentUsingGET(options?: {
  [key: string]: any;
}) {
  return request<API.CommonResult>('/core/common/queryEmployeeTreeAndOption4Component', {
    method: 'GET',
    ...(options || {}),
  });
}

/** queryEmployeeTreeAndOption4Component POST /core/common/queryEmployeeTreeAndOption4Component */
export async function queryEmployeeTreeAndOption4ComponentUsingPOST(options?: {
  [key: string]: any;
}) {
  return request<API.CommonResult>('/core/common/queryEmployeeTreeAndOption4Component', {
    method: 'POST',
    ...(options || {}),
  });
}

/** queryNoDistrictAreaTree GET /core/common/queryNoDistrictAreaTree */
export async function queryNoDistrictAreaTreeUsingGET(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/core/common/queryNoDistrictAreaTree', {
    method: 'GET',
    ...(options || {}),
  });
}

/** queryNoDistrictAreaTree PUT /core/common/queryNoDistrictAreaTree */
export async function queryNoDistrictAreaTreeUsingPUT(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/core/common/queryNoDistrictAreaTree', {
    method: 'PUT',
    ...(options || {}),
  });
}

/** queryNoDistrictAreaTree POST /core/common/queryNoDistrictAreaTree */
export async function queryNoDistrictAreaTreeUsingPOST(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/core/common/queryNoDistrictAreaTree', {
    method: 'POST',
    ...(options || {}),
  });
}

/** queryNoDistrictAreaTree DELETE /core/common/queryNoDistrictAreaTree */
export async function queryNoDistrictAreaTreeUsingDELETE(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/core/common/queryNoDistrictAreaTree', {
    method: 'DELETE',
    ...(options || {}),
  });
}

/** queryNoDistrictAreaTree PATCH /core/common/queryNoDistrictAreaTree */
export async function queryNoDistrictAreaTreeUsingPATCH(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/core/common/queryNoDistrictAreaTree', {
    method: 'PATCH',
    ...(options || {}),
  });
}

/** queryNoDistrictTreeInCache GET /core/common/queryNoDistrictTreeInCache */
export async function queryNoDistrictTreeInCacheUsingGET(options?: { [key: string]: any }) {
  return request<API.TreeNode[]>('/core/common/queryNoDistrictTreeInCache', {
    method: 'GET',
    ...(options || {}),
  });
}

/** queryNoDistrictTreeInCache PUT /core/common/queryNoDistrictTreeInCache */
export async function queryNoDistrictTreeInCacheUsingPUT(options?: { [key: string]: any }) {
  return request<API.TreeNode[]>('/core/common/queryNoDistrictTreeInCache', {
    method: 'PUT',
    ...(options || {}),
  });
}

/** queryNoDistrictTreeInCache POST /core/common/queryNoDistrictTreeInCache */
export async function queryNoDistrictTreeInCacheUsingPOST(options?: { [key: string]: any }) {
  return request<API.TreeNode[]>('/core/common/queryNoDistrictTreeInCache', {
    method: 'POST',
    ...(options || {}),
  });
}

/** queryNoDistrictTreeInCache DELETE /core/common/queryNoDistrictTreeInCache */
export async function queryNoDistrictTreeInCacheUsingDELETE(options?: { [key: string]: any }) {
  return request<API.TreeNode[]>('/core/common/queryNoDistrictTreeInCache', {
    method: 'DELETE',
    ...(options || {}),
  });
}

/** queryNoDistrictTreeInCache PATCH /core/common/queryNoDistrictTreeInCache */
export async function queryNoDistrictTreeInCacheUsingPATCH(options?: { [key: string]: any }) {
  return request<API.TreeNode[]>('/core/common/queryNoDistrictTreeInCache', {
    method: 'PATCH',
    ...(options || {}),
  });
}

/** queryPlatForm GET /core/common/queryPlatForm */
export async function queryPlatFormUsingGET(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/core/common/queryPlatForm', {
    method: 'GET',
    ...(options || {}),
  });
}

/** queryPlatForm PUT /core/common/queryPlatForm */
export async function queryPlatFormUsingPUT(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/core/common/queryPlatForm', {
    method: 'PUT',
    ...(options || {}),
  });
}

/** queryPlatForm POST /core/common/queryPlatForm */
export async function queryPlatFormUsingPOST(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/core/common/queryPlatForm', {
    method: 'POST',
    ...(options || {}),
  });
}

/** queryPlatForm DELETE /core/common/queryPlatForm */
export async function queryPlatFormUsingDELETE(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/core/common/queryPlatForm', {
    method: 'DELETE',
    ...(options || {}),
  });
}

/** queryPlatForm PATCH /core/common/queryPlatForm */
export async function queryPlatFormUsingPATCH(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/core/common/queryPlatForm', {
    method: 'PATCH',
    ...(options || {}),
  });
}

/** queryProvince GET /core/common/queryProvince */
export async function queryProvinceUsingGET(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/core/common/queryProvince', {
    method: 'GET',
    ...(options || {}),
  });
}

/** queryProvince PUT /core/common/queryProvince */
export async function queryProvinceUsingPUT(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/core/common/queryProvince', {
    method: 'PUT',
    ...(options || {}),
  });
}

/** queryProvince POST /core/common/queryProvince */
export async function queryProvinceUsingPOST(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/core/common/queryProvince', {
    method: 'POST',
    ...(options || {}),
  });
}

/** queryProvince DELETE /core/common/queryProvince */
export async function queryProvinceUsingDELETE(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/core/common/queryProvince', {
    method: 'DELETE',
    ...(options || {}),
  });
}

/** queryProvince PATCH /core/common/queryProvince */
export async function queryProvinceUsingPATCH(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/core/common/queryProvince', {
    method: 'PATCH',
    ...(options || {}),
  });
}

/** querySmsPlaceholderList GET /core/common/querySmsPlaceholderList */
export async function querySmsPlaceholderListUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.querySmsPlaceholderListUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/core/common/querySmsPlaceholderList', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** querySmsPlaceholderList PUT /core/common/querySmsPlaceholderList */
export async function querySmsPlaceholderListUsingPUT(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.querySmsPlaceholderListUsingPUTParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/core/common/querySmsPlaceholderList', {
    method: 'PUT',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** querySmsPlaceholderList POST /core/common/querySmsPlaceholderList */
export async function querySmsPlaceholderListUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.querySmsPlaceholderListUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/core/common/querySmsPlaceholderList', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** querySmsPlaceholderList DELETE /core/common/querySmsPlaceholderList */
export async function querySmsPlaceholderListUsingDELETE(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.querySmsPlaceholderListUsingDELETEParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/core/common/querySmsPlaceholderList', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** querySmsPlaceholderList PATCH /core/common/querySmsPlaceholderList */
export async function querySmsPlaceholderListUsingPATCH(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.querySmsPlaceholderListUsingPATCHParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/core/common/querySmsPlaceholderList', {
    method: 'PATCH',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
