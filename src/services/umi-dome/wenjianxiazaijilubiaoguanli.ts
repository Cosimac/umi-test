// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取文件下载记录表列表 POST /file/download/record/list */
export async function listUsingPOST4(body: API.TableRequest, options?: { [key: string]: any }) {
  return request<API.TableResponseRecord>('/file/download/record/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
