// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 创建任务 POST /mp/mark/create */
export async function createUsingPOST4(
  body: API.gongzhonghaodabiaohuodongchuangjianqingqiuti,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultobject>('/mp/mark/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除接口 POST /mp/mark/delete */
export async function deleteUsingPOST6(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteUsingPOST6Params,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultobject>('/mp/mark/delete', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取明细 GET /mp/mark/detail */
export async function detailUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.detailUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultgongzhonghaodabiaorenwubiaoxiangqing>('/mp/mark/detail', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取标签接口,此接口返回label表的对象 POST /mp/mark/getLabel */
export async function getLabelUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getLabelUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultListgongzhonghaobiaoqianbiaoxiangqing>('/mp/mark/getLabel', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取场景值接口 POST /mp/mark/getMarkSceneTreeNode */
export async function getMarkSceneTreeNodeUsingPOST(options?: { [key: string]: any }) {
  return request<API.BeanCommonResultMarkSceneTreeNode>('/mp/mark/getMarkSceneTreeNode', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 每日数据报表 POST /mp/mark/getTaskDailyData */
export async function getTaskDailyDataUsingPOST1(
  body: API.BeanTableRequestzhinengdabiaomeirishujubaobiao,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultTableResponserenwushujugailanshiti>(
    '/mp/mark/getTaskDailyData',
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

/** 折线图 POST /mp/mark/getTaskDailyDataList */
export async function getTaskDailyDataListUsingPOST1(
  body: API.zhinengdabiaomeirishujubaobiao,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultListrenwushujugailanshiti>('/mp/mark/getTaskDailyDataList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 数据概览 GET /mp/mark/getTaskDataView */
export async function getTaskDataViewUsingGET1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getTaskDataViewUsingGET1Params,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultrenwushujugailanshiti>('/mp/mark/getTaskDataView', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 公众号打标活动列表 POST /mp/mark/list */
export async function findListUsingPOST6(
  body: API.BeanTableRequestgongzhonghaodabiaohuodongliebiaoqingqiuti,
  options?: { [key: string]: any },
) {
  return request<API.TableResponsegongzhonghaodabiaohuodongliebiaoxiangxiangyingti>(
    '/mp/mark/list',
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

/** 更新任务 POST /mp/mark/update */
export async function updateUsingPOST4(
  body: API.gongzhonghaodabiaohuodonggengxinqingqiuti,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultobject>('/mp/mark/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 打标任务的禁止和启用 POST /mp/mark/updateTaskStatus */
export async function updateTaskStatusUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateTaskStatusUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultobject>('/mp/mark/updateTaskStatus', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
