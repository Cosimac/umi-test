// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** delete GET /Guide/chanel/delete */
export async function deleteUsingGET(body: Record<string, any>, options?: { [key: string]: any }) {
  return request<API.CommonResult>('/Guide/chanel/delete', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** delete PUT /Guide/chanel/delete */
export async function deleteUsingPUT(body: Record<string, any>, options?: { [key: string]: any }) {
  return request<API.CommonResult>('/Guide/chanel/delete', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** delete POST /Guide/chanel/delete */
export async function deleteUsingPOST1(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/Guide/chanel/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** delete DELETE /Guide/chanel/delete */
export async function deleteUsingDELETE(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/Guide/chanel/delete', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** delete PATCH /Guide/chanel/delete */
export async function deleteUsingPATCH(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/Guide/chanel/delete', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 导出渠道明细EXCEL POST /Guide/chanel/exportChannelAnalysisDailyListExcel */
export async function exportChannelAnalysisDailyListExcelUsingPOST(
  body: API.BeanTableRequestchaxunqudaofenximouqudaodeliebiaoshuju,
  options?: { [key: string]: any },
) {
  return request<any>('/Guide/chanel/exportChannelAnalysisDailyListExcel', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 导出渠道统计EXCEL POST /Guide/chanel/exportChannelAnalysisList */
export async function exportChannelAnalysisListUsingPOST(
  body: API.BeanTableRequestqudaofenxiliebiaoshujuchaxunshiti,
  options?: { [key: string]: any },
) {
  return request<any>('/Guide/chanel/exportChannelAnalysisList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询渠道分析图表数据 POST /Guide/chanel/findChannelAnalysisChartData */
export async function findChannelAnalysisChartDataUsingPOST(
  body: API.qudaofenxitubiaoshujuchaxunshiti,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultqudaofenxitubiaoshujushiti>(
    '/Guide/chanel/findChannelAnalysisChartData',
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

/** 查询渠道分析-统计渠道下新增删除被删除好友 POST /Guide/chanel/findChannelAnalysisDailyCount */
export async function findChannelAnalysisDailyCountUsingPOST(
  body: API.BeanTableRequestchaxunqudaofenximouqudaodeliebiaoshuju,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultqudaofenxiliebiaomingxishujushiti>(
    '/Guide/chanel/findChannelAnalysisDailyCount',
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

/** 查询渠道分析-某渠道的列表数据 POST /Guide/chanel/findChannelAnalysisDailyList */
export async function findChannelAnalysisDailyListUsingPOST(
  body: API.BeanTableRequestchaxunqudaofenximouqudaodeliebiaoshuju,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultBeanTableResponsequdaofenxiliebiaomingxishujushiti>(
    '/Guide/chanel/findChannelAnalysisDailyList',
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

/** 查询渠道分析列表数据 POST /Guide/chanel/findChannelAnalysisList */
export async function findChannelAnalysisListUsingPOST(
  body: API.BeanTableRequestqudaofenxiliebiaoshujuchaxunshiti,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultBeanTableResponsequdaofenxiliebiaoshujushiti>(
    '/Guide/chanel/findChannelAnalysisList',
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

/** findList GET /Guide/chanel/findList */
export async function findListUsingGET(body: API.TableRequest, options?: { [key: string]: any }) {
  return request<API.TableResponseRecord>('/Guide/chanel/findList', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findList PUT /Guide/chanel/findList */
export async function findListUsingPUT(body: API.TableRequest, options?: { [key: string]: any }) {
  return request<API.TableResponseRecord>('/Guide/chanel/findList', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findList POST /Guide/chanel/findList */
export async function findListUsingPOST(body: API.TableRequest, options?: { [key: string]: any }) {
  return request<API.TableResponseRecord>('/Guide/chanel/findList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findList DELETE /Guide/chanel/findList */
export async function findListUsingDELETE(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseRecord>('/Guide/chanel/findList', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findList PATCH /Guide/chanel/findList */
export async function findListUsingPATCH(body: API.TableRequest, options?: { [key: string]: any }) {
  return request<API.TableResponseRecord>('/Guide/chanel/findList', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findTotalData GET /Guide/chanel/findTotalData */
export async function findTotalDataUsingGET(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/Guide/chanel/findTotalData', {
    method: 'GET',
    ...(options || {}),
  });
}

/** findTotalData PUT /Guide/chanel/findTotalData */
export async function findTotalDataUsingPUT(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/Guide/chanel/findTotalData', {
    method: 'PUT',
    ...(options || {}),
  });
}

/** findTotalData POST /Guide/chanel/findTotalData */
export async function findTotalDataUsingPOST(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/Guide/chanel/findTotalData', {
    method: 'POST',
    ...(options || {}),
  });
}

/** findTotalData DELETE /Guide/chanel/findTotalData */
export async function findTotalDataUsingDELETE(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/Guide/chanel/findTotalData', {
    method: 'DELETE',
    ...(options || {}),
  });
}

/** findTotalData PATCH /Guide/chanel/findTotalData */
export async function findTotalDataUsingPATCH(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/Guide/chanel/findTotalData', {
    method: 'PATCH',
    ...(options || {}),
  });
}

/** getChannelList GET /Guide/chanel/getChannelList */
export async function getChannelListUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getChannelListUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/Guide/chanel/getChannelList', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getChannelList PUT /Guide/chanel/getChannelList */
export async function getChannelListUsingPUT(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getChannelListUsingPUTParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/Guide/chanel/getChannelList', {
    method: 'PUT',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getChannelList POST /Guide/chanel/getChannelList */
export async function getChannelListUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getChannelListUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/Guide/chanel/getChannelList', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getChannelList DELETE /Guide/chanel/getChannelList */
export async function getChannelListUsingDELETE(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getChannelListUsingDELETEParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/Guide/chanel/getChannelList', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getChannelList PATCH /Guide/chanel/getChannelList */
export async function getChannelListUsingPATCH(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getChannelListUsingPATCHParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/Guide/chanel/getChannelList', {
    method: 'PATCH',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** saveOrUpdate GET /Guide/chanel/saveOrUpdate */
export async function saveOrUpdateUsingGET(
  body: API.SgWeWorkChannel,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/Guide/chanel/saveOrUpdate', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** saveOrUpdate PUT /Guide/chanel/saveOrUpdate */
export async function saveOrUpdateUsingPUT(
  body: API.SgWeWorkChannel,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/Guide/chanel/saveOrUpdate', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** saveOrUpdate POST /Guide/chanel/saveOrUpdate */
export async function saveOrUpdateUsingPOST(
  body: API.SgWeWorkChannel,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/Guide/chanel/saveOrUpdate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** saveOrUpdate DELETE /Guide/chanel/saveOrUpdate */
export async function saveOrUpdateUsingDELETE(
  body: API.SgWeWorkChannel,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/Guide/chanel/saveOrUpdate', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** saveOrUpdate PATCH /Guide/chanel/saveOrUpdate */
export async function saveOrUpdateUsingPATCH(
  body: API.SgWeWorkChannel,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/Guide/chanel/saveOrUpdate', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
