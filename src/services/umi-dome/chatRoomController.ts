// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** canJoinChatIdList POST /chatRoom/canJoinChatIdList */
export async function canJoinChatIdListUsingPOST(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<string[]>('/chatRoom/canJoinChatIdList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** canJoinList POST /chatRoom/canJoinList */
export async function canJoinListUsingPOST(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponse>('/chatRoom/canJoinList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** delete GET /chatRoom/delete */
export async function deleteUsingGET1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteUsingGET1Params,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/chatRoom/delete', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** findByChatIds POST /chatRoom/findByChatIds */
export async function findByChatIdsUsingPOST(
  body: API.ChatRoomIdsDTO,
  options?: { [key: string]: any },
) {
  return request<API.Record[]>('/chatRoom/findByChatIds', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** list POST /chatRoom/list */
export async function listUsingPOST2(body: API.TableRequest, options?: { [key: string]: any }) {
  return request<API.TableResponseRecord>('/chatRoom/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
