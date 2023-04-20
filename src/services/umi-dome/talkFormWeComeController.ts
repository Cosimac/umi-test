// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取会话记录群列表 GET /guide/talk/chatRoomList */
export async function getChatRoomListUsingGET(
  body: API.SaveTalkPageQuery,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/talk/chatRoomList', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取会话记录群列表 PUT /guide/talk/chatRoomList */
export async function getChatRoomListUsingPUT(
  body: API.SaveTalkPageQuery,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/talk/chatRoomList', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取会话记录群列表 POST /guide/talk/chatRoomList */
export async function getChatRoomListUsingPOST(
  body: API.SaveTalkPageQuery,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/talk/chatRoomList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取会话记录群列表 DELETE /guide/talk/chatRoomList */
export async function getChatRoomListUsingDELETE(
  body: API.SaveTalkPageQuery,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/talk/chatRoomList', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取会话记录群列表 PATCH /guide/talk/chatRoomList */
export async function getChatRoomListUsingPATCH(
  body: API.SaveTalkPageQuery,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/talk/chatRoomList', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取会话记录外部联系人列表 GET /guide/talk/externalUserList */
export async function getExternalUserListUsingGET(
  body: API.SaveTalkPageQuery,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/talk/externalUserList', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取会话记录外部联系人列表 PUT /guide/talk/externalUserList */
export async function getExternalUserListUsingPUT(
  body: API.SaveTalkPageQuery,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/talk/externalUserList', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取会话记录外部联系人列表 POST /guide/talk/externalUserList */
export async function getExternalUserListUsingPOST(
  body: API.SaveTalkPageQuery,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/talk/externalUserList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取会话记录外部联系人列表 DELETE /guide/talk/externalUserList */
export async function getExternalUserListUsingDELETE(
  body: API.SaveTalkPageQuery,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/talk/externalUserList', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取会话记录外部联系人列表 PATCH /guide/talk/externalUserList */
export async function getExternalUserListUsingPATCH(
  body: API.SaveTalkPageQuery,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/talk/externalUserList', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询成员会话统计列表-业绩考核 POST /guide/talk/getSessionStatistics */
export async function getSessionStatisticsUsingPOST(
  body: API.huihuatongjishitiduixiang,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultTableResponsehuihuatongjifanhuiduixiang>(
    '/guide/talk/getSessionStatistics',
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

/** 获取会话记录导购列表 GET /guide/talk/guideList */
export async function getOpenGuideListUsingGET(
  body: API.SaveTalkPageQuery,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/talk/guideList', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取会话记录导购列表 PUT /guide/talk/guideList */
export async function getOpenGuideListUsingPUT(
  body: API.SaveTalkPageQuery,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/talk/guideList', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取会话记录导购列表 POST /guide/talk/guideList */
export async function getOpenGuideListUsingPOST(
  body: API.SaveTalkPageQuery,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/talk/guideList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取会话记录导购列表 DELETE /guide/talk/guideList */
export async function getOpenGuideListUsingDELETE(
  body: API.SaveTalkPageQuery,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/talk/guideList', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取会话记录导购列表 PATCH /guide/talk/guideList */
export async function getOpenGuideListUsingPATCH(
  body: API.SaveTalkPageQuery,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/talk/guideList', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 和导购聊天的成员列表 GET /guide/talk/talkToGuideList */
export async function talkToGuideListUsingGET(
  body: API.SaveTalkPageQuery,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/talk/talkToGuideList', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 和导购聊天的成员列表 PUT /guide/talk/talkToGuideList */
export async function talkToGuideListUsingPUT(
  body: API.SaveTalkPageQuery,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/talk/talkToGuideList', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 和导购聊天的成员列表 POST /guide/talk/talkToGuideList */
export async function talkToGuideListUsingPOST(
  body: API.SaveTalkPageQuery,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/talk/talkToGuideList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 和导购聊天的成员列表 DELETE /guide/talk/talkToGuideList */
export async function talkToGuideListUsingDELETE(
  body: API.SaveTalkPageQuery,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/talk/talkToGuideList', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 和导购聊天的成员列表 PATCH /guide/talk/talkToGuideList */
export async function talkToGuideListUsingPATCH(
  body: API.SaveTalkPageQuery,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/talk/talkToGuideList', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
