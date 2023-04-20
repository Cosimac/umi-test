// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 第一行通用查询 GET /chat-room/session-statistics/general */
export async function generalUsingGET1(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/chat-room/session-statistics/general', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 列表查询 POST /chat-room/session-statistics/list */
export async function listUsingPOST19(
  body: API.SgWxQyChatRoomSessionStatisticsQuery,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/chat-room/session-statistics/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 会话列表导出 POST /chat-room/session-statistics/list_export */
export async function sessionListExportUsingPOST(
  body: API.SgWxQyChatRoomSessionStatisticsQuery,
  options?: { [key: string]: any },
) {
  return request<any>('/chat-room/session-statistics/list_export', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 通过日期查询 POST /chat-room/session-statistics/page_list_by_date */
export async function pageListByDateUsingPOST1(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/chat-room/session-statistics/page_list_by_date', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 通过员工查询 POST /chat-room/session-statistics/page_list_by_user */
export async function pageListByOwnerUsingPOST(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/chat-room/session-statistics/page_list_by_user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
