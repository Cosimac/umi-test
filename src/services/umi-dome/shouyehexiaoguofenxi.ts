// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** buildPaymentTendencyData GET /policy/view/buildPaymentTendencyData */
export async function buildPaymentTendencyDataUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.buildPaymentTendencyDataUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<any>('/policy/view/buildPaymentTendencyData', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** buildPaymentTendencyData PUT /policy/view/buildPaymentTendencyData */
export async function buildPaymentTendencyDataUsingPUT(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.buildPaymentTendencyDataUsingPUTParams,
  options?: { [key: string]: any },
) {
  return request<any>('/policy/view/buildPaymentTendencyData', {
    method: 'PUT',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** buildPaymentTendencyData POST /policy/view/buildPaymentTendencyData */
export async function buildPaymentTendencyDataUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.buildPaymentTendencyDataUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<any>('/policy/view/buildPaymentTendencyData', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** buildPaymentTendencyData DELETE /policy/view/buildPaymentTendencyData */
export async function buildPaymentTendencyDataUsingDELETE(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.buildPaymentTendencyDataUsingDELETEParams,
  options?: { [key: string]: any },
) {
  return request<any>('/policy/view/buildPaymentTendencyData', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** buildPaymentTendencyData PATCH /policy/view/buildPaymentTendencyData */
export async function buildPaymentTendencyDataUsingPATCH(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.buildPaymentTendencyDataUsingPATCHParams,
  options?: { [key: string]: any },
) {
  return request<any>('/policy/view/buildPaymentTendencyData', {
    method: 'PATCH',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** buildPolicyEdit GET /policy/view/buildPolicyEdit */
export async function buildPolicyEditUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.buildPolicyEditUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<any>('/policy/view/buildPolicyEdit', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** buildPolicyEdit PUT /policy/view/buildPolicyEdit */
export async function buildPolicyEditUsingPUT(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.buildPolicyEditUsingPUTParams,
  options?: { [key: string]: any },
) {
  return request<any>('/policy/view/buildPolicyEdit', {
    method: 'PUT',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** buildPolicyEdit POST /policy/view/buildPolicyEdit */
export async function buildPolicyEditUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.buildPolicyEditUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<any>('/policy/view/buildPolicyEdit', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** buildPolicyEdit DELETE /policy/view/buildPolicyEdit */
export async function buildPolicyEditUsingDELETE(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.buildPolicyEditUsingDELETEParams,
  options?: { [key: string]: any },
) {
  return request<any>('/policy/view/buildPolicyEdit', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** buildPolicyEdit PATCH /policy/view/buildPolicyEdit */
export async function buildPolicyEditUsingPATCH(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.buildPolicyEditUsingPATCHParams,
  options?: { [key: string]: any },
) {
  return request<any>('/policy/view/buildPolicyEdit', {
    method: 'PATCH',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** sop策略付费金额趋势折线图 GET /policy/view/getPaymentTendencyData */
export async function getPaymentTendencyDataUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getPaymentTendencyDataUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultListPaymentDTO>('/policy/view/getPaymentTendencyData', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** sop转化漏斗 GET /policy/view/getPolicyConversionFunnel */
export async function getPolicyConversionFunnelUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getPolicyConversionFunnelUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultsopcelvezhuanhualoudou>(
    '/policy/view/getPolicyConversionFunnel',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 首单每日数据报表 POST /policy/view/getPolicyDailyData */
export async function getPolicyDailyDataUsingPOST(
  body: API.BeanTableRequestmeirishujubaobiao,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultTableResponseshoudanSOPmeirishujubaobiao>(
    '/policy/view/getPolicyDailyData',
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

/** 首页sop列表数据概览 POST /policy/view/getPolicyDataInfoList */
export async function getPolicyDataInfoListUsingPOST(
  body: API.BeanTableRequestchaxunsopcelveshujugailan,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultTableResponsedangesopcelveshuju>(
    '/policy/view/getPolicyDataInfoList',
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

/** 首页头部数据概览 GET /policy/view/getPolicyDataView */
export async function getPolicyDataViewUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getPolicyDataViewUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultsopcelveshujugailan>('/policy/view/getPolicyDataView', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** sop阶段完成数据 GET /policy/view/getPolicySectionData */
export async function getPolicySectionDataUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getPolicySectionDataUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultPolicyDetailDTO>('/policy/view/getPolicySectionData', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** sop策略转化趋势折线图 GET /policy/view/getPolicyTendencyData */
export async function getPolicyTendencyDataUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getPolicyTendencyDataUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultListsopcelvezhuanhuaqushidian>(
    '/policy/view/getPolicyTendencyData',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** sop阶段优化建议 GET /policy/view/getSopAdviseByPolicyId */
export async function getSopAdviseByPolicyIdUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getSopAdviseByPolicyIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultListPolicyAdviseDTO>('/policy/view/getSopAdviseByPolicyId', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
