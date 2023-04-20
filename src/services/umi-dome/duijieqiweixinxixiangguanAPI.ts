// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 编辑客户企业标签 POST /open/wxtag/markTag */
export async function markTagUsingPOST(
  body: API.bianjikehuqiyebiaoqian,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultobject>('/open/wxtag/markTag', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
