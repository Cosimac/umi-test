// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** saveOrUpdate POST /notMemberConfig/saveOrUpdate */
export async function saveOrUpdateUsingPOST1(
  body: API.SgGroupConfigVo,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/notMemberConfig/saveOrUpdate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** search GET /notMemberConfig/search */
export async function searchUsingGET(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/notMemberConfig/search', {
    method: 'GET',
    ...(options || {}),
  });
}

/** updateCouponState POST /notMemberConfig/updateCouponState */
export async function updateCouponStateUsingPOST(
  body: API.SgGroupConfigVo,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/notMemberConfig/updateCouponState', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
