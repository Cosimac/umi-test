// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 云平台员工变更通知 POST /open/openguide/employeeUpdateNotify */
export async function employeeUpdateNotifyUsingPOST(
  body: API.EmployeeUpdateNotifyRequest,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/open/openguide/employeeUpdateNotify', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 保存员工微信信息 POST /open/openguide/personWxMsg */
export async function savePersonWxMsgUsingPOST7(
  body: API.PersonWxMsgRequest,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/open/openguide/personWxMsg', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据键查询原始长值 POST /open/openguide/swapLongValue */
export async function swapLongValueUsingPOST(
  body: API.changzhizhuanhuanqingqiushiti,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResult>('/open/openguide/swapLongValue', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
