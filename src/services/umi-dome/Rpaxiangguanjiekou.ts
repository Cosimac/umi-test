// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 能⼒执⾏结果上报 POST /open/rpa/abilityReport */
export async function abilityReportUsingPOST(
  body: API.RpaAbilityReportRequest,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/open/rpa/abilityReport', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 账号异常状态上报 POST /open/rpa/accountAbnormal */
export async function accountAbnormalUsingPOST(
  body: API.RpaAccountAbnormalRequest,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/open/rpa/accountAbnormal', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 添加好友结果上报接口 POST /open/rpa/addFriendResult */
export async function addFriendUsingPOST(
  body: API.RpaAddFriendRequest,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/open/rpa/addFriendResult', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 二维码上报接口 POST /open/rpa/qrCodeSend */
export async function rpaQrCodeUsingPOST(
  body: API.RpaQrCodeRequest,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/open/rpa/qrCodeSend', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 发送验证码通知 POST /open/rpa/verificationCode */
export async function rpaVerificationCodeUsingPOST(
  body: API.RpaVerificationCodeRequest,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/open/rpa/verificationCode', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
