// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 终止公众号营销活动 GET /mp/message/abort */
export async function abortUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.abortUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultboolean>('/mp/message/abort', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 效果分析 GET /mp/message/analysis */
export async function analysisUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.analysisUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultgongzhonghaoliebiaoxiaoguofenxi>('/mp/message/analysis', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 通过id查公众号营销活动详情 GET /mp/message/detail */
export async function detailUsingGET1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.detailUsingGET1Params,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultgongzhonghaoyingxiaohuodongxiangqingxiangyingti>(
    '/mp/message/detail',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 预估人数 POST /mp/message/estimateUser */
export async function estimateUserUsingPOST(
  body: API.gongzhonghaoyingxiaohuodongrenshuyugushiti,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultlong>('/mp/message/estimateUser', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 客服下拉接口 GET /mp/message/kfList */
export async function kfListUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.kfListUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultListgongzhonghaokefuzhanghao>('/mp/message/kfList', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 公众号营销活动列表 POST /mp/message/list */
export async function findListUsingPOST7(
  body: API.BeanTableRequestgongzhonghaoyingxiaohuodongliebiaoqingqiuti,
  options?: { [key: string]: any },
) {
  return request<API.TableResponsegongzhonghaoyingxiaohuodongliebiaoxiangxiangyingti>(
    '/mp/message/list',
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

/** 图文素材概览接口 POST /mp/message/new */
export async function newsUsingPOST(
  body: API.gongzhonghaotuwenxiaoxiqingqiushiti,
  options?: { [key: string]: any },
) {
  return request<API.WeChatNewDTO>('/mp/message/new', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 图文素材分页接口 POST /mp/message/newList */
export async function newListUsingPOST(
  body: API.BeanTableRequestgongzhonghaotuwenxiaoxiqingqiushiti,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseWeChatNewDTO>('/mp/message/newList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 保存或更新营销活动 POST /mp/message/save */
export async function saveUsingPOST1(
  body: API.gongzhonghaoyingxiaohuodongbaocunqingqiuti,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultboolean>('/mp/message/save', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 模板下拉接口 GET /mp/message/templateList */
export async function templateListUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.templateListUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultListgongzhonghaomoban>('/mp/message/templateList', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
