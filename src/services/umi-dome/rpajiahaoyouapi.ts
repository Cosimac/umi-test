// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** rpa加好友活动创建 POST /rpa/friend/create */
export async function createUsingPOST6(
  body: API.chuangjianrpapiliangjiahaoyouhuodongshiti,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultobject>('/rpa/friend/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** rpa加好友活动详情 GET /rpa/friend/get */
export async function getUsingGET1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getUsingGET1Params,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultrpapiliangjiahaoyouhuodongbiaoxiangqing>('/rpa/friend/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** rpa加好友账号效果详情列表 POST /rpa/friend/getActivityDetailPage */
export async function getActivityDetailPageUsingPOST(
  body: API.BeanTableRequestchaxunshijitianjiadehaoyoumingxibiaoxiangqingdechaxunshiti,
  options?: { [key: string]: any },
) {
  return request<API.TableResponserpapiliangjiahaoyouhuodongshijitianjiadehaoyoumingxibiaoxiangqing>(
    '/rpa/friend/getActivityDetailPage',
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

/** rpa加好友账号效果列表 POST /rpa/friend/getActivityEffectPage */
export async function getActivityEffectPageUsingPOST(
  body: API.BeanTableRequestlong,
  options?: { [key: string]: any },
) {
  return request<API.TableResponserpapiliangjiahaoyouhuodongbiaozhixingxiaoguo>(
    '/rpa/friend/getActivityEffectPage',
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

/** rpa加好友列表查询 POST /rpa/friend/getActivityPage */
export async function getActivityPageUsingPOST(
  body: API.BeanTableRequestsousuorpapiliangjiahaoyouhuodongbiao,
  options?: { [key: string]: any },
) {
  return request<API.TableResponserpapiliangjiahaoyouhuodongbiaoxiangqing>(
    '/rpa/friend/getActivityPage',
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

/** rpa加好友任务设置获取 GET /rpa/friend/getActivitySetting */
export async function getActivitySettingUsingGET(options?: { [key: string]: any }) {
  return request<API.BeanCommonResultrpajiahaoyouhuodongrenwushezhigongsiqiweiweiduxiangqing>(
    '/rpa/friend/getActivitySetting',
    {
      method: 'GET',
      ...(options || {}),
    },
  );
}

/** rpa加好友任务设置更新 POST /rpa/friend/saveActivitySetting */
export async function saveActivitySettingUsingPOST(
  body: API.gengxinrpajiahaoyouhuodongrenwushezhigongsiqiweiweidu,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultobject>('/rpa/friend/saveActivitySetting', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** rpa加好友活动更新 POST /rpa/friend/update */
export async function updateUsingPOST6(
  body: API.gengxinrpapiliangjiahaoyouhuodongbiao,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultobject>('/rpa/friend/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 上传excel POST /rpa/friend/uploadPhoneNumberExcel */
export async function uploadExcelUsingPOST1(body: string, options?: { [key: string]: any }) {
  return request<API.BeanCommonResultUploadRpaAddFriendExcelVo>(
    '/rpa/friend/uploadPhoneNumberExcel',
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
