// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 查询配置项(销售业绩code:wework_sales_statistics_hours,value:'{
    "forGuideRule": 1,
    "hours": 6,
    "isOpen": true,
    "isOpenForChatroom": true,
    "isOpenForGuide": true
}'),通过isOpen判定是否开启,hours设置时长,forGuideRule:员工销售数据统计规则设置,1首添加,2后添加,isOpenForGuide:员工销售数据统计是否开启,isOpenForChatroom:群销售数据统计是否开启 GET /operate/sysConfig/findByCode */
export async function findByCodeUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.findByCodeUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultSgSysConfigVo>('/operate/sysConfig/findByCode', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 只支持更新销售业绩: 当关闭时isOpen设置为false,hours保持为原来的值 POST /operate/sysConfig/update */
export async function saveOrUpdateUsingPOST2(
  body: API.SgSysConfigVo,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultobject>('/operate/sysConfig/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
