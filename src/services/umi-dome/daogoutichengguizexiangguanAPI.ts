// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取门店提成设置规则 POST /open/rewardrule/getShopRewardRule */
export async function getShopRewardRuleUsingPOST2(
  body: API.ShopRewardRuleGetRequest,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/open/rewardrule/getShopRewardRule', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
