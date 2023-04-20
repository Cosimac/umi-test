// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取红包封面详情 GET /redpack/cover/${param0} */
export async function showUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.showUsingGETParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.BeanCommonResulthongbaofengmianxiangqing>(`/redpack/cover/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 设置默认封面 POST /redpack/cover/${param0}/setDefault */
export async function setDefaultUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.setDefaultUsingPOSTParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.CommonResult>(`/redpack/cover/${param0}/setDefault`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 新增红包封面 POST /redpack/cover/create */
export async function createUsingPOST1(body: API.CreateCoverVO, options?: { [key: string]: any }) {
  return request<API.BeanCommonResultIdDTO>('/redpack/cover/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除红包封面 POST /redpack/cover/deleteById/${param0} */
export async function deleteUsingPOST3(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteUsingPOST3Params,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.CommonResult>(`/redpack/cover/deleteById/${param0}`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 获取红包封面列表 POST /redpack/cover/list */
export async function indexUsingPOST(
  body: API.SearchRequestVOSearchCoverVO,
  options?: { [key: string]: any },
) {
  return request<API.TableResponsehongbaofengmianxiangqing>('/redpack/cover/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新红包封面 POST /redpack/cover/updateById/${param0} */
export async function updateUsingPOST1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateUsingPOST1Params,
  body: API.UpdateCoverVO,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.CommonResult>(`/redpack/cover/updateById/${param0}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}
