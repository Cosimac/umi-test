// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取导购招募配置 导购管理后台用于获取导购招募配置 GET /secruitmentSet/getInfo */
export async function getInfoUsingGET(options?: { [key: string]: any }) {
  return request<API.BeanCommonResultSgSecruitmentSetDao>('/secruitmentSet/getInfo', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 更新导购招募配置 导购管理后台用于更新导购招募配置 POST /secruitmentSet/updateSet */
export async function updateSetUsingPOST1(
  body: API.SgSecruitmentSetDaoReq,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/secruitmentSet/updateSet', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
