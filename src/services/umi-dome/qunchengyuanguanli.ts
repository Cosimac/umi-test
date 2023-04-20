// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 重复群统计详情列表查询 POST /wework/weworkRoomMember/queryRepeatedInContactDetailList */
export async function queryRepeatedInListUsingPOST(
  body: API.BeanTableRequestzhongfuquntongjixiangqingliebiaochaxunqingqiuduixiang,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultBeanTableResponsezhongfuquntongjixiangqingliebiaochaxunxiangyingduixiang>(
    '/wework/weworkRoomMember/queryRepeatedInContactDetailList',
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

/** queryWeWorkRoomsMemberTable POST /wework/weworkRoomMember/queryWeWorkRoomsMemberTable */
export async function queryWeWorkRoomsMemberTableUsingPOST(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/wework/weworkRoomMember/queryWeWorkRoomsMemberTable', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
