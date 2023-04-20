// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** batchSaveTag GET /guide/customer/batchSaveTag */
export async function batchSaveTagUsingGET(
  body: API.TagSaveVo[],
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/customer/batchSaveTag', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** batchSaveTag PUT /guide/customer/batchSaveTag */
export async function batchSaveTagUsingPUT(
  body: API.TagSaveVo[],
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/customer/batchSaveTag', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** batchSaveTag POST /guide/customer/batchSaveTag */
export async function batchSaveTagUsingPOST(
  body: API.TagSaveVo[],
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/customer/batchSaveTag', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** batchSaveTag DELETE /guide/customer/batchSaveTag */
export async function batchSaveTagUsingDELETE(
  body: API.TagSaveVo[],
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/customer/batchSaveTag', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** batchSaveTag PATCH /guide/customer/batchSaveTag */
export async function batchSaveTagUsingPATCH(
  body: API.TagSaveVo[],
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/customer/batchSaveTag', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 关闭客户转移任务的进度提醒 POST /guide/customer/closeCustomerTransferTask */
export async function closeCustomerTransferTaskUsingPOST(
  body: API.kehuzhuanyirenwugengxinqingqiu,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/customer/closeCustomerTransferTask', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 创建客户转移任务 POST /guide/customer/createCustomerTransferTask */
export async function createCustomerTransferTaskUsingPOST(
  body: API.kehuzhuanyirenwuchuangjianqingqiu,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/customer/createCustomerTransferTask', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findCustomerList GET /guide/customer/findCustomerList */
export async function findCustomerListUsingGET(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultBeanTableResponseShopCustomerVO>(
    '/guide/customer/findCustomerList',
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}

/** findCustomerList PUT /guide/customer/findCustomerList */
export async function findCustomerListUsingPUT(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultBeanTableResponseShopCustomerVO>(
    '/guide/customer/findCustomerList',
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}

/** findCustomerList POST /guide/customer/findCustomerList */
export async function findCustomerListUsingPOST(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultBeanTableResponseShopCustomerVO>(
    '/guide/customer/findCustomerList',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}

/** findCustomerList DELETE /guide/customer/findCustomerList */
export async function findCustomerListUsingDELETE(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultBeanTableResponseShopCustomerVO>(
    '/guide/customer/findCustomerList',
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}

/** findCustomerList PATCH /guide/customer/findCustomerList */
export async function findCustomerListUsingPATCH(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultBeanTableResponseShopCustomerVO>(
    '/guide/customer/findCustomerList',
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}

/** findCustomerTotal GET /guide/customer/findCustomerTotal */
export async function findCustomerTotalUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.findCustomerTotalUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/customer/findCustomerTotal', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** findCustomerTotal PUT /guide/customer/findCustomerTotal */
export async function findCustomerTotalUsingPUT(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.findCustomerTotalUsingPUTParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/customer/findCustomerTotal', {
    method: 'PUT',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** findCustomerTotal POST /guide/customer/findCustomerTotal */
export async function findCustomerTotalUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.findCustomerTotalUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/customer/findCustomerTotal', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** findCustomerTotal DELETE /guide/customer/findCustomerTotal */
export async function findCustomerTotalUsingDELETE(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.findCustomerTotalUsingDELETEParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/customer/findCustomerTotal', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** findCustomerTotal PATCH /guide/customer/findCustomerTotal */
export async function findCustomerTotalUsingPATCH(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.findCustomerTotalUsingPATCHParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/customer/findCustomerTotal', {
    method: 'PATCH',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 【员工资产转移】查询资产转移规则 POST /guide/customer/findSgLossGuideCapitalRuleListByGroupId */
export async function findSgLossGuideCapitalRuleListByGroupIdUsingPOST(options?: {
  [key: string]: any;
}) {
  return request<API.BeanCommonResult>('/guide/customer/findSgLossGuideCapitalRuleListByGroupId', {
    method: 'POST',
    ...(options || {}),
  });
}

/** getAllTag GET /guide/customer/getAllTag */
export async function getAllTagUsingGET(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/customer/getAllTag', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getAllTag PUT /guide/customer/getAllTag */
export async function getAllTagUsingPUT(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/customer/getAllTag', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getAllTag POST /guide/customer/getAllTag */
export async function getAllTagUsingPOST(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/customer/getAllTag', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getAllTag DELETE /guide/customer/getAllTag */
export async function getAllTagUsingDELETE(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/customer/getAllTag', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getAllTag PATCH /guide/customer/getAllTag */
export async function getAllTagUsingPATCH(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/customer/getAllTag', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getCustomerConfig GET /guide/customer/getCustomerConfig */
export async function getCustomerConfigUsingGET(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/guide/customer/getCustomerConfig', {
    method: 'GET',
    ...(options || {}),
  });
}

/** getCustomerConfig PUT /guide/customer/getCustomerConfig */
export async function getCustomerConfigUsingPUT(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/guide/customer/getCustomerConfig', {
    method: 'PUT',
    ...(options || {}),
  });
}

/** getCustomerConfig POST /guide/customer/getCustomerConfig */
export async function getCustomerConfigUsingPOST(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/guide/customer/getCustomerConfig', {
    method: 'POST',
    ...(options || {}),
  });
}

/** getCustomerConfig DELETE /guide/customer/getCustomerConfig */
export async function getCustomerConfigUsingDELETE(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/guide/customer/getCustomerConfig', {
    method: 'DELETE',
    ...(options || {}),
  });
}

/** getCustomerConfig PATCH /guide/customer/getCustomerConfig */
export async function getCustomerConfigUsingPATCH(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/guide/customer/getCustomerConfig', {
    method: 'PATCH',
    ...(options || {}),
  });
}

/** getCustomerTag GET /guide/customer/getCustomerTag */
export async function getCustomerTagUsingGET(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/customer/getCustomerTag', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getCustomerTag PUT /guide/customer/getCustomerTag */
export async function getCustomerTagUsingPUT(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/customer/getCustomerTag', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getCustomerTag POST /guide/customer/getCustomerTag */
export async function getCustomerTagUsingPOST(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/customer/getCustomerTag', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getCustomerTag DELETE /guide/customer/getCustomerTag */
export async function getCustomerTagUsingDELETE(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/customer/getCustomerTag', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getCustomerTag PATCH /guide/customer/getCustomerTag */
export async function getCustomerTagUsingPATCH(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/customer/getCustomerTag', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getDetail GET /guide/customer/getDetail */
export async function getDetailUsingGET(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/customer/getDetail', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getDetail PUT /guide/customer/getDetail */
export async function getDetailUsingPUT(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/customer/getDetail', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getDetail POST /guide/customer/getDetail */
export async function getDetailUsingPOST(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/customer/getDetail', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getDetail DELETE /guide/customer/getDetail */
export async function getDetailUsingDELETE(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/customer/getDetail', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getDetail PATCH /guide/customer/getDetail */
export async function getDetailUsingPATCH(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/customer/getDetail', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getGradeInfo GET /guide/customer/getGradeInfo */
export async function getGradeInfoUsingGET(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/customer/getGradeInfo', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getGradeInfo PUT /guide/customer/getGradeInfo */
export async function getGradeInfoUsingPUT(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/customer/getGradeInfo', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getGradeInfo POST /guide/customer/getGradeInfo */
export async function getGradeInfoUsingPOST(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/customer/getGradeInfo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getGradeInfo DELETE /guide/customer/getGradeInfo */
export async function getGradeInfoUsingDELETE(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/customer/getGradeInfo', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getGradeInfo PATCH /guide/customer/getGradeInfo */
export async function getGradeInfoUsingPATCH(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/customer/getGradeInfo', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getIntegralList GET /guide/customer/getIntegralList */
export async function getIntegralListUsingGET(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/customer/getIntegralList', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getIntegralList PUT /guide/customer/getIntegralList */
export async function getIntegralListUsingPUT(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/customer/getIntegralList', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getIntegralList POST /guide/customer/getIntegralList */
export async function getIntegralListUsingPOST(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/customer/getIntegralList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getIntegralList DELETE /guide/customer/getIntegralList */
export async function getIntegralListUsingDELETE(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/customer/getIntegralList', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getIntegralList PATCH /guide/customer/getIntegralList */
export async function getIntegralListUsingPATCH(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/customer/getIntegralList', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getRfmInfo GET /guide/customer/getRfmInfo */
export async function getRfmInfoUsingGET(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/customer/getRfmInfo', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getRfmInfo PUT /guide/customer/getRfmInfo */
export async function getRfmInfoUsingPUT(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/customer/getRfmInfo', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getRfmInfo POST /guide/customer/getRfmInfo */
export async function getRfmInfoUsingPOST(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/customer/getRfmInfo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getRfmInfo DELETE /guide/customer/getRfmInfo */
export async function getRfmInfoUsingDELETE(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/customer/getRfmInfo', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getRfmInfo PATCH /guide/customer/getRfmInfo */
export async function getRfmInfoUsingPATCH(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/customer/getRfmInfo', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询门店客户转移任务的状态 GET /guide/customer/getShopCustomerTransferTaskStatus */
export async function getShopCustomerTransferTaskStatusUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getShopCustomerTransferTaskStatusUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/customer/getShopCustomerTransferTaskStatus', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** queryCustomerCouponNum GET /guide/customer/queryCustomerCouponNum */
export async function queryCustomerCouponNumUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.queryCustomerCouponNumUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/customer/queryCustomerCouponNum', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** queryCustomerCouponNum PUT /guide/customer/queryCustomerCouponNum */
export async function queryCustomerCouponNumUsingPUT(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.queryCustomerCouponNumUsingPUTParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/customer/queryCustomerCouponNum', {
    method: 'PUT',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** queryCustomerCouponNum POST /guide/customer/queryCustomerCouponNum */
export async function queryCustomerCouponNumUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.queryCustomerCouponNumUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/customer/queryCustomerCouponNum', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** queryCustomerCouponNum DELETE /guide/customer/queryCustomerCouponNum */
export async function queryCustomerCouponNumUsingDELETE(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.queryCustomerCouponNumUsingDELETEParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/customer/queryCustomerCouponNum', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** queryCustomerCouponNum PATCH /guide/customer/queryCustomerCouponNum */
export async function queryCustomerCouponNumUsingPATCH(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.queryCustomerCouponNumUsingPATCHParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/customer/queryCustomerCouponNum', {
    method: 'PATCH',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** queryValidPoint GET /guide/customer/queryValidPoint */
export async function queryValidPointUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.queryValidPointUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/customer/queryValidPoint', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** queryValidPoint PUT /guide/customer/queryValidPoint */
export async function queryValidPointUsingPUT(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.queryValidPointUsingPUTParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/customer/queryValidPoint', {
    method: 'PUT',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** queryValidPoint POST /guide/customer/queryValidPoint */
export async function queryValidPointUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.queryValidPointUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/customer/queryValidPoint', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** queryValidPoint DELETE /guide/customer/queryValidPoint */
export async function queryValidPointUsingDELETE(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.queryValidPointUsingDELETEParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/customer/queryValidPoint', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** queryValidPoint PATCH /guide/customer/queryValidPoint */
export async function queryValidPointUsingPATCH(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.queryValidPointUsingPATCHParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/customer/queryValidPoint', {
    method: 'PATCH',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 重试客户转移任务 POST /guide/customer/redoCustomerTransferTask */
export async function redoCustomerTransferTaskUsingPOST(
  body: API.kehuzhuanyirenwugengxinqingqiu,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/customer/redoCustomerTransferTask', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 【员工资产转移】保存（会员、好友、群）转移任务 POST /guide/customer/saveLossGuideAssetTransferData */
export async function saveLossGuideAssetTransferDataUsingPOST(
  body: API.daogouliushizichanzhuanyirenwuchuangjianqingqiu,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResult>('/guide/customer/saveLossGuideAssetTransferData', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 【员工资产转移】保存资产转移规则 POST /guide/customer/saveSgLossGuideCapitalRule */
export async function saveSgLossGuideCapitalRuleUsingPOST(
  body: API.SgLossGuideAssetRuleDTO[],
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/customer/saveSgLossGuideCapitalRule', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** saveTag GET /guide/customer/saveTag */
export async function saveTagUsingGET(body: API.TagSaveVo, options?: { [key: string]: any }) {
  return request<API.CommonResult>('/guide/customer/saveTag', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** saveTag PUT /guide/customer/saveTag */
export async function saveTagUsingPUT(body: API.TagSaveVo, options?: { [key: string]: any }) {
  return request<API.CommonResult>('/guide/customer/saveTag', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** saveTag POST /guide/customer/saveTag */
export async function saveTagUsingPOST(body: API.TagSaveVo, options?: { [key: string]: any }) {
  return request<API.CommonResult>('/guide/customer/saveTag', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** saveTag DELETE /guide/customer/saveTag */
export async function saveTagUsingDELETE(body: API.TagSaveVo, options?: { [key: string]: any }) {
  return request<API.CommonResult>('/guide/customer/saveTag', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** saveTag PATCH /guide/customer/saveTag */
export async function saveTagUsingPATCH(body: API.TagSaveVo, options?: { [key: string]: any }) {
  return request<API.CommonResult>('/guide/customer/saveTag', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 【员工资产转移】查询导购的好友、会员、群明细 POST /guide/customer/selectGuideResourceDetails */
export async function selectGuideResourceDetailsUsingPOST(
  body: API.GuideResourceDTO,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultCustomerFriendCrowDTO>(
    '/guide/customer/selectGuideResourceDetails',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}

/** 【员工资产转移】查询好友、会员、群已转移明细 POST /guide/customer/selectGuideTransferDetailList */
export async function selectGuideTransferDetailListUsingPOST(
  body: API.GuideTransferDetailParamsDTO,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultGuideTransferDetailDTO>(
    '/guide/customer/selectGuideTransferDetailList',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}

/** 【员工资产转移】 时时查询资产转移中的进度 POST /guide/customer/selectGuideTransferProgressIngList */
export async function selectGuideTransferProgressIngListUsingPOST(
  body: API.GuideTransferProgressIngDTO,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultListTaskProgressDTO>(
    '/guide/customer/selectGuideTransferProgressIngList',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}

/** 【员工资产转移】查询好友、会员、群转移进度数据列表 POST /guide/customer/selectGuideTransferProgressList */
export async function selectGuideTransferProgressListUsingPOST(
  body: API.GuideTransferProgressDTO,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultPageResultDTOTaskProgressDTO>(
    '/guide/customer/selectGuideTransferProgressList',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}

/** 【员工资产转移】查询当前好友、会员、群正在转移的数据 POST /guide/customer/selectGuideTransferProgressOne */
export async function selectGuideTransferProgressOneUsingPOST(
  body: API.GuideTransferProgressDTO,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultGuideExecuteTransferIngDTO>(
    '/guide/customer/selectGuideTransferProgressOne',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}

/** 【员工资产转移】查询需要资产转移的数据 POST /guide/customer/selectLossGuideCapitalRecord */
export async function selectLossGuideCapitalRecordUsingPOST(
  body: API.LossGuideCapitalRecordQuery,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultTableResponseLossGuideCapitalRecordDTO>(
    '/guide/customer/selectLossGuideCapitalRecord',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}

/** updateCustomerConfig GET /guide/customer/updateCustomerConfig */
export async function updateCustomerConfigUsingGET(
  body: API.SgCustomerConfigDao,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/customer/updateCustomerConfig', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** updateCustomerConfig PUT /guide/customer/updateCustomerConfig */
export async function updateCustomerConfigUsingPUT(
  body: API.SgCustomerConfigDao,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/customer/updateCustomerConfig', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** updateCustomerConfig POST /guide/customer/updateCustomerConfig */
export async function updateCustomerConfigUsingPOST(
  body: API.SgCustomerConfigDao,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/customer/updateCustomerConfig', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** updateCustomerConfig DELETE /guide/customer/updateCustomerConfig */
export async function updateCustomerConfigUsingDELETE(
  body: API.SgCustomerConfigDao,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/customer/updateCustomerConfig', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** updateCustomerConfig PATCH /guide/customer/updateCustomerConfig */
export async function updateCustomerConfigUsingPATCH(
  body: API.SgCustomerConfigDao,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/customer/updateCustomerConfig', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** updateCustomerGuide GET /guide/customer/updateCustomerGuide */
export async function updateCustomerGuideUsingGET(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/customer/updateCustomerGuide', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** updateCustomerGuide PUT /guide/customer/updateCustomerGuide */
export async function updateCustomerGuideUsingPUT(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/customer/updateCustomerGuide', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** updateCustomerGuide POST /guide/customer/updateCustomerGuide */
export async function updateCustomerGuideUsingPOST(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/customer/updateCustomerGuide', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** updateCustomerGuide DELETE /guide/customer/updateCustomerGuide */
export async function updateCustomerGuideUsingDELETE(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/customer/updateCustomerGuide', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** updateCustomerGuide PATCH /guide/customer/updateCustomerGuide */
export async function updateCustomerGuideUsingPATCH(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/customer/updateCustomerGuide', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
