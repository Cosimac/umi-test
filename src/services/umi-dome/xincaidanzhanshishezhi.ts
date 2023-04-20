// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 新增 POST /setting/menu/config/add */
export async function addUsingPOST1(body: API.xinzengVO, options?: { [key: string]: any }) {
  return request<API.BeanCommonResultobject>('/setting/menu/config/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 配置菜单列表 GET /setting/menu/config/list */
export async function listUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultListcaidanpeizhidto>('/setting/menu/config/list', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
