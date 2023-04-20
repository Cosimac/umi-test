// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 根据key查询系统配置 根据key查询系统配置, 如根据customer_transfer_notify_msg查询企微好友转移默认通知消息 GET /Guide/SystemPreset/findEnterpriseMessage */
export async function findEnterpriseMessageUsingGET(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/Guide/SystemPreset/findEnterpriseMessage', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取系统预留默认链接 获取系统预留默认链接,如招募连接 POST /Guide/SystemPreset/getLink */
export async function getLinkUsingPOST(
  body: API.SystemPresetQuery,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultListSystemPresetDto>('/Guide/SystemPreset/getLink', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取客道企微店铺列表 获取客道企微店铺列表和默认url GET /Guide/SystemPreset/getLinkKD */
export async function getLinkKDUsingGET(options?: { [key: string]: any }) {
  return request<API.BeanCommonResultListShopUrlDTO>('/Guide/SystemPreset/getLinkKD', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 根据key查询系统配置 根据key查询系统配置, 如根据customer_transfer_notify_msg查询企微好友转移默认通知消息 GET /Guide/SystemPreset/getSysConfigByKey */
export async function getSysConfigByKeyUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getSysConfigByKeyUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/Guide/SystemPreset/getSysConfigByKey', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
