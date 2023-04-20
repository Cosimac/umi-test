// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** getPageJSON GET /staffVisitStatistics/getPageJSON */
export async function getPageJSONUsingGET(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/staffVisitStatistics/getPageJSON', {
    method: 'GET',
    ...(options || {}),
  });
}

/** list POST /staffVisitStatistics/list */
export async function listUsingPOST17(body: API.TableRequest, options?: { [key: string]: any }) {
  return request<API.CommonResult>('/staffVisitStatistics/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** listExcel GET /staffVisitStatistics/listExcel */
export async function listExcelUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listExcelUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<any>('/staffVisitStatistics/listExcel', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** listExcelForGuide GET /staffVisitStatistics/listExcelForGuide */
export async function listExcelForGuideUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listExcelForGuideUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<any>('/staffVisitStatistics/listExcelForGuide', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** overview POST /staffVisitStatistics/overview */
export async function overviewUsingPOST(
  body: API.StaffVisitStatisticsVo,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/staffVisitStatistics/overview', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
