// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** activityAdduserList POST /lbs/chatroom/activityAdduserList */
export async function activityAdduserListUsingPOST(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponse>('/lbs/chatroom/activityAdduserList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** activityAnalysisShopList POST /lbs/chatroom/activityAnalysisShopList */
export async function activityAnalysisShopListUsingPOST(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponse>('/lbs/chatroom/activityAnalysisShopList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** chatroomActivityShop POST /lbs/chatroom/activityShop */
export async function chatroomActivityShopUsingPOST(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseRecord>('/lbs/chatroom/activityShop', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** activityShopAndAdduserNum POST /lbs/chatroom/activityShopAndAdduserNum */
export async function activityShopAndAdduserNumUsingPOST(
  body: API.SgLbsActivityAdduserQuery,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/lbs/chatroom/activityShopAndAdduserNum', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** activityShopDetail POST /lbs/chatroom/activityShopDetail */
export async function activityShopDetailUsingPOST(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponse>('/lbs/chatroom/activityShopDetail', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** addChatroom POST /lbs/chatroom/addChatroom */
export async function addChatroomUsingPOST(
  body: API.SgLbsChatRoomGroupQuery,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/lbs/chatroom/addChatroom', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteChatroom POST /lbs/chatroom/deleteChatroom */
export async function deleteChatroomUsingPOST(
  body: API.SgLbsDeleteChatRoomQuery,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/lbs/chatroom/deleteChatroom', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** chatroomEdit POST /lbs/chatroom/edit */
export async function chatroomEditUsingPOST(
  body: API.SgLbsActivityEditQuery,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/lbs/chatroom/edit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** chatroomEndActivity POST /lbs/chatroom/endActivity */
export async function chatroomEndActivityUsingPOST(
  body: API.SgLbsEndActivityQuery,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/lbs/chatroom/endActivity', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** exportActivityAddUserData POST /lbs/chatroom/exportActivityAddUserData */
export async function exportActivityAddUserDataUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.exportActivityAddUserDataUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<any>('/lbs/chatroom/exportActivityAddUserData', {
    method: 'POST',
    params: {
      ...params,
      map: undefined,
      ...params['map'],
    },
    ...(options || {}),
  });
}

/** exportActivityShopData POST /lbs/chatroom/exportActivityShopData */
export async function exportActivityShopDataUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.exportActivityShopDataUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<any>('/lbs/chatroom/exportActivityShopData', {
    method: 'POST',
    params: {
      ...params,
      map: undefined,
      ...params['map'],
    },
    ...(options || {}),
  });
}

/** list POST /lbs/chatroom/list */
export async function listUsingPOST7(body: API.TableRequest, options?: { [key: string]: any }) {
  return request<API.TableResponseRecord>('/lbs/chatroom/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** chatroomSave POST /lbs/chatroom/saveOrUpdate */
export async function chatroomSaveUsingPOST(
  body: API.SgLbsActivityDTO,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/lbs/chatroom/saveOrUpdate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** friendActivityAdduserList POST /lbs/friend/activityAdduserList */
export async function friendActivityAdduserListUsingPOST(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponse>('/lbs/friend/activityAdduserList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** activityAnalysisChannelDataList POST /lbs/friend/activityAnalysisChannelDataList */
export async function activityAnalysisChannelDataListUsingPOST(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponse>('/lbs/friend/activityAnalysisChannelDataList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** activityAnalysisPicture POST /lbs/friend/activityAnalysisPicture */
export async function activityAnalysisPictureUsingPOST(
  body: API.SgLbsActivityPictureQuery,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/lbs/friend/activityAnalysisPicture', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** friendActivityAnalysisShopList POST /lbs/friend/activityAnalysisShopList */
export async function friendActivityAnalysisShopListUsingPOST(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponse>('/lbs/friend/activityAnalysisShopList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** friendActivityShopAndAdduserNum POST /lbs/friend/activityShopAndAdduserNum */
export async function friendActivityShopAndAdduserNumUsingPOST(
  body: API.SgLbsActivityAdduserQuery,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/lbs/friend/activityShopAndAdduserNum', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** friendEdit POST /lbs/friend/edit */
export async function friendEditUsingPOST(
  body: API.SgLbsActivityEditQuery,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/lbs/friend/edit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** endActivity POST /lbs/friend/endActivity */
export async function endActivityUsingPOST(
  body: API.SgLbsEndActivityQuery,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/lbs/friend/endActivity', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findLbsList POST /lbs/friend/findLbsList */
export async function findLbsListUsingPOST(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseRecord>('/lbs/friend/findLbsList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** friendActivityAnalysisDetailsList POST /lbs/friend/friendActivityAnalysisDetailsList */
export async function friendActivityAnalysisDetailsListUsingPOST(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponse>('/lbs/friend/friendActivityAnalysisDetailsList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 重新构建“联系我”二维码 POST /lbs/friend/rebuildQrCode */
export async function rebuildQrCodeUsingPOST(
  body: API.SgLbsRebuildQrCodeQuery,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/lbs/friend/rebuildQrCode', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** friendSave POST /lbs/friend/saveOrUpdate */
export async function friendSaveUsingPOST(
  body: API.SgLbsActivityDTO,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/lbs/friend/saveOrUpdate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** shopSearch POST /lbs/friend/shopSearch */
export async function shopSearchUsingPOST(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseRecord>('/lbs/friend/shopSearch', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
