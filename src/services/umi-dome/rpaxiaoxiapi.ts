// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 分页查询效果分析明细 POST /rpa/message/effectAnalysisDetail */
export async function effectAnalysisDetailUsingPOST(
  body: API.BeanTableRequestfenyesousuorpafaxiaoxijieshouren,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultBeanTableResponserpafaxiaoxijieshourenxiangqing>(
    '/rpa/message/effectAnalysisDetail',
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

/** 效果分析概览 POST /rpa/message/effectAnalysisGeneral */
export async function effectAnalysisGeneralUsingPOST(
  body: API.sousuorpafaxiaoxijieshouren,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultxiaoguofenxi>('/rpa/message/effectAnalysisGeneral', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** rpa群聊列表 POST /rpa/message/getRpaChatList */
export async function getRpaChatListUsingPOST(
  body: API.BeanTableRequestfenyesousuorpaqunliao,
  options?: { [key: string]: any },
) {
  return request<API.TableResponse>('/rpa/message/getRpaChatList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** rpa消息列表查询 POST /rpa/message/getRpaMessageList */
export async function getRpaMessageListUsingPOST(
  body: API.BeanTableRequestfenyesousuorpayingxiaoxiaoxi,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultBeanTableResponseRPAhuodongchaxunliebiaoDTO>(
    '/rpa/message/getRpaMessageList',
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

/** 获取小眼睛数据 POST /rpa/message/list */
export async function lisUsingPOST(
  body: API.BeanTableRequestrpaxiaoyanjingqunliao,
  options?: { [key: string]: any },
) {
  return request<API.TableResponse>('/rpa/message/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 创建或者更新rpa消息 POST /rpa/message/saveOrUpdate */
export async function saveOrUpdateUsingPOST3(
  body: API.RPAxinjianyingxiaohuodongxiangqingDTO,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResult>('/rpa/message/saveOrUpdate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取任务详情 GET /rpa/message/show */
export async function showUsingGET2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.showUsingGET2Params,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultRPAxinjianyingxiaohuodongxiangqingDTO>('/rpa/message/show', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 终止任务 POST /rpa/message/stopTask */
export async function stopTaskUsingPOST(body: number, options?: { [key: string]: any }) {
  return request<API.BeanCommonResult>('/rpa/message/stopTask', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
