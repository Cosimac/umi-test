// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 公司分发 POST /sop/canvas/template/distributeToCompany */
export async function distributeToCompanyUsingPOST(
  body: API.mobanfenfaqingqiuti,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultboolean>('/sop/canvas/template/distributeToCompany', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取集团信息列表 POST /sop/canvas/template/listAllGroup */
export async function findListUsingPOST18(
  body: API.gongsiquanliebiaodeqingqiu,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultListyifenfadegongsiliebiao>(
    '/sop/canvas/template/listAllGroup',
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

/** 列出已分发的公司列表 POST /sop/canvas/template/listDistributedCompany */
export async function listDistributedCompanyUsingPOST(
  body: API.liechuyifenfadegongsiliebiaoqingqiuti,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultListyifenfadegongsiliebiao>(
    '/sop/canvas/template/listDistributedCompany',
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

/** 以公司维度分页列出已分发的模板列表 POST /sop/canvas/template/listTemplateGroupByCompany */
export async function listTemplateGroupByCompanyUsingPOST(
  body: API.BeanTableRequestyigongsiweidufenyechaxunyifenfademobanliebiaoqingqiu,
  options?: { [key: string]: any },
) {
  return request<API.BeanTableResponsemobanliebiao>(
    '/sop/canvas/template/listTemplateGroupByCompany',
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

/** 分页查询画布模板列表 POST /sop/canvas/template/searchCanvasLineItemPage */
export async function searchCanvasLineItemPageUsingPOST1(
  body: API.BeanTableRequestsophuabufenyechaxunliebiaocanshu,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseSopmobanliebiaoxingxiangmuxiangqing>(
    '/sop/canvas/template/searchCanvasLineItemPage',
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

/** 查询不同状态模板的数量 GET /sop/canvas/template/searchCanvasStatusGroup */
export async function searchCanvasStatusGroupUsingGET1(options?: { [key: string]: any }) {
  return request<API.BeanCommonResultSopmobanliebiaozhuangtaifenzushuliangxiangqing>(
    '/sop/canvas/template/searchCanvasStatusGroup',
    {
      method: 'GET',
      ...(options || {}),
    },
  );
}

/** 模板下架 POST /sop/canvas/template/templatePullOff */
export async function templatePullOffUsingPOST(
  body: API.mobanxiajiaqingqiuti,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultboolean>('/sop/canvas/template/templatePullOff', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新模板分发说明 GET /sop/canvas/template/updateTemplateDistribution */
export async function updateTemplateDistributionUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateTemplateDistributionUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultboolean>('/sop/canvas/template/updateTemplateDistribution', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
