// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 朋友圈统计导出 POST /guide/momentList/exportMomentStatistics */
export async function exportMomentStatisticsUsingPOST(
  body: API.MomentListDTO,
  options?: { [key: string]: any },
) {
  return request<any>('/guide/momentList/exportMomentStatistics', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 客户朋友圈企业发表的列表导出 POST /guide/momentList/exportMomentTask */
export async function exportMomentTaskUsingPOST(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<any>('/guide/momentList/exportMomentTask', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取朋友圈互动情况 GET /guide/momentList/getInteractive */
export async function getInteractiveUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getInteractiveUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/momentList/getInteractive', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取朋友圈列表 POST /guide/momentList/getList */
export async function getListUsingPOST3(body: API.MomentListDTO, options?: { [key: string]: any }) {
  return request<API.CommonResult>('/guide/momentList/getList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取客户朋友圈企业发表的列表 POST /guide/momentList/getMomentTask */
export async function getMomentTaskUsingPOST1(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/momentList/getMomentTask', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取朋友圈发布可见用户 GET /guide/momentList/getVisibleUser */
export async function getVisibleUserUsingGET1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getVisibleUserUsingGET1Params,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/momentList/getVisibleUser', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
