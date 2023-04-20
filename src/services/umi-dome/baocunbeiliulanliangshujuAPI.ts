// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 保存被浏览量数据 POST /open/imageViewStatistics/saveImageView */
export async function getShopRewardRuleUsingPOST(
  body: API.ImageViewStatisticsRequest,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/open/imageViewStatistics/saveImageView', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
