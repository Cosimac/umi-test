// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 好友流失，群成员流失导出 POST /wework/lossFriends/exportLossFriendsList */
export async function exportLossFriendsListUsingPOST(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<any>('/wework/lossFriends/exportLossFriendsList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** queryLossFriendsList POST /wework/lossFriends/queryLossFriendsList */
export async function queryLossFriendsListUsingPOST(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseRecord>('/wework/lossFriends/queryLossFriendsList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
