// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取微信付款账号详情 GET /wxpay/method/${param0} */
export async function showUsingGET1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.showUsingGET1Params,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.BeanCommonResultweixinfukuanzhanghaoDTO>(`/wxpay/method/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 新增微信付款账号 POST /wxpay/method/create */
export async function createUsingPOST3(
  body: API.xinzengweixinfukuanzhanghaoVO,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultIdDTO>('/wxpay/method/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 新增微信付款账号(V3新版本) POST /wxpay/method/createV3 */
export async function createV3UsingPOST(
  body: API.xinzengweixinfukuanzhanghaoVO,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultIdDTO>('/wxpay/method/createV3', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除微信付款账号 POST /wxpay/method/deleteById/${param0} */
export async function deleteUsingPOST5(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteUsingPOST5Params,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.CommonResult>(`/wxpay/method/deleteById/${param0}`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 获取微信付款账号列表 POST /wxpay/method/list */
export async function listUsingPOST9(
  body: API.BeanTableRequestsousuoweixinfukuanzhanghao,
  options?: { [key: string]: any },
) {
  return request<API.TableResponsezhifupeizhifanhuishiti>('/wxpay/method/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取微信付款账号列表 POST /wxpay/method/listV2 */
export async function listV2UsingPOST(
  body: API.BeanTableRequestsousuoweixinfukuanzhanghao,
  options?: { [key: string]: any },
) {
  return request<API.TableResponsezhifupeizhifanhuishiti>('/wxpay/method/listV2', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取微信付款账号列表 POST /wxpay/method/listV3 */
export async function listV3UsingPOST(
  body: API.BeanTableRequestsousuoweixinfukuanzhanghao,
  options?: { [key: string]: any },
) {
  return request<API.TableResponsezhifupeizhifanhuishiti>('/wxpay/method/listV3', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新微信付款账号 POST /wxpay/method/updateById/${param0} */
export async function updateUsingPOST3(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateUsingPOST3Params,
  body: API.bianjiweixinfukuanzhanghaoVO,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.CommonResult>(`/wxpay/method/updateById/${param0}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 上传微信支付证书 .p12 | .pem文件 POST /wxpay/method/uploadCert */
export async function uploadCertUsingPOST(body: string, options?: { [key: string]: any }) {
  return request<API.BeanCommonResultzhengshulujing>('/wxpay/method/uploadCert', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
