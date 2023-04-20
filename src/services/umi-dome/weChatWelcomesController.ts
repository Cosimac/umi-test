// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 查询智能欢迎语配置列表 导购管理后台用于查询智能欢迎语配置列表，默认数据范围为：当前登录账号所在公司. GET /wechat/wechatwelcomes/findList */
export async function findListUsingGET15(body: API.TableRequest, options?: { [key: string]: any }) {
  return request<API.TableResponseRecord>('/wechat/wechatwelcomes/findList', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询智能欢迎语配置列表 导购管理后台用于查询智能欢迎语配置列表，默认数据范围为：当前登录账号所在公司. PUT /wechat/wechatwelcomes/findList */
export async function findListUsingPUT15(body: API.TableRequest, options?: { [key: string]: any }) {
  return request<API.TableResponseRecord>('/wechat/wechatwelcomes/findList', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询智能欢迎语配置列表 导购管理后台用于查询智能欢迎语配置列表，默认数据范围为：当前登录账号所在公司. POST /wechat/wechatwelcomes/findList */
export async function findListUsingPOST21(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseRecord>('/wechat/wechatwelcomes/findList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询智能欢迎语配置列表 导购管理后台用于查询智能欢迎语配置列表，默认数据范围为：当前登录账号所在公司. DELETE /wechat/wechatwelcomes/findList */
export async function findListUsingDELETE15(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseRecord>('/wechat/wechatwelcomes/findList', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询智能欢迎语配置列表 导购管理后台用于查询智能欢迎语配置列表，默认数据范围为：当前登录账号所在公司. PATCH /wechat/wechatwelcomes/findList */
export async function findListUsingPATCH15(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseRecord>('/wechat/wechatwelcomes/findList', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询智能欢迎语详情 GET /wechat/wechatwelcomes/getWelcomeCode */
export async function getWelcomeCodeUsingGET1(
  body: API.WeChatWelcomeCodeDto,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/wechat/wechatwelcomes/getWelcomeCode', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询智能欢迎语详情 PUT /wechat/wechatwelcomes/getWelcomeCode */
export async function getWelcomeCodeUsingPUT(
  body: API.WeChatWelcomeCodeDto,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/wechat/wechatwelcomes/getWelcomeCode', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询智能欢迎语详情 POST /wechat/wechatwelcomes/getWelcomeCode */
export async function getWelcomeCodeUsingPOST(
  body: API.WeChatWelcomeCodeDto,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/wechat/wechatwelcomes/getWelcomeCode', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询智能欢迎语详情 DELETE /wechat/wechatwelcomes/getWelcomeCode */
export async function getWelcomeCodeUsingDELETE(
  body: API.WeChatWelcomeCodeDto,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/wechat/wechatwelcomes/getWelcomeCode', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询智能欢迎语详情 PATCH /wechat/wechatwelcomes/getWelcomeCode */
export async function getWelcomeCodeUsingPATCH(
  body: API.WeChatWelcomeCodeDto,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/wechat/wechatwelcomes/getWelcomeCode', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 新增智能欢迎语 GET /wechat/wechatwelcomes/saveWelcomeCode */
export async function saveWelcomeCodeUsingGET(
  body: API.WeChatWelcomeCodeDto,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/wechat/wechatwelcomes/saveWelcomeCode', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 新增智能欢迎语 PUT /wechat/wechatwelcomes/saveWelcomeCode */
export async function saveWelcomeCodeUsingPUT(
  body: API.WeChatWelcomeCodeDto,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/wechat/wechatwelcomes/saveWelcomeCode', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 新增智能欢迎语 POST /wechat/wechatwelcomes/saveWelcomeCode */
export async function saveWelcomeCodeUsingPOST(
  body: API.WeChatWelcomeCodeDto,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/wechat/wechatwelcomes/saveWelcomeCode', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 新增智能欢迎语 DELETE /wechat/wechatwelcomes/saveWelcomeCode */
export async function saveWelcomeCodeUsingDELETE(
  body: API.WeChatWelcomeCodeDto,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/wechat/wechatwelcomes/saveWelcomeCode', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 新增智能欢迎语 PATCH /wechat/wechatwelcomes/saveWelcomeCode */
export async function saveWelcomeCodeUsingPATCH(
  body: API.WeChatWelcomeCodeDto,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/wechat/wechatwelcomes/saveWelcomeCode', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询智能欢迎语详情 GET /wechat/wechatwelcomes/setWelcomeCodeStatus */
export async function setWelcomeCodeStatusUsingGET(
  body: API.WeChatWelcomeCodeDto,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/wechat/wechatwelcomes/setWelcomeCodeStatus', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询智能欢迎语详情 PUT /wechat/wechatwelcomes/setWelcomeCodeStatus */
export async function setWelcomeCodeStatusUsingPUT(
  body: API.WeChatWelcomeCodeDto,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/wechat/wechatwelcomes/setWelcomeCodeStatus', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询智能欢迎语详情 POST /wechat/wechatwelcomes/setWelcomeCodeStatus */
export async function setWelcomeCodeStatusUsingPOST1(
  body: API.WeChatWelcomeCodeDto,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/wechat/wechatwelcomes/setWelcomeCodeStatus', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询智能欢迎语详情 DELETE /wechat/wechatwelcomes/setWelcomeCodeStatus */
export async function setWelcomeCodeStatusUsingDELETE(
  body: API.WeChatWelcomeCodeDto,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/wechat/wechatwelcomes/setWelcomeCodeStatus', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询智能欢迎语详情 PATCH /wechat/wechatwelcomes/setWelcomeCodeStatus */
export async function setWelcomeCodeStatusUsingPATCH(
  body: API.WeChatWelcomeCodeDto,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/wechat/wechatwelcomes/setWelcomeCodeStatus', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
