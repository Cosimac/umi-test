// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 查看某一条数据上下文 POST /weWorkchatData/context */
export async function getContextUsingPOST(
  body: API.WeWorkChatDataQuery,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/weWorkchatData/context', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 拉取企业最新聊天数据 POST /weWorkchatData/getWeWorkChatDataToDb */
export async function getWeWorkChatDataUsingPOST(
  body: API.WeWorkChatDataQuery,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/weWorkchatData/getWeWorkChatDataToDb', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 同步默认企业最新聊天数据 GET /weWorkchatData/syncWeWorkChatDataToDb */
export async function syncWeWorkChatDataToDbUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.syncWeWorkChatDataToDbUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.WeworkMsg[]>('/weWorkchatData/syncWeWorkChatDataToDb', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
