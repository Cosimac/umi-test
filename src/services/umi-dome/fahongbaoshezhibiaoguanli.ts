// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 发红包（列表） POST /redpack/send/setting/list */
export async function listUsingPOST16(
  body: API.SearchRequestVOxinzengfahongbaoshezhi,
  options?: { [key: string]: any },
) {
  return request<API.TableResponse>('/redpack/send/setting/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 新增发红包设置表 POST /redpack/send/setting/saveOrUpdate */
export async function saveOrUpdateUsingPOST5(
  body: API.xinzengfahongbaoshezhi,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/redpack/send/setting/saveOrUpdate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 店铺或员工列表 POST /redpack/send/setting/shopOrGuideList */
export async function shopOrGuideListUsingPOST(
  body: API.SearchRequestVOdianpuhuoyuangongliebiaoVO,
  options?: { [key: string]: any },
) {
  return request<API.TableResponse>('/redpack/send/setting/shopOrGuideList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 修改发红包启用状态 POST /redpack/send/setting/updateState */
export async function updateStateUsingPOST1(
  body: API.xiugaifahongbaoqiyongzhuangtai,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/redpack/send/setting/updateState', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
