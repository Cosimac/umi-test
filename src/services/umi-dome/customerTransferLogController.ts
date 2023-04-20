// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 导出查询客户转移日志详情 导出导购管理后台转移明细，默认数据范围为：当前登录账号所在公司. GET /guide/customertransferlog/exportTaskDetailList */
export async function exportCustomerTransferLogDetailListUsingGET(
  body: API.kehuzhuanyirenwuliebiaochaxunqingqiushiti,
  options?: { [key: string]: any },
) {
  return request<any>('/guide/customertransferlog/exportTaskDetailList', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 导出查询客户转移日志详情 导出导购管理后台转移明细，默认数据范围为：当前登录账号所在公司. PUT /guide/customertransferlog/exportTaskDetailList */
export async function exportCustomerTransferLogDetailListUsingPUT(
  body: API.kehuzhuanyirenwuliebiaochaxunqingqiushiti,
  options?: { [key: string]: any },
) {
  return request<any>('/guide/customertransferlog/exportTaskDetailList', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 导出查询客户转移日志详情 导出导购管理后台转移明细，默认数据范围为：当前登录账号所在公司. POST /guide/customertransferlog/exportTaskDetailList */
export async function exportCustomerTransferLogDetailListUsingPOST(
  body: API.kehuzhuanyirenwuliebiaochaxunqingqiushiti,
  options?: { [key: string]: any },
) {
  return request<any>('/guide/customertransferlog/exportTaskDetailList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 导出查询客户转移日志详情 导出导购管理后台转移明细，默认数据范围为：当前登录账号所在公司. DELETE /guide/customertransferlog/exportTaskDetailList */
export async function exportCustomerTransferLogDetailListUsingDELETE(
  body: API.kehuzhuanyirenwuliebiaochaxunqingqiushiti,
  options?: { [key: string]: any },
) {
  return request<any>('/guide/customertransferlog/exportTaskDetailList', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 导出查询客户转移日志详情 导出导购管理后台转移明细，默认数据范围为：当前登录账号所在公司. PATCH /guide/customertransferlog/exportTaskDetailList */
export async function exportCustomerTransferLogDetailListUsingPATCH(
  body: API.kehuzhuanyirenwuliebiaochaxunqingqiushiti,
  options?: { [key: string]: any },
) {
  return request<any>('/guide/customertransferlog/exportTaskDetailList', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询客户转移明细详情 导购管理后台用于查询客户转移明细，默认数据范围为：当前登录账号所在公司. GET /guide/customertransferlog/findCustomerTransferLogDetailList */
export async function findCustomerTransferLogDetailListUsingGET(
  body: API.kehuzhuanyirenwuliebiaochaxunqingqiushiti,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseSgCustomerTransferTaskDetailVO>(
    '/guide/customertransferlog/findCustomerTransferLogDetailList',
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}

/** 查询客户转移明细详情 导购管理后台用于查询客户转移明细，默认数据范围为：当前登录账号所在公司. PUT /guide/customertransferlog/findCustomerTransferLogDetailList */
export async function findCustomerTransferLogDetailListUsingPUT(
  body: API.kehuzhuanyirenwuliebiaochaxunqingqiushiti,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseSgCustomerTransferTaskDetailVO>(
    '/guide/customertransferlog/findCustomerTransferLogDetailList',
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}

/** 查询客户转移明细详情 导购管理后台用于查询客户转移明细，默认数据范围为：当前登录账号所在公司. POST /guide/customertransferlog/findCustomerTransferLogDetailList */
export async function findCustomerTransferLogDetailListUsingPOST(
  body: API.kehuzhuanyirenwuliebiaochaxunqingqiushiti,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseSgCustomerTransferTaskDetailVO>(
    '/guide/customertransferlog/findCustomerTransferLogDetailList',
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

/** 查询客户转移明细详情 导购管理后台用于查询客户转移明细，默认数据范围为：当前登录账号所在公司. DELETE /guide/customertransferlog/findCustomerTransferLogDetailList */
export async function findCustomerTransferLogDetailListUsingDELETE(
  body: API.kehuzhuanyirenwuliebiaochaxunqingqiushiti,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseSgCustomerTransferTaskDetailVO>(
    '/guide/customertransferlog/findCustomerTransferLogDetailList',
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}

/** 查询客户转移明细详情 导购管理后台用于查询客户转移明细，默认数据范围为：当前登录账号所在公司. PATCH /guide/customertransferlog/findCustomerTransferLogDetailList */
export async function findCustomerTransferLogDetailListUsingPATCH(
  body: API.kehuzhuanyirenwuliebiaochaxunqingqiushiti,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseSgCustomerTransferTaskDetailVO>(
    '/guide/customertransferlog/findCustomerTransferLogDetailList',
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}

/** 查询客户转移日志列表 导购管理后台用于查询客户转移日志列表，默认数据范围为：当前登录账号所在公司. GET /guide/customertransferlog/findList */
export async function findListUsingGET1(
  body: API.BeanTableRequest,
  options?: { [key: string]: any },
) {
  return request<API.BeanTableResponseSgCustomerTransferTaskVO>(
    '/guide/customertransferlog/findList',
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}

/** 查询客户转移日志列表 导购管理后台用于查询客户转移日志列表，默认数据范围为：当前登录账号所在公司. PUT /guide/customertransferlog/findList */
export async function findListUsingPUT1(
  body: API.BeanTableRequest,
  options?: { [key: string]: any },
) {
  return request<API.BeanTableResponseSgCustomerTransferTaskVO>(
    '/guide/customertransferlog/findList',
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}

/** 查询客户转移日志列表 导购管理后台用于查询客户转移日志列表，默认数据范围为：当前登录账号所在公司. POST /guide/customertransferlog/findList */
export async function findListUsingPOST1(
  body: API.BeanTableRequest,
  options?: { [key: string]: any },
) {
  return request<API.BeanTableResponseSgCustomerTransferTaskVO>(
    '/guide/customertransferlog/findList',
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

/** 查询客户转移日志列表 导购管理后台用于查询客户转移日志列表，默认数据范围为：当前登录账号所在公司. DELETE /guide/customertransferlog/findList */
export async function findListUsingDELETE1(
  body: API.BeanTableRequest,
  options?: { [key: string]: any },
) {
  return request<API.BeanTableResponseSgCustomerTransferTaskVO>(
    '/guide/customertransferlog/findList',
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}

/** 查询客户转移日志列表 导购管理后台用于查询客户转移日志列表，默认数据范围为：当前登录账号所在公司. PATCH /guide/customertransferlog/findList */
export async function findListUsingPATCH1(
  body: API.BeanTableRequest,
  options?: { [key: string]: any },
) {
  return request<API.BeanTableResponseSgCustomerTransferTaskVO>(
    '/guide/customertransferlog/findList',
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}
