// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取token POST /open/auth/getToken */
export async function getTokenUsingPOST(
  body: API.GetTokenRequest,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/open/auth/getToken', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据导购id和优惠券id  获取领取优惠券的客户列表 POST /open/guidecoupon/getCouponCustomerList */
export async function getCouponCustomerListUsingPOST(
  body: API.CouponCustomerRequest,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/open/guidecoupon/getCouponCustomerList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取优惠券列表 POST /open/guidecoupon/getCouponListByParamenter */
export async function getCouponListByParamenterUsingPOST(
  body: API.CouponParameterRequest0,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/open/guidecoupon/getCouponListByParamenter', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取统计信息优惠券 POST /open/guidecoupon/getCouponStatisticsList */
export async function getCouponStatisticsListUsingPOST(
  body: API.CouponStatisticsRequest,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/open/guidecoupon/getCouponStatisticsList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 领取优惠券 接口 POST /open/guidecoupon/getCouponStatisticsListTest */
export async function getCouponStatisticsListTestUsingPOST(
  body: API.CouponParameterRequest,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/open/guidecoupon/getCouponStatisticsListTest', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 领取优惠券 接口 POST /open/guidecoupon/sendGuideCoupon */
export async function sendGuideCouponUsingPOST(
  body: API.GuideCouponSendRequest,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/open/guidecoupon/sendGuideCoupon', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
