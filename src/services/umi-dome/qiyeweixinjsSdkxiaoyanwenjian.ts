// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取校验文件相关配置 GET /wework/verifyFile/config */
export async function configUsingGET(options?: { [key: string]: any }) {
  return request<API.BeanCommonResultConfigVO>('/wework/verifyFile/config', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 上传校验文件 POST /wework/verifyFile/upload */
export async function uploadUsingPOST(body: string, options?: { [key: string]: any }) {
  return request<API.BeanCommonResultxinzengqiweixiaoyanwenjianDTO>('/wework/verifyFile/upload', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 企微校验 GET /WW_${param0}.txt */
export async function fileUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.fileUsingGETParams,
  options?: { [key: string]: any },
) {
  const { key: param0, ...queryParams } = params;
  return request<string>(`/WW_${param0}.txt`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}
