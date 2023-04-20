// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 添加或更新提醒 POST /notice/message/createOrUpdate */
export async function createOrUpdateUsingPOST(
  body: API.xinzengyuangongribaotixingshezhibiaoVO[],
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultobject>('/notice/message/createOrUpdate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取员工日报提醒设置表列表 POST /notice/message/list */
export async function listUsingPOST8(
  body: API.SearchRequestVOsousuoyuangongribaotixingshezhibiao,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseRecord>('/notice/message/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
