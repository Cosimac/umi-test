// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取门店提成设置规则 POST /open/reward/getShopRewardRule */
export async function getShopRewardRuleUsingPOST1(
  body: API.ShopRewardRuleGetRequest,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/open/reward/getShopRewardRule', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
