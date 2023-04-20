// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取单条朋友圈点赞详情信息 POST /guide/merged/momentList/getLikeOrComment */
export async function getMomentLikeOrCommentInfoUsingPOST(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/merged/momentList/getLikeOrComment', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取朋友圈列表 POST /guide/merged/momentList/getList */
export async function getListUsingPOST2(body: API.MomentListDTO, options?: { [key: string]: any }) {
  return request<API.BeanCommonResult>('/guide/merged/momentList/getList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取个人朋友圈详情信息 GET /guide/merged/momentList/getMomentInfo */
export async function getMomentInfoUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getMomentInfoUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/merged/momentList/getMomentInfo', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取企业朋友圈企业发表的列表 POST /guide/merged/momentList/getMomentTask */
export async function getMomentTaskUsingPOST(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/merged/momentList/getMomentTask', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取朋友圈发布可见用户 GET /guide/merged/momentList/getVisibleUser */
export async function getVisibleUserUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getVisibleUserUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/merged/momentList/getVisibleUser', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
