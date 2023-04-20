// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 长链转短链 长链转短链 GET /guide/shortUrl/createShortUrl */
export async function createShortUrlUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.createShortUrlUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultobject>('/guide/shortUrl/createShortUrl', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
