// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 单个画布数据分析接口 GET /sop/canvas/dataAnalyse/canvasDataAnalyse */
export async function canvasDataAnalyseUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.canvasDataAnalyseUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultSopshujufenxijieguo>(
    '/sop/canvas/dataAnalyse/canvasDataAnalyse',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 分页查询画布列表 POST /sop/canvas/dataAnalyse/searchCanvasLineItemPage */
export async function searchCanvasLineItemPageUsingPOST(
  body: API.BeanTableRequestsophuabufenyechaxunliebiaocanshu,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseSophuabuliebiaoxingxiangmuxiangqing>(
    '/sop/canvas/dataAnalyse/searchCanvasLineItemPage',
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

/** 查询不同状态画布的数量 GET /sop/canvas/dataAnalyse/searchCanvasStatusGroup */
export async function searchCanvasStatusGroupUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.searchCanvasStatusGroupUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultSophuabuliebiaozhuangtaifenzushuliangxiangqing>(
    '/sop/canvas/dataAnalyse/searchCanvasStatusGroup',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 单个策略器数据分析接口 GET /sop/canvas/dataAnalyse/strategyDataAnalyse */
export async function strategyDataAnalyseUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.strategyDataAnalyseUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultSopcelveqishujufenxijieguo>(
    '/sop/canvas/dataAnalyse/strategyDataAnalyse',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 单个策略器数据分页分析接口 POST /sop/canvas/dataAnalyse/strategyDataAnalysePage */
export async function strategyDataAnalysePageUsingPOST(
  body: API.BeanTableRequestsopcelveqifenyechaxunliebiaocanshu,
  options?: { [key: string]: any },
) {
  return request<API.TableResponsemeirimubiaozhuanhualv>(
    '/sop/canvas/dataAnalyse/strategyDataAnalysePage',
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
