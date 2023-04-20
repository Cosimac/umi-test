// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 查询渠道活码列表 根据企业微信ID查询渠道活码列表 POST /open/kd/wxchannel/findChannelCodeList */
export async function findChannelCodeListUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.findChannelCodeListUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultWxCorpInfoVO>('/open/kd/wxchannel/findChannelCodeList', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 添加企业微信的企业信息 添加企业微信的企业信息接口 POST /open/kd/wxcorp/addWxCorp */
export async function addWxCorpUsingPOST(
  body: API.AddWxCorpRequest,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultboolean>('/open/kd/wxcorp/addWxCorp', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取企业微信及成员信息 获取企业微信及成员信息 POST /open/kd/wxcorp/findWxCorpList */
export async function findWxCorpListUsingPOST(
  body: API.WxCorpRequest,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultListqiweixinxi>('/open/kd/wxcorp/findWxCorpList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 添加企业微信的企业信息 添加企业微信的企业信息接口 POST /open/kd/wxcorp/saveOrUpdateCorpChatMsg */
export async function saveOrUpdateCorpChatMsgUsingPOST(
  body: API.SaveCorpChatMsgRequest,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultboolean>('/open/kd/wxcorp/saveOrUpdateCorpChatMsg', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新企业店铺绑定信息 更新企业店铺绑定信息 POST /open/kd/wxcorp/updateCorpShopRelation */
export async function updateCorpShopRelationUsingPOST(
  body: API.UpdateCorpShopRequest,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResult>('/open/kd/wxcorp/updateCorpShopRelation', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新企微状态 更新企微状态 POST /open/kd/wxcorp/updateCorpStatus */
export async function updateCorpStatusUsingPOST(
  body: API.UpdateCorpStatusRequest,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResult>('/open/kd/wxcorp/updateCorpStatus', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询绑定平台标识的好友数据信息 查询绑定平台标识的好友数据信息 POST /open/kd/wxcustomer/findPlatCustomerList */
export async function findPlatCustomerListUsingPOST(
  body: API.WxPlatCustomerRequest,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultListPlatCustomerVo>(
    '/open/kd/wxcustomer/findPlatCustomerList',
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

/** 查询绑定平台标识的好友数据客户总数 查询绑定平台标识的好友数据客户总数接口 POST /open/kd/wxcustomer/findPlatCustomerListCount */
export async function findPlatCustomerListCountUsingPOST(
  body: API.WxPlatCustomerCntRequest,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultWxCustomerCountDTO>(
    '/open/kd/wxcustomer/findPlatCustomerListCount',
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

/** 查询企微标签信息 查询企微标签信息 POST /open/kd/wxtag/findWxTagList */
export async function findWxTagListUsingPOST(
  body: API.WxTagListRequest,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultListCorpTagGroupVo>('/open/kd/wxtag/findWxTagList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询企微成员信息 查询企微成员信息接口 POST /open/kd/wxuser/findWxUser */
export async function findWxUserUsingPOST(
  body: API.WxUserRequest,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultqiweichengyuanxinxi>('/open/kd/wxuser/findWxUser', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/**  查询企微成员信息  查询企微成员信息 POST /open/kd/wxuser/findWxUserList */
export async function findWxUserListUsingPOST(
  body: API.WxUserListRequest,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultListWxUserVo>('/open/kd/wxuser/findWxUserList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
