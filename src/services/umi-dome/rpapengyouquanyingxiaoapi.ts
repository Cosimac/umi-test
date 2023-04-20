// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** rpa朋友圈营销活动创建 POST /rpa/moment/create */
export async function createUsingPOST7(
  body: API.chuangjianrpapengyouquanyingxiaobiao,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultobject>('/rpa/moment/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** rpa朋友圈营销活动详情 GET /rpa/moment/get */
export async function getUsingGET2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getUsingGET2Params,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultrpapengyouquanyingxiaobiaoxiangqing>('/rpa/moment/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** rpa朋友圈营销列表查询 POST /rpa/moment/getActivityPage */
export async function getActivityPageUsingPOST1(
  body: API.BeanTableRequestsousuorpapengyouquanyingxiaobiao,
  options?: { [key: string]: any },
) {
  return request<API.TableResponserpapengyouquanyingxiaobiaoxiangqing>(
    '/rpa/moment/getActivityPage',
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

/** 获取小眼睛账号明细 GET /rpa/moment/getTaskAccountDetail */
export async function getTaskAccountDetailUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getTaskAccountDetailUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultListrpazhanghaoshiti>('/rpa/moment/getTaskAccountDetail', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取活动效果分析明细 POST /rpa/moment/getTaskAnalysisDetail */
export async function getTaskAnalysisDetailUsingPOST(
  body: API.BeanTableRequestsousuorpapengyouquanzhanghaomingxichaxunshiti,
  options?: { [key: string]: any },
) {
  return request<API.TableResponserpapengyouquanyingxiaoxiaoguofenxishiti>(
    '/rpa/moment/getTaskAnalysisDetail',
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

/** rpa朋友圈营销活动停止 GET /rpa/moment/stop */
export async function stopUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.stopUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultobject>('/rpa/moment/stop', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** rpa朋友圈营销活动更新 POST /rpa/moment/update */
export async function updateUsingPOST7(
  body: API.gengxinrpapengyouquanyingxiaobiao,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultobject>('/rpa/moment/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
