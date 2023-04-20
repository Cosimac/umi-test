// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 智能打标每日数据报表 POST /intelligent/analyze/getTaskDailyData */
export async function getTaskDailyDataUsingPOST(
  body: API.BeanTableRequestzhinengdabiaomeirishujubaobiao,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultTableResponserenwushujugailanshiti>(
    '/intelligent/analyze/getTaskDailyData',
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

/** 智能打标每日数据报表折线图 POST /intelligent/analyze/getTaskDailyDataList */
export async function getTaskDailyDataListUsingPOST(
  body: API.zhinengdabiaomeirishujubaobiao,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultListrenwushujugailanshiti>(
    '/intelligent/analyze/getTaskDailyDataList',
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

/** 头部数据概览 GET /intelligent/analyze/getTaskDataView */
export async function getTaskDataViewUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getTaskDataViewUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultrenwushujugailanshiti>(
    '/intelligent/analyze/getTaskDataView',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}
