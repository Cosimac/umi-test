// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 删除群欢迎语 删除群欢迎语 POST /wework/groupWelcome/deleteByUUID */
export async function deleteByUUIDUsingPOST(body: string, options?: { [key: string]: any }) {
  return request<API.CommonResult>('/wework/groupWelcome/deleteByUUID', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 群欢迎语列表查询 群欢迎语列表查询 POST /wework/groupWelcome/findList */
export async function queryGroupWelcomeTableUsingPOST(
  body: API.BeanTableRequestqunhuanyingyubiaochaxunqingqiushiti,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultBeanTableResponsequnhuanyingyushitiduixiang>(
    '/wework/groupWelcome/findList',
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

/** 获取群欢迎语详情 获取群欢迎语详情 GET /wework/groupWelcome/getByUUID */
export async function getByUUIDUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getByUUIDUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultqunhuanyingyushitiduixiang>('/wework/groupWelcome/getByUUID', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 新建编辑群欢迎语 新建编辑群欢迎语 POST /wework/groupWelcome/saveOrUpdate */
export async function saveOrUpdateUsingPOST7(
  body: API.qunhuanyingyushitiduixiang,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/wework/groupWelcome/saveOrUpdate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
