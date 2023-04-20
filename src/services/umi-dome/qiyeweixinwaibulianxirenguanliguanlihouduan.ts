// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 企微用户绑定店铺（新增和更新） POST /wework/externalContact/externalBindShop */
export async function externalBindShopUsingPOST(
  body: API.houtaibangdinghaoyouxinxiqingqiushiti,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResult>('/wework/externalContact/externalBindShop', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 企微用户解绑店铺 POST /wework/externalContact/externalUnBindShop */
export async function externalUnBindShopUsingPOST(body: number, options?: { [key: string]: any }) {
  return request<API.BeanCommonResult>('/wework/externalContact/externalUnBindShop', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取企微用户绑定店铺的详细信息 POST /wework/externalContact/findExternalBindShop */
export async function findExternalBindShopUsingPOST(
  body: string,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultListhaoyouhedianpubangdingxinxi>(
    '/wework/externalContact/findExternalBindShop',
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

/** 查询用户详情中的企微导购数据 GET /wework/externalContact/findExternalUserRelationList */
export async function findExternalUserRelationListUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.findExternalUserRelationListUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultBeanTableResponsekehuxiangxixinxidaogoushuju>(
    '/wework/externalContact/findExternalUserRelationList',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 查询用户详情 GET /wework/externalContact/getCustomerDetail */
export async function getCustomerDetailUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getCustomerDetailUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultkehuxiangxixinxifanhuiduixiang>(
    '/wework/externalContact/getCustomerDetail',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 查询用户详情是否是会员 GET /wework/externalContact/isFriendActivate */
export async function isFriendActivateUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.isFriendActivateUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultint>('/wework/externalContact/isFriendActivate', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** queryCorpTagList POST /wework/externalContact/queryCorpTagList */
export async function queryCorpTagListUsingPOST(body: number, options?: { [key: string]: any }) {
  return request<API.CommonResult>('/wework/externalContact/queryCorpTagList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取好友列表去重好友的个数 POST /wework/externalContact/queryExternalContactDistinctCount */
export async function queryExternalContactCountUsingPOST(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/wework/externalContact/queryExternalContactDistinctCount', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** queryExternalContactTable POST /wework/externalContact/queryExternalContactTable */
export async function queryExternalContactTableUsingPOST1(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/wework/externalContact/queryExternalContactTable', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 重复群统计列表查询 POST /wework/externalContact/queryRepeatedInContactList */
export async function queryRepeatedInContactListUsingPOST(
  body: API.BeanTableRequestzhongfuquntongjiliebiaochaxunqingqiuduixiang,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultBeanTableResponsezhongfuquntongjiliebiaochaxunxiangyingduixiang>(
    '/wework/externalContact/queryRepeatedInContactList',
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

/** saveBatchMarking POST /wework/externalContact/saveBatchMarking */
export async function saveBatchMarkingUsingPOST(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/wework/externalContact/saveBatchMarking', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 同步企微好友信息 导购管理后台用于同步企微好友信息 POST /wework/externalContact/synWeWorkFriends */
export async function synWeWorkFriendsUsingPOST(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/wework/externalContact/synWeWorkFriends', {
    method: 'POST',
    ...(options || {}),
  });
}
