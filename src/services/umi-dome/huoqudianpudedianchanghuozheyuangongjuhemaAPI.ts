// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 查询店铺聚合码数据 POST /open/shopCode/findShopCode */
export async function findShopCodeUsingPOST(
  body: API.StoreCodeRequest,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/open/shopCode/findShopCode', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
