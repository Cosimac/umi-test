// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 增加话题关键词 POST /weWorkchatTopic/addKeyWord */
export async function addKeyWordUsingPOST(
  body: API.KeyWordRequest,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/weWorkchatTopic/addKeyWord', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 增加话题 POST /weWorkchatTopic/addKeyWordTopic */
export async function addUsingPOST2(
  body: API.KeyWordTopicRequest,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/weWorkchatTopic/addKeyWordTopic', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 话题关键字内容列表 POST /weWorkchatTopic/contentList */
export async function contentListUsingPOST1(
  body: API.SaveTalkPageQuery,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultBeanTableResponseChatDataListVo>(
    '/weWorkchatTopic/contentList',
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

/** 删除话题关键词 GET /weWorkchatTopic/deleteKeyWord */
export async function deleteKeyWordUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteKeyWordUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/weWorkchatTopic/deleteKeyWord', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 删除话题信息 GET /weWorkchatTopic/deleteKeyWordTopic */
export async function deleteKeyWordTopicUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteKeyWordTopicUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/weWorkchatTopic/deleteKeyWordTopic', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取话题信息 POST /weWorkchatTopic/getKeyWordTopicList */
export async function getKeyWordTopicListUsingPOST(
  body: API.KeyWordPageQuery,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultBeanTableResponseListKeyWordsTopicVo>(
    '/weWorkchatTopic/getKeyWordTopicList',
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

/** 查询关键词员工好友统计列表 POST /weWorkchatTopic/keyWordlist */
export async function keyWordlistUsingPOST(
  body: API.SaveTalkPageQuery,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultBeanTableResponseListKeyWordsVo>(
    '/weWorkchatTopic/keyWordlist',
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
