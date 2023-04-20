// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 导出Excel文件 POST /file/export/record/exportExcel */
export async function exportFileUsingPOST(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/file/export/record/exportExcel', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 是否有可下载的文件 GET /file/export/record/isSuccess */
export async function isSuccessUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.isSuccessUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/file/export/record/isSuccess', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取文件导出记录表列表 POST /file/export/record/list */
export async function listUsingPOST5(body: API.TableRequest, options?: { [key: string]: any }) {
  return request<API.BeanTableResponsewenjiandaochujiluVO>('/file/export/record/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** queryById GET /file/export/record/queryById */
export async function queryByIdUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.queryByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/file/export/record/queryById', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** OSS下载文件 POST /file/export/record/segmentedDownload */
export async function segmentedDownloadUsingPOST(
  body: API.OSSDownloadSearchDTO,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/file/export/record/segmentedDownload', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
