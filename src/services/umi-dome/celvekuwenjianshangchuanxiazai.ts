// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 下载默认模版 POST /strategy/file/download */
export async function downloadStrategyDefaultFileUsingPOST(options?: { [key: string]: any }) {
  return request<API.BeanCommonResult>('/strategy/file/download', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 确定上传 POST /strategy/file/saveStrategyFile */
export async function saveStrategyFileUsingPOST(body: string, options?: { [key: string]: any }) {
  return request<API.BeanCommonResult>('/strategy/file/saveStrategyFile', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取当前用户上传策略文案 POST /strategy/file/uploadNum */
export async function uploadNumUsingPOST(options?: { [key: string]: any }) {
  return request<API.BeanCommonResultstring>('/strategy/file/uploadNum', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 上传策略模版 POST /strategy/file/uploadStrategyFile */
export async function uploadStrategyFileUsingPOST(body: string, options?: { [key: string]: any }) {
  return request<API.BeanCommonResult>('/strategy/file/uploadStrategyFile', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
