// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 公告阅读确认 GET /announcement/confirmAnnouncement */
export async function confirmAnnouncementUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.confirmAnnouncementUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/announcement/confirmAnnouncement', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 查询公告详情 GET /announcement/findAnnouncementById */
export async function findAnnouncementByIdUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.findAnnouncementByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/announcement/findAnnouncementById', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 查询公告列表 POST /announcement/findAnnouncementList */
export async function findAnnouncementListUsingPOST(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseRecord>('/announcement/findAnnouncementList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询最新的未读公告 GET /announcement/findLatestAnnouncement */
export async function findLatestAnnouncementUsingGET(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/announcement/findLatestAnnouncement', {
    method: 'GET',
    ...(options || {}),
  });
}
