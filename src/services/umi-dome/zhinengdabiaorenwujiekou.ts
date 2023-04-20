// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 创建任务 POST /intelligent/task/create */
export async function createUsingPOST2(
  body: API.chuangjianrenwushiti,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResult>('/intelligent/task/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除任务 POST /intelligent/task/deleteTask */
export async function deleteTaskUsingPOST(body: number, options?: { [key: string]: any }) {
  return request<API.BeanCommonResult>('/intelligent/task/deleteTask', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取任务详细信息 GET /intelligent/task/getDetail */
export async function getDetailUsingGET1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getDetailUsingGET1Params,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultrenwuxiangqingshiti>('/intelligent/task/getDetail', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 智能打标获取平台店铺列表 GET /intelligent/task/getPlatBindShopList */
export async function getPlatBindShopListUsingGET(options?: { [key: string]: any }) {
  return request<API.BeanCommonResultListShopListResponse>(
    '/intelligent/task/getPlatBindShopList',
    {
      method: 'GET',
      ...(options || {}),
    },
  );
}

/** 修改/新增任务获取场景树 GET /intelligent/task/sceneList */
export async function sceneListUsingGET1(options?: { [key: string]: any }) {
  return request<API.BeanCommonResultListMarkSceneTreeNode>('/intelligent/task/sceneList', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 根据标签组id查询标签组下标签相关信息 POST /intelligent/task/tagGroupDetail */
export async function tagGroupDetailUsingPOST(body: string, options?: { [key: string]: any }) {
  return request<API.BeanCommonResultListSgWeworkTagDao>('/intelligent/task/tagGroupDetail', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询企业标签列表 POST /intelligent/task/tagList */
export async function tagListUsingPOST(body: number, options?: { [key: string]: any }) {
  return request<API.BeanCommonResultListSgWeworkTagDao>('/intelligent/task/tagList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新任务 POST /intelligent/task/update */
export async function updateUsingPOST2(
  body: API.gengxinrenwushiti,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResult>('/intelligent/task/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 开启或关闭任务状态 POST /intelligent/task/updateStatus */
export async function updateStatusUsingPOST1(body: number, options?: { [key: string]: any }) {
  return request<API.BeanCommonResult>('/intelligent/task/updateStatus', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
