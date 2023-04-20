// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 查询模块预置参数 GET /setting/sys/findPresetParamList */
export async function findPresetParamListUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.findPresetParamListUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultListxitongbutongyewuyushecanshupeizhiDTO>(
    '/setting/sys/findPresetParamList',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 获取小程序列表 GET /setting/sys/findWxAppletsList */
export async function findWxAppletsListUsingGET(options?: { [key: string]: any }) {
  return request<API.BeanCommonResultListsanfangxiaochengxuxinxi>(
    '/setting/sys/findWxAppletsList',
    {
      method: 'GET',
      ...(options || {}),
    },
  );
}

/** 保存模块预置参数 POST /setting/sys/savePresetParamList */
export async function savePresetParamsUsingPOST(
  body: API.yushecanshubaocunshiti,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/setting/sys/savePresetParamList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取各种平台的url GET /setting/sys/urls */
export async function urlsUsingGET(options?: { [key: string]: any }) {
  return request<API.BeanCommonResultUrlsVo>('/setting/sys/urls', {
    method: 'GET',
    ...(options || {}),
  });
}
