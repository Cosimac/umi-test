// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 查询客户和店铺绑定关系 查询企微标签信息 POST /open/kd/wxuserbind/findCorpUserBind */
export async function findCorpUserBindUsingPOST(
  body: API.CorpUserBindRequest,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultCorpUserBindVo>('/open/kd/wxuserbind/findCorpUserBind', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
