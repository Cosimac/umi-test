// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 全局模糊匹配获取系统菜单 POST /system/menu/getMenuList */
export async function getMenuListUsingPOST(
  body: API.SystemMenuQuery,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResult>('/system/menu/getMenuList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取宣传广告菜单 POST /system/menu/getPropagandaList */
export async function getPropagandaListUsingPOST(
  body: API.SystemMenuQuery,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResult>('/system/menu/getPropagandaList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 保存菜单日志记录 POST /system/menu/saveMenuLog */
export async function saveMenuLogUsingPOST(
  body: API.SystemMenuLog,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResult>('/system/menu/saveMenuLog', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
