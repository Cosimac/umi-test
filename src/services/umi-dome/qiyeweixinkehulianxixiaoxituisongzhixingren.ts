// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 7.17.0-获取执行人列表 POST /wework/groupMessage/target */
export async function targetUsingPOST(
  body: API.BeanTableRequestTargetQuery,
  options?: { [key: string]: any },
) {
  return request<API.TableResponsequnfaxiaoxizhixingrenxiangqing>('/wework/groupMessage/target', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 群列表 POST /wework/groupMessage/target/chatRooms */
export async function chatRoomsUsingPOST(
  body: API.BeanTableRequestTargetChatRoomQuery,
  options?: { [key: string]: any },
) {
  return request<API.TableResponsekehuqunxiangqingbiaoxiangqing>(
    '/wework/groupMessage/target/chatRooms',
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
