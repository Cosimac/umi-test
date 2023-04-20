// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取客户端地址 GET /rpa/account/getClientUrl */
export async function getClientUrlUsingGET(options?: { [key: string]: any }) {
  return request<API.BeanCommonResultstring>('/rpa/account/getClientUrl', {
    method: 'GET',
    ...(options || {}),
  });
}

/** rpa坐席移除用户帐号 POST /rpa/account/removeSeatUser */
export async function seatUserUsingPOST(body: number, options?: { [key: string]: any }) {
  return request<API.BeanCommonResultobject>('/rpa/account/removeSeatUser', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** rpa坐席详情 GET /rpa/account/seatDetail */
export async function seatDetailUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.seatDetailUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultRpaSeatAccountDTO>('/rpa/account/seatDetail', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** rpa坐席列表查询 POST /rpa/account/seatList */
export async function getRpaAccountListUsingPOST1(
  body: API.BeanTableRequestRpaSearchAccountRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseRpaSeatAccountPageDTO>('/rpa/account/seatList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 坐席未绑定列表查询 POST /rpa/account/seatUnBindUserList */
export async function seatUnBindUserListUsingPOST(
  body: API.BeanTableRequestsousuorpazuoxiguanlianrpazhanghaobiao,
  options?: { [key: string]: any },
) {
  return request<API.TableResponserpazhanghaoxiangqing>('/rpa/account/seatUnBindUserList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** rpa坐席添加用户帐号 POST /rpa/account/seatUser */
export async function seatUserUsingPOST1(
  body: API.RpaCreateSeatUserDTO[],
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultobject>('/rpa/account/seatUser', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** rpa坐席已绑定帐号列表查询 POST /rpa/account/seatUserList */
export async function seatUserListUsingPOST(
  body: API.BeanTableRequestsousuorpazuoxiguanlianrpazhanghaobiao,
  options?: { [key: string]: any },
) {
  return request<API.TableResponserpazuoxiguanlianrpazhanghaobiaoxiangqing>(
    '/rpa/account/seatUserList',
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
