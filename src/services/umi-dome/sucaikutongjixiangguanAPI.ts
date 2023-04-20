// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 完成统计:EXCEL导出 POST /guide/material/statistics/exportExcelByComplete */
export async function exportExcelByCompleteUsingPOST(
  body: API.MaterialStatisticsByExcelQuery,
  options?: { [key: string]: any },
) {
  return request<any>('/guide/material/statistics/exportExcelByComplete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/**  未完成统计总计:EXCEL导出 POST /guide/material/statistics/exportExcelByNoComplete */
export async function exportExcelByNoCompleteUsingPOST(
  body: API.MaterialStatisticsByExcelQuery,
  options?: { [key: string]: any },
) {
  return request<any>('/guide/material/statistics/exportExcelByNoComplete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/**  单个素材未完成统计:EXCEL导出 POST /guide/material/statistics/exportExcelByNoCompleteByMaterial */
export async function exportExcelByNoCompleteByMaterialUsingPOST(
  body: API.MaterialStatisticsByExcelQuery,
  options?: { [key: string]: any },
) {
  return request<any>('/guide/material/statistics/exportExcelByNoCompleteByMaterial', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 完成运营统计:EXCEL导出 POST /guide/material/statistics/exportOperateExcelByComplete */
export async function exportOperateExcelByCompleteUsingPOST(
  body: API.MaterialStatisticsByExcelQuery,
  options?: { [key: string]: any },
) {
  return request<any>('/guide/material/statistics/exportOperateExcelByComplete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 数据统计图表数据 POST /guide/material/statistics/getChartData */
export async function getChartDataUsingPOST(
  body: API.MaterialStatisticsQuery,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/material/statistics/getChartData', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 未完成统计列表 POST /guide/material/statistics/getNoCompleteStatisticsByMaterial */
export async function getNoCompleteStatisticsByMaterialUsingPOST(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseRecord>(
    '/guide/material/statistics/getNoCompleteStatisticsByMaterial',
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

/** 未完成统计明细 POST /guide/material/statistics/getNoCompleteStatisticsDetailByMaterial */
export async function getNoCompleteStatisticsDetailByMaterialUsingPOST(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseRecord>(
    '/guide/material/statistics/getNoCompleteStatisticsDetailByMaterial',
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

/** 获取日期完成明细 POST /guide/material/statistics/getOperateStatisticsDetailByDate */
export async function getOperateStatisticsDetailByDateUsingPOST(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseRecord>(
    '/guide/material/statistics/getOperateStatisticsDetailByDate',
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

/** 素材纬度:获取完成明细 POST /guide/material/statistics/getOperateStatisticsDetailByMaterial */
export async function getOperateStatisticsDetailByMaterialUsingPOST(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseRecord>(
    '/guide/material/statistics/getOperateStatisticsDetailByMaterial',
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

/** 以员工为纬度 完成明细 POST /guide/material/statistics/getOperateStatisticsDetailsByGuideId */
export async function getOperateStatisticsDetailsByGuideIdUsingPOST(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseRecord>(
    '/guide/material/statistics/getOperateStatisticsDetailsByGuideId',
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

/** 以日期为纬度,获取统计报表 POST /guide/material/statistics/getOperateStatisticsListByDate */
export async function getOperateStatisticsListByDateUsingPOST(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseRecord>(
    '/guide/material/statistics/getOperateStatisticsListByDate',
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

/** 以员工为纬度,获取统计报表 POST /guide/material/statistics/getOperateStatisticsListByGuideId */
export async function getOperateStatisticsListByGuideIdUsingPOST(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseRecord>(
    '/guide/material/statistics/getOperateStatisticsListByGuideId',
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

/** 以素材为纬度,获取统计报表 POST /guide/material/statistics/getOperateStatisticsListByMaterial */
export async function getOperateStatisticsListByMaterialUsingPOST(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseRecord>(
    '/guide/material/statistics/getOperateStatisticsListByMaterial',
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

/** 获取日期完成明细 POST /guide/material/statistics/getStatisticsDetailByDate */
export async function getStatisticsDetailByDateUsingPOST(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseRecord>('/guide/material/statistics/getStatisticsDetailByDate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 素材纬度:获取完成明细 POST /guide/material/statistics/getStatisticsDetailByMaterial */
export async function getStatisticsDetailByMaterialUsingPOST(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseRecord>(
    '/guide/material/statistics/getStatisticsDetailByMaterial',
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

/** 以日期为纬度,获取统计报表 POST /guide/material/statistics/getStatisticsListByDate */
export async function getStatisticsListByDateUsingPOST(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseRecord>('/guide/material/statistics/getStatisticsListByDate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 以素材为纬度,获取统计报表 POST /guide/material/statistics/getStatisticsListByMaterial */
export async function getStatisticsListByMaterialUsingPOST(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseRecord>(
    '/guide/material/statistics/getStatisticsListByMaterial',
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

/** 数据统计总数 POST /guide/material/statistics/getSumData */
export async function getSumDataUsingPOST(
  body: API.MaterialStatisticsQuery,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/material/statistics/getSumData', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
