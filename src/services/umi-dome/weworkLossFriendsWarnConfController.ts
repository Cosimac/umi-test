// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 查询默认好友流失，群成员流失提醒配置表 GET /wework/lossFriendsWarnConf/findDefaultTask */
export async function findDefaultTaskUsingGET(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/wework/lossFriendsWarnConf/findDefaultTask', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 新增设置表好友流失、群成员流失配置表 POST /wework/lossFriendsWarnConf/saveOrUpdateTask */
export async function saveOrUpdateTaskUsingPOST1(
  body: API.WeworkLossFriendsWarnConfVo,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/wework/lossFriendsWarnConf/saveOrUpdateTask', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
