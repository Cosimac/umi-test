// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取绑定平台账号结果页面配置集合 获取绑定平台账号结果页面配置集合 GET /bindPlatformAccount/config/getResultPageConfig */
export async function getResultPageConfigUsingGET(options?: { [key: string]: any }) {
  return request<API.BeanCommonResultListBindPlatformAccountResultPageDto>(
    '/bindPlatformAccount/config/getResultPageConfig',
    {
      method: 'GET',
      ...(options || {}),
    },
  );
}

/** 更新绑定平台账号结果页面配置 更新绑定平台账号结果页面配置 POST /bindPlatformAccount/config/updateResultPageConfig */
export async function updateResultPageConfigUsingPOST(
  body: API.BindPlatformAccountResultPageSaveQuery,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/bindPlatformAccount/config/updateResultPageConfig', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
