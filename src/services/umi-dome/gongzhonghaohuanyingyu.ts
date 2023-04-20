// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 删除公众号欢迎语 POST /wework/mpwelcomecode/deleteMpWelcomeCode */
export async function deleteWelcomeCodeUsingPOST(body: string, options?: { [key: string]: any }) {
  return request<API.BeanCommonResultobject>('/wework/mpwelcomecode/deleteMpWelcomeCode', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询公众号欢迎语列表 查询公众号欢迎语列表，默认数据范围为：当前登录账号所在公司. POST /wework/mpwelcomecode/findList */
export async function findListUsingPOST8(
  body: API.BeanTableRequestgongzhonghaohuanyingyuliebiaoqingqiushiti,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseWelcomeCodeListVo>('/wework/mpwelcomecode/findList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询公众号欢迎语员工使用范围 POST /wework/mpwelcomecode/findMpWelcomeCodeEmployeeList */
export async function findWelcomeCodeEmployeeListUsingPOST(
  body: API.BeanTableRequestgongzhonghaohuanyingyudangehuanyingyurenyuanhuodianpuqingqiushiti,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseEmployeePageDTO>(
    '/wework/mpwelcomecode/findMpWelcomeCodeEmployeeList',
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

/** 查询公众号欢迎语门店使用范围 POST /wework/mpwelcomecode/findMpWelcomeCodeShopList */
export async function findWelcomeCodeShopListUsingPOST(
  body: API.BeanTableRequestgongzhonghaohuanyingyudangehuanyingyurenyuanhuodianpuqingqiushiti,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseShopPageDTO>('/wework/mpwelcomecode/findMpWelcomeCodeShopList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询公众号欢迎语详情 GET /wework/mpwelcomecode/getMpWelcomeCode */
export async function getWelcomeCodeUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getWelcomeCodeUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultgongzhonghaohuanyingyubaocunhuogengxinshiti>(
    '/wework/mpwelcomecode/getMpWelcomeCode',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 新增/修改公众号欢迎语 POST /wework/mpwelcomecode/saveOrUpdateMpWelcomeCode */
export async function saveOrUpdateWelcomeCodeUsingPOST(
  body: API.gongzhonghaohuanyingyubaocunhuogengxinshiti,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultobject>('/wework/mpwelcomecode/saveOrUpdateMpWelcomeCode', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新公众号欢迎语状态 POST /wework/mpwelcomecode/setMpWelcomeCodeStatus */
export async function setWelcomeCodeStatusUsingPOST(
  body: API.WeChatWelcomeCodeDto,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/wework/mpwelcomecode/setMpWelcomeCodeStatus', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
