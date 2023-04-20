// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 根据id删除招募配置 删除招募配置 POST /recruitPageConfig/deleteRecruitConfig */
export async function deleteRecruitConfigUsingPOST(
  body: API.RecruitingPageConfigParam,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResult>('/recruitPageConfig/deleteRecruitConfig', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查找招募页面配置信息 查找招募页面配置信息 POST /recruitPageConfig/findRecruitingConfigList */
export async function findRecruitingConfigListUsingPOST(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseRecord>('/recruitPageConfig/findRecruitingConfigList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取招募页面配置信息 获取招募页面配置信息 POST /recruitPageConfig/getInfo */
export async function getInfoUsingPOST(
  body: API.RecruitingPageConfigParam,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultRecruitingPageConfigDTO>('/recruitPageConfig/getInfo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 公司下的所有体系 公司下的所有体系 GET /recruitPageConfig/getSystemVipIdList */
export async function getSystemVipIdListUsingGET(options?: { [key: string]: any }) {
  return request<API.BeanCommonResultListRecruitingVipDTO>(
    '/recruitPageConfig/getSystemVipIdList',
    {
      method: 'GET',
      ...(options || {}),
    },
  );
}

/** 更改关注公众号状态 会员招募>跳转关注公众号>是否关注公众号：状态 0不关注 1关注 POST /recruitPageConfig/mpFollowStateChange */
export async function mpFollowStateChangeUsingPOST(
  body: API.daogouzhaomuliuchengpeizhiDTO,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultRecruitingPageConfigDTO>(
    '/recruitPageConfig/mpFollowStateChange',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}

/** queryCreatorList GET /recruitPageConfig/queryRecruitCreatorList */
export async function queryCreatorListUsingGET1(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/recruitPageConfig/queryRecruitCreatorList', {
    method: 'GET',
    ...(options || {}),
  });
}

/** queryCreatorList PUT /recruitPageConfig/queryRecruitCreatorList */
export async function queryCreatorListUsingPUT1(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/recruitPageConfig/queryRecruitCreatorList', {
    method: 'PUT',
    ...(options || {}),
  });
}

/** queryCreatorList POST /recruitPageConfig/queryRecruitCreatorList */
export async function queryCreatorListUsingPOST1(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/recruitPageConfig/queryRecruitCreatorList', {
    method: 'POST',
    ...(options || {}),
  });
}

/** queryCreatorList DELETE /recruitPageConfig/queryRecruitCreatorList */
export async function queryCreatorListUsingDELETE1(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/recruitPageConfig/queryRecruitCreatorList', {
    method: 'DELETE',
    ...(options || {}),
  });
}

/** queryCreatorList PATCH /recruitPageConfig/queryRecruitCreatorList */
export async function queryCreatorListUsingPATCH1(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/recruitPageConfig/queryRecruitCreatorList', {
    method: 'PATCH',
    ...(options || {}),
  });
}

/** 修改或者保存招募页面配置信息 修改或者保存招募页面配置信息 POST /recruitPageConfig/updateSet */
export async function updateSetUsingPOST(
  body: API.RecruitingPageConfigQuery,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResult>('/recruitPageConfig/updateSet', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 招募配置状态修改 招募配置状态修改 POST /recruitPageConfig/updateStatusSet */
export async function updateStatusSetUsingPOST(
  body: API.RecruitingPageConfigParam,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResult>('/recruitPageConfig/updateStatusSet', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
