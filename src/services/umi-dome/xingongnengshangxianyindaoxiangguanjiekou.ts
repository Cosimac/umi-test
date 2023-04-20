// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取该用户是否关闭迭代功能弹窗 GET /guide/iteration/getCloseWindowLog */
export async function getCloseWindowLogUsingGET(options?: { [key: string]: any }) {
  return request<API.BeanCommonResultboolean>('/guide/iteration/getCloseWindowLog', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取最近一次的迭代更新公告信息 GET /guide/iteration/getLatestUpdateLog */
export async function getLatestUpdateLogUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getLatestUpdateLogUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultListgongnenggengxindiedairizhibiaoxiangqing>(
    '/guide/iteration/getLatestUpdateLog',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 保存用户关闭迭代功能弹窗日志 GET /guide/iteration/saveCloseWindowLog */
export async function saveCloseWindowLogUsingGET(options?: { [key: string]: any }) {
  return request<API.BeanCommonResultboolean>('/guide/iteration/saveCloseWindowLog', {
    method: 'GET',
    ...(options || {}),
  });
}
