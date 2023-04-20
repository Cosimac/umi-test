// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 群列表导出 POST /wework/weworkRooms/export */
export async function exportUsingPOST3(body: API.TableRequest, options?: { [key: string]: any }) {
  return request<any>('/wework/weworkRooms/export', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getWeWorkRoomsSearchResult GET /wework/weworkRooms/getWeWorkRoomsSearchResult */
export async function getWeWorkRoomsSearchResultUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getWeWorkRoomsSearchResultUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/wework/weworkRooms/getWeWorkRoomsSearchResult', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** queryWeWorkRoomsNameOptions POST /wework/weworkRooms/name */
export async function queryWeWorkRoomsNameOptionsUsingPOST(
  body: API.SgWxQyChatRoomAnalysisQuery,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/wework/weworkRooms/name', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** queryWeWorkRoomsOwnerOptions POST /wework/weworkRooms/owner */
export async function queryWeWorkRoomsOwnerOptionsUsingPOST(
  body: API.SgWxQyChatRoomAnalysisQuery,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/wework/weworkRooms/owner', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** queryWeWorkRoomsLeaderOptions POST /wework/weworkRooms/queryWeWorkRoomsLeaderOptions */
export async function queryWeWorkRoomsLeaderOptionsUsingPOST(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/wework/weworkRooms/queryWeWorkRoomsLeaderOptions', {
    method: 'POST',
    ...(options || {}),
  });
}

/** queryWeWorkRoomsTable POST /wework/weworkRooms/queryWeWorkRoomsTable */
export async function queryWeWorkRoomsTableUsingPOST(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/wework/weworkRooms/queryWeWorkRoomsTable', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
