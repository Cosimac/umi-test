// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 查询重复好友列表 查询当前视角下导购们重复的好友 GET /wework/repeat/getRepeatCustomerList */
export async function getRepeatCustomerListUsingGET(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseMapstringobject>('/wework/repeat/getRepeatCustomerList', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询重复好友列表 查询当前视角下导购们重复的好友 PUT /wework/repeat/getRepeatCustomerList */
export async function getRepeatCustomerListUsingPUT(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseMapstringobject>('/wework/repeat/getRepeatCustomerList', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询重复好友列表 查询当前视角下导购们重复的好友 POST /wework/repeat/getRepeatCustomerList */
export async function getRepeatCustomerListUsingPOST(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseMapstringobject>('/wework/repeat/getRepeatCustomerList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询重复好友列表 查询当前视角下导购们重复的好友 DELETE /wework/repeat/getRepeatCustomerList */
export async function getRepeatCustomerListUsingDELETE(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseMapstringobject>('/wework/repeat/getRepeatCustomerList', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询重复好友列表 查询当前视角下导购们重复的好友 PATCH /wework/repeat/getRepeatCustomerList */
export async function getRepeatCustomerListUsingPATCH(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseMapstringobject>('/wework/repeat/getRepeatCustomerList', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询重复导购列表 查询当前视角下导购们重复的导购 GET /wework/repeat/getRepeatGuideList */
export async function getRepeatGuideListUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getRepeatGuideListUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.TableResponse>('/wework/repeat/getRepeatGuideList', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 查询重复导购列表 查询当前视角下导购们重复的导购 PUT /wework/repeat/getRepeatGuideList */
export async function getRepeatGuideListUsingPUT(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getRepeatGuideListUsingPUTParams,
  options?: { [key: string]: any },
) {
  return request<API.TableResponse>('/wework/repeat/getRepeatGuideList', {
    method: 'PUT',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 查询重复导购列表 查询当前视角下导购们重复的导购 POST /wework/repeat/getRepeatGuideList */
export async function getRepeatGuideListUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getRepeatGuideListUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.TableResponse>('/wework/repeat/getRepeatGuideList', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 查询重复导购列表 查询当前视角下导购们重复的导购 DELETE /wework/repeat/getRepeatGuideList */
export async function getRepeatGuideListUsingDELETE(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getRepeatGuideListUsingDELETEParams,
  options?: { [key: string]: any },
) {
  return request<API.TableResponse>('/wework/repeat/getRepeatGuideList', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 查询重复导购列表 查询当前视角下导购们重复的导购 PATCH /wework/repeat/getRepeatGuideList */
export async function getRepeatGuideListUsingPATCH(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getRepeatGuideListUsingPATCHParams,
  options?: { [key: string]: any },
) {
  return request<API.TableResponse>('/wework/repeat/getRepeatGuideList', {
    method: 'PATCH',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
