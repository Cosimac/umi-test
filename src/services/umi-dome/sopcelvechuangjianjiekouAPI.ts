// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 核心要素创建sop策略 POST /sop/policy/createByCoreElement */
export async function coreElementCreatePolicyDTOUsingPOST(
  body: API.tongguohexinyaosuchuangjiansopcelvepeizhi,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultlong>('/sop/policy/createByCoreElement', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询sop策略 GET /sop/policy/get */
export async function getUsingGET3(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getUsingGET3Params,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultsopshoudanzhuanhuacelvexiangqing>('/sop/policy/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 查询当前公司正在的运行的sop数量 GET /sop/policy/getAccountPolicyTotal */
export async function getAccountPolicyTotalUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getAccountPolicyTotalUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultlong>('/sop/policy/getAccountPolicyTotal', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 分页查询SOP策略列表 POST /sop/policy/getPage */
export async function getPageUsingPOST(
  body: API.BeanTableRequestsopcelvefenyechaxunqingqiushiti,
  options?: { [key: string]: any },
) {
  return request<API.TableResponsesopshoudanzhuanhuacelvexiangqing>('/sop/policy/getPage', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 判断是否首次进入,返回结果若小于0,则表示是首次进入 GET /sop/policy/judgeFirstOpen */
export async function judgeFirstOpenUsingGET2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.judgeFirstOpenUsingGET2Params,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultlong>('/sop/policy/judgeFirstOpen', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 查询sop策略核心要素 GET /sop/policy/searchCoreElement */
export async function searchPolicyByCoreElementUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.searchPolicyByCoreElementUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResulthexinyaosufanhuiqianduanshiti>(
    '/sop/policy/searchCoreElement',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 启动sop GET /sop/policy/startPolicy */
export async function startPolicyUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.startPolicyUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultboolean>('/sop/policy/startPolicy', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 暂停sop GET /sop/policy/stopPolicy */
export async function stopPolicyUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.stopPolicyUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultboolean>('/sop/policy/stopPolicy', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 核心要素更新sop策略 POST /sop/policy/updateByCoreElement */
export async function updatePolicyByCoreElementUsingPOST(
  body: API.UpdatePolicyByCoreElementRequest,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultobject>('/sop/policy/updateByCoreElement', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
