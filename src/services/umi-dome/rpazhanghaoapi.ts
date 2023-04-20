// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 新增RPA帐号列表 POST /rpa/account/addRpaAccountList */
export async function addRpaAccountListUsingPOST(body: string, options?: { [key: string]: any }) {
  return request<API.BeanCommonResult>('/rpa/account/addRpaAccountList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 判断是否需要提示开通rpa账号,需要true,不需要返回false GET /rpa/account/checkNeedSetupAccount */
export async function checkNeedSetupAccountUsingGET(options?: { [key: string]: any }) {
  return request<API.BeanCommonResultboolean>('/rpa/account/checkNeedSetupAccount', {
    method: 'GET',
    ...(options || {}),
  });
}

/** rpa帐号列表查询 POST /rpa/account/getRpaAccountList */
export async function getRpaAccountListUsingPOST(
  body: API.BeanTableRequestfenyesousuorpazhanghao,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultPageResultDTOrpazhanghaoxiangqing>(
    '/rpa/account/getRpaAccountList',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}

/** 完善手机号 POST /rpa/account/improveMobile */
export async function improveMobileUsingPOST(
  body: API.ImproveMobileDTO,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResult>('/rpa/account/improveMobile', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** rpa帐号发起登录 POST /rpa/account/rpaAccountLogin */
export async function rpaAccountLoginUsingPOST(
  body: API.faqizidongdenglushiti,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResult>('/rpa/account/rpaAccountLogin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取验证码之后流程状态 POST /rpa/account/rpaAccountLoginStatus */
export async function rpaAccountLoginStatusUsingPOST(
  body: API.faqizidongdenglushiti,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultRpaAccountLoginStatusDTO>(
    '/rpa/account/rpaAccountLoginStatus',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}

/** rpa帐号登录验证码 POST /rpa/account/rpaVerification */
export async function rpaVerificationUsingPOST(
  body: API.zhanghaoshuruyanzhengma,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResult>('/rpa/account/rpaVerification', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
