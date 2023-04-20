// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** delete POST /intelligent/aggregation/delete */
export async function deleteUsingPOST(body: number, options?: { [key: string]: any }) {
  return request<API.BeanCommonResultobject>('/intelligent/aggregation/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** get GET /intelligent/aggregation/get */
export async function getUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultzhinengdabiaojuherenwubiaoxiangqing>(
    '/intelligent/aggregation/get',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** list POST /intelligent/aggregation/list */
export async function listUsingPOST1(
  body: API.BeanTableRequestsousuozhinengdabiaojuherenwubiao,
  options?: { [key: string]: any },
) {
  return request<API.TableResponsezhinengdabiaojuherenwubiaoxiangqing>(
    '/intelligent/aggregation/list',
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

/** relationList POST /intelligent/aggregation/relationlist */
export async function relationListUsingPOST(
  body: API.BeanTableRequestqingqiuguanlianrenwuguanliandezhinengdabiaorenwu,
  options?: { [key: string]: any },
) {
  return request<API.TableResponsejuherenwuguanlianderenwushiti>(
    '/intelligent/aggregation/relationlist',
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

/** save POST /intelligent/aggregation/save */
export async function saveUsingPOST(
  body: API.chuangjianzhinengdabiaojuherenwubiao,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultobject>('/intelligent/aggregation/save', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** taskList POST /intelligent/aggregation/taskList */
export async function taskListUsingPOST(
  body: API.BeanTableRequestsousuozhinengdabiaodabiaorenwubiao,
  options?: { [key: string]: any },
) {
  return request<API.TableResponsedabiaorenwuliebiaofanhuishiti>(
    '/intelligent/aggregation/taskList',
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

/** update POST /intelligent/aggregation/update */
export async function updateUsingPOST(
  body: API.gengxinzhinengdabiaojuherenwubiao,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultobject>('/intelligent/aggregation/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 开启或关闭任务状态 POST /intelligent/aggregation/updateStatus */
export async function updateStatusUsingPOST(body: number, options?: { [key: string]: any }) {
  return request<API.BeanCommonResult>('/intelligent/aggregation/updateStatus', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
