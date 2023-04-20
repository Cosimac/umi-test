// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取公众号列表 GET /wxpay/wechatOfficial/getWeChatOfficialAccounts */
export async function getWeChatOfficialAccountsUsingGET1(options?: { [key: string]: any }) {
  return request<API.BeanCommonResultListgongzhonghaoxinxi>(
    '/wxpay/wechatOfficial/getWeChatOfficialAccounts',
    {
      method: 'GET',
      ...(options || {}),
    },
  );
}
