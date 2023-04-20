// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 根据参数查询对应话术  POST /open/quickWord/findQuicklyWordListByParamenter */
export async function findQuicklyWordListByParamenterUsingPOST(
  body: API.QuickWordGetListByParamenterRequest,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/open/quickWord/findQuicklyWordListByParamenter', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据公司ID 对应所有话术类别 POST /open/quickWord/findQuicklyWordMenuByWordGroupId */
export async function findQuicklyWordListByWordGroupIdUsingPOST(
  body: API.QuickWordGetMenuListByWordGroupIdRequest,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/open/quickWord/findQuicklyWordMenuByWordGroupId', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
