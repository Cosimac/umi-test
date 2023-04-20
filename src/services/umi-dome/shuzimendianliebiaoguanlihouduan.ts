// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** findDigitalShopByShopId GET /digital/findDigitalShopByShopId */
export async function findDigitalShopByShopIdUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.findDigitalShopByShopIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/digital/findDigitalShopByShopId', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 查询权限区域树 导购管理后台用于查询权限区域树 POST /digital/list */
export async function areaTreeUsingPOST(body: API.TableRequest, options?: { [key: string]: any }) {
  return request<API.BeanCommonResultTableResponseTreeNode>('/digital/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
