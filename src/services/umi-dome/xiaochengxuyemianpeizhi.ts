// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 查询小程序业绩启用情况 GET /setting/miniprogrampagesetting/findMiniGuideBusinessSettingList */
export async function findMiniGuideBusinessSettingListUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.findMiniGuideBusinessSettingListUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultListqiyongyejileixingshiti>(
    '/setting/miniprogrampagesetting/findMiniGuideBusinessSettingList',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 获取小程序页面模块 GET /setting/miniprogrampagesetting/findMiniProgramPageModuleList */
export async function findMiniProgramPageModuleListUsingGET(options?: { [key: string]: any }) {
  return request<API.BeanCommonResultListxiaochengxuyemianmokuaishiti>(
    '/setting/miniprogrampagesetting/findMiniProgramPageModuleList',
    {
      method: 'GET',
      ...(options || {}),
    },
  );
}

/** 查询小程序页面模块配置 GET /setting/miniprogrampagesetting/findMiniProgramPageModuleSettingList */
export async function findMiniProgramPageModuleSettingListUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.findMiniProgramPageModuleSettingListUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultListxiaochengxuyemianmokuaipeizhishiti>(
    '/setting/miniprogrampagesetting/findMiniProgramPageModuleSettingList',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 查询小程序业绩启用情况 GET /setting/miniprogrampagesetting/findMiniProgramPageRewardSettingList */
export async function findMiniProgramPageRewardSettingListUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.findMiniProgramPageRewardSettingListUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultListqiyongyejileixingshiti>(
    '/setting/miniprogrampagesetting/findMiniProgramPageRewardSettingList',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 保存/修改小程序页面配置 POST /setting/miniprogrampagesetting/saveOrUpdateMiniProgramPageSetting */
export async function saveOrUpdateMiniProgramPageSettingUsingPOST(
  body: API.xiaochengxuyemianpeizhixiugaiqingqiushiti,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>(
    '/setting/miniprogrampagesetting/saveOrUpdateMiniProgramPageSetting',
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
