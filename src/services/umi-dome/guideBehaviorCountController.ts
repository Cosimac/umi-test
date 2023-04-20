// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取导购行为列表数据 获取导购行为图表数据 GET /wework/guidebehaviorcount/findList */
export async function findListUsingGET2(body: API.TableRequest, options?: { [key: string]: any }) {
  return request<API.TableResponseRecord>('/wework/guidebehaviorcount/findList', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取导购行为列表数据 获取导购行为图表数据 PUT /wework/guidebehaviorcount/findList */
export async function findListUsingPUT2(body: API.TableRequest, options?: { [key: string]: any }) {
  return request<API.TableResponseRecord>('/wework/guidebehaviorcount/findList', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取导购行为列表数据 获取导购行为图表数据 POST /wework/guidebehaviorcount/findList */
export async function findListUsingPOST3(body: API.TableRequest, options?: { [key: string]: any }) {
  return request<API.TableResponseRecord>('/wework/guidebehaviorcount/findList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取导购行为列表数据 获取导购行为图表数据 DELETE /wework/guidebehaviorcount/findList */
export async function findListUsingDELETE2(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseRecord>('/wework/guidebehaviorcount/findList', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取导购行为列表数据 获取导购行为图表数据 PATCH /wework/guidebehaviorcount/findList */
export async function findListUsingPATCH2(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseRecord>('/wework/guidebehaviorcount/findList', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取导购行为图表数据 获取导购行为图表数据 GET /wework/guidebehaviorcount/getBehaviorCount */
export async function getBehaviorCountUsingGET(
  body: API.BaseBehaviorCountDto,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/wework/guidebehaviorcount/getBehaviorCount', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取导购行为图表数据 获取导购行为图表数据 PUT /wework/guidebehaviorcount/getBehaviorCount */
export async function getBehaviorCountUsingPUT(
  body: API.BaseBehaviorCountDto,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/wework/guidebehaviorcount/getBehaviorCount', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取导购行为图表数据 获取导购行为图表数据 POST /wework/guidebehaviorcount/getBehaviorCount */
export async function getBehaviorCountUsingPOST(
  body: API.BaseBehaviorCountDto,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/wework/guidebehaviorcount/getBehaviorCount', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取导购行为图表数据 获取导购行为图表数据 DELETE /wework/guidebehaviorcount/getBehaviorCount */
export async function getBehaviorCountUsingDELETE(
  body: API.BaseBehaviorCountDto,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/wework/guidebehaviorcount/getBehaviorCount', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取导购行为图表数据 获取导购行为图表数据 PATCH /wework/guidebehaviorcount/getBehaviorCount */
export async function getBehaviorCountUsingPATCH(
  body: API.BaseBehaviorCountDto,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/wework/guidebehaviorcount/getBehaviorCount', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
