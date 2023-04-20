// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 第一行通用查询 GET /chat-room/analysis/general */
export async function generalUsingGET(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/chat-room/analysis/general', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 列表查询 POST /chat-room/analysis/list */
export async function listUsingPOST18(
  body: API.SgWxQyChatRoomAnalysisQuery,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/chat-room/analysis/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 群分析列表导出 POST /chat-room/analysis/list_export */
export async function chatRoomListExportUsingPOST(
  body: API.SgWxQyChatRoomAnalysisQuery,
  options?: { [key: string]: any },
) {
  return request<any>('/chat-room/analysis/list_export', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 通过日期查询 POST /chat-room/analysis/page_list_by_date */
export async function pageListByDateUsingPOST(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/chat-room/analysis/page_list_by_date', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 通过员工查询 POST /chat-room/analysis/page_list_by_user */
export async function pageListByUserUsingPOST(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/chat-room/analysis/page_list_by_user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
