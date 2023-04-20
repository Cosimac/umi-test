// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** rpa客户新增 POST /rpa/group/addClient */
export async function addClientUsingPOST(
  body: API.xinzengrpakehu,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultboolean>('/rpa/group/addClient', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 正式账号数设置 POST /rpa/group/addOfficialAccount */
export async function addOfficialAccountUsingPOST(
  body: API.shezhirpazhanghaoshu,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultboolean>('/rpa/group/addOfficialAccount', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 试用账号数设置 POST /rpa/group/addTrialAccount */
export async function addTrialAccountUsingPOST(
  body: API.shezhirpazhanghaoshu,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultboolean>('/rpa/group/addTrialAccount', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** rpa客户列表查询 POST /rpa/group/getClientList */
export async function getClientListUsingPOST(
  body: API.BeanTableRequestchaxunrpakehuqingqiu,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultBeanTableResponserpakehuxiangying>(
    '/rpa/group/getClientList',
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

/** 正式账号批次查看 POST /rpa/group/getOfficialAccount */
export async function getOfficialAccountUsingPOST(
  body: API.BeanTableRequestrpazhanghaopicichaxun,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultBeanTableResponserpazhanghaotianjiarizhibiaoxiangqingxiangying>(
    '/rpa/group/getOfficialAccount',
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

/** 试用账号批次查看 POST /rpa/group/getTrialAccount */
export async function getTrialAccountUsingPOST(
  body: API.BeanTableRequestrpazhanghaopicichaxun,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultBeanTableResponserpazhanghaotianjiarizhibiaoxiangqingxiangying>(
    '/rpa/group/getTrialAccount',
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
