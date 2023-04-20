// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 互动雷达新增 POST /interactive/radar/addRadar */
export async function addRadarUsingPOST(
  body: API.chuangjianhudongleidahuodongzhubiao,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultstring>('/interactive/radar/addRadar', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 互动雷达-删除雷达 GET /interactive/radar/deleteRadar */
export async function deleteRadarUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteRadarUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultstring>('/interactive/radar/deleteRadar', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 互动雷达-编辑雷达 POST /interactive/radar/editRadar */
export async function editRadarUsingPOST(
  body: API.gengxinhudongleidahuodongzhubiao,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultstring>('/interactive/radar/editRadar', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 互动雷达列表查询 POST /interactive/radar/getRadarList */
export async function getRadarListUsingPOST(
  body: API.fenyesousuohudongleidahuodongzhubiao,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultPageResultDTOhudongleidahuodongzhubiaoxiangqing>(
    '/interactive/radar/getRadarList',
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

/** 互动雷达获取链接详情 POST /interactive/radar/getUrlDetail */
export async function getUrlDetailUsingPOST(body: string, options?: { [key: string]: any }) {
  return request<API.BeanCommonResultMapstringstring>('/interactive/radar/getUrlDetail', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 互动雷达-获取当前雷达全部渠道-下拉框 POST /interactive/radar/queryAllChannelByRadarCode */
export async function queryAllChannelByRadarCodeUsingPOST(
  body: API.sousuoleidaqudaobiao,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultListleidaqudaobiaoxiangqing>(
    '/interactive/radar/queryAllChannelByRadarCode',
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

/** 互动雷达-渠道链接查询列表 POST /interactive/radar/queryAllChannelLinkPage */
export async function queryAllChannelLinkPageUsingPOST(
  body: API.fenyesousuoleidaqudaobiao,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultPageResultDTOleidaqudaobiaoxiangqing>(
    '/interactive/radar/queryAllChannelLinkPage',
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

/** 互动雷达-查询雷达详情 GET /interactive/radar/queryRadarDetailById */
export async function queryRadarDetailByIdUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.queryRadarDetailByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResulthudongleidahuodongzhubiaoxiangqing>(
    '/interactive/radar/queryRadarDetailById',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 互动雷达-效果分析 POST /interactive/radar/radarAnalysis */
export async function radarAnalysisUsingPOST(
  body: API.qudaofenxisousuodto,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultMapstringobject>('/interactive/radar/radarAnalysis', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 互动雷达-效果分析-用户明细 POST /interactive/radar/userCount */
export async function userCountUsingPOST(
  body: API.qudaofenxisousuodto,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultPageResultDTOhudongleidayonghutongji>(
    '/interactive/radar/userCount',
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

/** 互动雷达-效果分析-用户明细-查看详情 POST /interactive/radar/userCountDetail */
export async function userCountDetailUsingPOST(
  body: API.qudaofenxisousuodto,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultPageResultDTOhudongleidayonghuxiangqing>(
    '/interactive/radar/userCountDetail',
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
