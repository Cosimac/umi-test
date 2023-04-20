// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** rpa错误日志分页查询 POST /rpa/log/getErrorLogPage */
export async function getErrorLogPageUsingPOST(
  body: API.BeanTableRequestSearchMessageReportLogDTO,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseRpaErrorReportLogDTO>('/rpa/log/getErrorLogPage', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** rpa公司查询 GET /rpa/log/getRpaGroupList */
export async function getRpaGroupListUsingGET(options?: { [key: string]: any }) {
  return request<API.TableResponserpagongsiguanxixiangqing>('/rpa/log/getRpaGroupList', {
    method: 'GET',
    ...(options || {}),
  });
}
