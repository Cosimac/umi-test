// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 批量更新sop策略阶段列表 POST /sop/policyphase/batchUpdateSopPhase */
export async function batchUpdateSopPhaseUsingPOST(
  body: API.gengxinsopcelvepeizhi,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultobject>('/sop/policyphase/batchUpdateSopPhase', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询sop策略阶段列表 GET /sop/policyphase/getList */
export async function getListUsingGET1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getListUsingGET1Params,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultListsopcelvepeizhixiangqing>('/sop/policyphase/getList', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
