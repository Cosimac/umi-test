// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** findTrackPageBizTypeList GET /eventtrack/eventtrackconfig/findTrackPageBizTypeList */
export async function findTrackPageBizTypeListUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.findTrackPageBizTypeListUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/eventtrack/eventtrackconfig/findTrackPageBizTypeList', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
