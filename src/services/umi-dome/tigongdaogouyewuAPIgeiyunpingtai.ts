// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 激活会员卡回调 GET /open/cloud/openCardCallback/${param0} */
export async function openCardCallbackUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.openCardCallbackUsingGETParams,
  options?: { [key: string]: any },
) {
  const { appId: param0, ...queryParams } = params;
  return request<API.BeanCommonResult>(`/open/cloud/openCardCallback/${param0}`, {
    method: 'GET',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 消息推送接口 POST /open/cloud/push */
export async function pushUsingPOST(body: API.WechatPushRequest, options?: { [key: string]: any }) {
  return request<API.BeanCommonResult>('/open/cloud/push', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
