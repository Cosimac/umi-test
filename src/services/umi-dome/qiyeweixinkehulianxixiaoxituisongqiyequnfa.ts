// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 终止发送中的群发消息 好友营销和群营销的详情接口是一样的 POST /wework/groupMessage/abort */
export async function abortUsingPOST(body: API.MessageIdDTO, options?: { [key: string]: any }) {
  return request<API.BeanCommonResultobject>('/wework/groupMessage/abort', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 7.17.0-重新提交 POST /wework/groupMessage/againCommitProcess */
export async function againCommitProcessUsingPOST(
  body: API.MessageIdDTO,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultobject>('/wework/groupMessage/againCommitProcess', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 7.17.0-群发消息提交审核 好友营销和群营销的详情接口是一样的 POST /wework/groupMessage/commit */
export async function commitUsingPOST(body: API.MessageIdDTO, options?: { [key: string]: any }) {
  return request<API.BeanCommonResultobject>('/wework/groupMessage/commit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 7.17.0-创建群发消息 好友营销和群营销的详情接口是一样的 POST /wework/groupMessage/create */
export async function createUsingPOST8(
  body: API.chuangjianqunfaxiaoxi,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultlong>('/wework/groupMessage/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除群发消息 好友营销和群营销的详情接口是一样的 POST /wework/groupMessage/delete */
export async function deleteUsingPOST9(body: API.MessageIdDTO, options?: { [key: string]: any }) {
  return request<API.BeanCommonResultobject>('/wework/groupMessage/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 7.17.0-好友营销消息列表 POST /wework/groupMessage/friend */
export async function friendUsingPOST(
  body: API.BeanTableRequestMessageQuery,
  options?: { [key: string]: any },
) {
  return request<API.TableResponsequnfaxiaoxixiangqing>('/wework/groupMessage/friend', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取好友营销创建人列表 POST /wework/groupMessage/friendCreators */
export async function friendCreatorsUsingPOST(options?: { [key: string]: any }) {
  return request<API.BeanCommonResultListyuangongxinxi>('/wework/groupMessage/friendCreators', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 群营销消息列表 POST /wework/groupMessage/group */
export async function groupUsingPOST(
  body: API.BeanTableRequestMessageQuery,
  options?: { [key: string]: any },
) {
  return request<API.TableResponsequnfaxiaoxixiangqing>('/wework/groupMessage/group', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取群营销创建人列表 POST /wework/groupMessage/groupCreators */
export async function groupCreatorsUsingPOST(options?: { [key: string]: any }) {
  return request<API.BeanCommonResultListyuangongxinxi>('/wework/groupMessage/groupCreators', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 7.17.0-获取审核历史列表 POST /wework/groupMessage/queryMessageProcessHisList */
export async function queryMessageProcessHisListUsingPOST(
  body: API.fenyesousuoshenhelishijilubiao,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultPageResultDTOshenhelishijilubiaoxiangqing>(
    '/wework/groupMessage/queryMessageProcessHisList',
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

/** v7.17.0-获取群发接收人列表 POST /wework/groupMessage/receiver */
export async function receiverUsingPOST(
  body: API.BeanTableRequestReceiverQuery,
  options?: { [key: string]: any },
) {
  return request<API.TableResponsequnfaxiaoxijieshourenxiangqing>('/wework/groupMessage/receiver', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 按天统计触达人数 POST /wework/groupMessage/receiver/getReceiverCountGroupByDay */
export async function getReceiverCountGroupByDayUsingPOST(options?: { [key: string]: any }) {
  return request<API.BeanCommonResultListSearchReceiverCountGroupByDayResultDTO>(
    '/wework/groupMessage/receiver/getReceiverCountGroupByDay',
    {
      method: 'POST',
      ...(options || {}),
    },
  );
}

/** 7.17.0-审核群发消息 好友营销和群营销的详情接口是一样的 POST /wework/groupMessage/review */
export async function reviewUsingPOST(
  body: API.ReviewMessageQuery,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultobject>('/wework/groupMessage/review', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 群发消息撤回提交 好友营销和群营销的详情接口是一样的 POST /wework/groupMessage/revoke */
export async function revokeUsingPOST(body: API.MessageIdDTO, options?: { [key: string]: any }) {
  return request<API.BeanCommonResultobject>('/wework/groupMessage/revoke', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 按天统计已发送的群发消息数量（发到企微就算，导购有没有点发送不管） POST /wework/groupMessage/sentMessageCountGroupByDay */
export async function sentMessageCountGroupByDayUsingPOST(options?: { [key: string]: any }) {
  return request<API.BeanCommonResultListSearchSentMessageCountGroupByDayResultDTO>(
    '/wework/groupMessage/sentMessageCountGroupByDay',
    {
      method: 'POST',
      ...(options || {}),
    },
  );
}

/** 7.17.0-消息详情 好友营销和群营销的详情接口是一样的 GET /wework/groupMessage/show */
export async function showUsingGET3(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.showUsingGET3Params,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultqunfaxiaoxixiangqing>('/wework/groupMessage/show', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 7.17.0-编辑群发消息 好友营销和群营销的详情接口是一样的 POST /wework/groupMessage/update */
export async function updateUsingPOST8(
  body: API.gengxinqunfaxiaoxi,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultobject>('/wework/groupMessage/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
