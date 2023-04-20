// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** deletePersonalQrcode GET /Guide/PersonalQrcode/deletePersonalQrcode */
export async function deletePersonalQrcodeUsingGET(
  body: Record<string, any>[],
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/Guide/PersonalQrcode/deletePersonalQrcode', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** deletePersonalQrcode PUT /Guide/PersonalQrcode/deletePersonalQrcode */
export async function deletePersonalQrcodeUsingPUT(
  body: Record<string, any>[],
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/Guide/PersonalQrcode/deletePersonalQrcode', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** deletePersonalQrcode POST /Guide/PersonalQrcode/deletePersonalQrcode */
export async function deletePersonalQrcodeUsingPOST(
  body: Record<string, any>[],
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/Guide/PersonalQrcode/deletePersonalQrcode', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** deletePersonalQrcode DELETE /Guide/PersonalQrcode/deletePersonalQrcode */
export async function deletePersonalQrcodeUsingDELETE(
  body: Record<string, any>[],
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/Guide/PersonalQrcode/deletePersonalQrcode', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** deletePersonalQrcode PATCH /Guide/PersonalQrcode/deletePersonalQrcode */
export async function deletePersonalQrcodeUsingPATCH(
  body: Record<string, any>[],
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/Guide/PersonalQrcode/deletePersonalQrcode', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 聚合二维码: 导出统计EXCELE 获取统计列表EXCELE POST /Guide/PersonalQrcode/exportEffectByExcel */
export async function exportEffectByExcelUsingPOST(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<any>('/Guide/PersonalQrcode/exportEffectByExcel', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findById GET /Guide/PersonalQrcode/findById */
export async function findByIdUsingGET1(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/Guide/PersonalQrcode/findById', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findById PUT /Guide/PersonalQrcode/findById */
export async function findByIdUsingPUT(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/Guide/PersonalQrcode/findById', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findById POST /Guide/PersonalQrcode/findById */
export async function findByIdUsingPOST(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/Guide/PersonalQrcode/findById', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findById DELETE /Guide/PersonalQrcode/findById */
export async function findByIdUsingDELETE(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/Guide/PersonalQrcode/findById', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findById PATCH /Guide/PersonalQrcode/findById */
export async function findByIdUsingPATCH(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/Guide/PersonalQrcode/findById', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findList GET /Guide/PersonalQrcode/findList */
export async function findListUsingGET6(body: API.TableRequest, options?: { [key: string]: any }) {
  return request<API.TableResponseRecord>('/Guide/PersonalQrcode/findList', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findList PUT /Guide/PersonalQrcode/findList */
export async function findListUsingPUT6(body: API.TableRequest, options?: { [key: string]: any }) {
  return request<API.TableResponseRecord>('/Guide/PersonalQrcode/findList', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findList POST /Guide/PersonalQrcode/findList */
export async function findListUsingPOST10(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseRecord>('/Guide/PersonalQrcode/findList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findList DELETE /Guide/PersonalQrcode/findList */
export async function findListUsingDELETE6(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseRecord>('/Guide/PersonalQrcode/findList', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findList PATCH /Guide/PersonalQrcode/findList */
export async function findListUsingPATCH6(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseRecord>('/Guide/PersonalQrcode/findList', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getDepartment GET /Guide/PersonalQrcode/getDepartment */
export async function getDepartmentUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getDepartmentUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/Guide/PersonalQrcode/getDepartment', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getDepartment PUT /Guide/PersonalQrcode/getDepartment */
export async function getDepartmentUsingPUT(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getDepartmentUsingPUTParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/Guide/PersonalQrcode/getDepartment', {
    method: 'PUT',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getDepartment POST /Guide/PersonalQrcode/getDepartment */
export async function getDepartmentUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getDepartmentUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/Guide/PersonalQrcode/getDepartment', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getDepartment DELETE /Guide/PersonalQrcode/getDepartment */
export async function getDepartmentUsingDELETE(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getDepartmentUsingDELETEParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/Guide/PersonalQrcode/getDepartment', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getDepartment PATCH /Guide/PersonalQrcode/getDepartment */
export async function getDepartmentUsingPATCH(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getDepartmentUsingPATCHParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/Guide/PersonalQrcode/getDepartment', {
    method: 'PATCH',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getGuideMsg GET /Guide/PersonalQrcode/getGuideMsg */
export async function getGuideMsgUsingGET(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/Guide/PersonalQrcode/getGuideMsg', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getGuideMsg PUT /Guide/PersonalQrcode/getGuideMsg */
export async function getGuideMsgUsingPUT(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/Guide/PersonalQrcode/getGuideMsg', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getGuideMsg POST /Guide/PersonalQrcode/getGuideMsg */
export async function getGuideMsgUsingPOST(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/Guide/PersonalQrcode/getGuideMsg', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getGuideMsg DELETE /Guide/PersonalQrcode/getGuideMsg */
export async function getGuideMsgUsingDELETE(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/Guide/PersonalQrcode/getGuideMsg', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getGuideMsg PATCH /Guide/PersonalQrcode/getGuideMsg */
export async function getGuideMsgUsingPATCH(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/Guide/PersonalQrcode/getGuideMsg', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取聚合二维码效果分析列表 POST /Guide/PersonalQrcode/getQrCodeEffectList */
export async function getQrCodeEffectListUsingPOST(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponsePersonalQrcodeEffectDto>(
    '/Guide/PersonalQrcode/getQrCodeEffectList',
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

/** 获取聚合二维码添加好友明细列表 POST /Guide/PersonalQrcode/getQrCodeInviteFriendDetailList */
export async function getQrCodeInviteFriendDetailListUsingPOST(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponsePersonalQrcodeInviterFriendDto>(
    '/Guide/PersonalQrcode/getQrCodeInviteFriendDetailList',
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

/** 聚合二维码:查询统计列表总数 聚合二维码:查询统计列表总数 POST /Guide/PersonalQrcode/getQrcodeStatisticsCount */
export async function getQrcodeStatisticsCountUsingPOST(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResult>('/Guide/PersonalQrcode/getQrcodeStatisticsCount', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** queryCreatorList GET /Guide/PersonalQrcode/queryCreatorList */
export async function queryCreatorListUsingGET(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/Guide/PersonalQrcode/queryCreatorList', {
    method: 'GET',
    ...(options || {}),
  });
}

/** queryCreatorList PUT /Guide/PersonalQrcode/queryCreatorList */
export async function queryCreatorListUsingPUT(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/Guide/PersonalQrcode/queryCreatorList', {
    method: 'PUT',
    ...(options || {}),
  });
}

/** queryCreatorList POST /Guide/PersonalQrcode/queryCreatorList */
export async function queryCreatorListUsingPOST(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/Guide/PersonalQrcode/queryCreatorList', {
    method: 'POST',
    ...(options || {}),
  });
}

/** queryCreatorList DELETE /Guide/PersonalQrcode/queryCreatorList */
export async function queryCreatorListUsingDELETE(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/Guide/PersonalQrcode/queryCreatorList', {
    method: 'DELETE',
    ...(options || {}),
  });
}

/** queryCreatorList PATCH /Guide/PersonalQrcode/queryCreatorList */
export async function queryCreatorListUsingPATCH(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/Guide/PersonalQrcode/queryCreatorList', {
    method: 'PATCH',
    ...(options || {}),
  });
}

/** queryGuideMsg GET /Guide/PersonalQrcode/queryGuideMsg */
export async function queryGuideMsgUsingGET(
  body: API.daogouyuangongliebiaovo,
  options?: { [key: string]: any },
) {
  return request<API.TableResponse>('/Guide/PersonalQrcode/queryGuideMsg', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** queryGuideMsg PUT /Guide/PersonalQrcode/queryGuideMsg */
export async function queryGuideMsgUsingPUT(
  body: API.daogouyuangongliebiaovo,
  options?: { [key: string]: any },
) {
  return request<API.TableResponse>('/Guide/PersonalQrcode/queryGuideMsg', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** queryGuideMsg POST /Guide/PersonalQrcode/queryGuideMsg */
export async function queryGuideMsgUsingPOST(
  body: API.daogouyuangongliebiaovo,
  options?: { [key: string]: any },
) {
  return request<API.TableResponse>('/Guide/PersonalQrcode/queryGuideMsg', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** queryGuideMsg DELETE /Guide/PersonalQrcode/queryGuideMsg */
export async function queryGuideMsgUsingDELETE(
  body: API.daogouyuangongliebiaovo,
  options?: { [key: string]: any },
) {
  return request<API.TableResponse>('/Guide/PersonalQrcode/queryGuideMsg', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** queryGuideMsg PATCH /Guide/PersonalQrcode/queryGuideMsg */
export async function queryGuideMsgUsingPATCH(
  body: API.daogouyuangongliebiaovo,
  options?: { [key: string]: any },
) {
  return request<API.TableResponse>('/Guide/PersonalQrcode/queryGuideMsg', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** save GET /Guide/PersonalQrcode/save */
export async function saveUsingGET(body: Record<string, any>, options?: { [key: string]: any }) {
  return request<API.CommonResult>('/Guide/PersonalQrcode/save', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** save PUT /Guide/PersonalQrcode/save */
export async function saveUsingPUT(body: Record<string, any>, options?: { [key: string]: any }) {
  return request<API.CommonResult>('/Guide/PersonalQrcode/save', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** save POST /Guide/PersonalQrcode/save */
export async function saveUsingPOST2(body: Record<string, any>, options?: { [key: string]: any }) {
  return request<API.CommonResult>('/Guide/PersonalQrcode/save', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** save DELETE /Guide/PersonalQrcode/save */
export async function saveUsingDELETE(body: Record<string, any>, options?: { [key: string]: any }) {
  return request<API.CommonResult>('/Guide/PersonalQrcode/save', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** save PATCH /Guide/PersonalQrcode/save */
export async function saveUsingPATCH(body: Record<string, any>, options?: { [key: string]: any }) {
  return request<API.CommonResult>('/Guide/PersonalQrcode/save', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** saveShow GET /Guide/PersonalQrcode/saveShow */
export async function saveShowUsingGET(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/Guide/PersonalQrcode/saveShow', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** saveShow PUT /Guide/PersonalQrcode/saveShow */
export async function saveShowUsingPUT(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/Guide/PersonalQrcode/saveShow', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** saveShow POST /Guide/PersonalQrcode/saveShow */
export async function saveShowUsingPOST(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/Guide/PersonalQrcode/saveShow', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** saveShow DELETE /Guide/PersonalQrcode/saveShow */
export async function saveShowUsingDELETE(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/Guide/PersonalQrcode/saveShow', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** saveShow PATCH /Guide/PersonalQrcode/saveShow */
export async function saveShowUsingPATCH(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/Guide/PersonalQrcode/saveShow', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 聚合二维码 上传头像(水印图片) POST /Guide/PersonalQrcode/uplaodWatermarkImage */
export async function uplaodWatermarkImageUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.uplaodWatermarkImageUsingPOSTParams,
  body: string,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/Guide/PersonalQrcode/uplaodWatermarkImage', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: {
      ...params,
    },
    data: body,
    ...(options || {}),
  });
}
