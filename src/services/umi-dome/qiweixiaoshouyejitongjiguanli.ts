// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取企微销售业绩<详情>统计列表 POST /wework/sales/statistics/detail/list */
export async function detailListUsingPOST(
  body: API.BeanTableRequestqiweixiangqingliebiaoxiaoshouyejitongji,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultBeanTableResponseqiweixiaoshouyejixiangqingtongjixiangyingti>(
    '/wework/sales/statistics/detail/list',
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

/** 获取企微销售业绩<二级详情>统计列表 POST /wework/sales/statistics/detailByPlat/list */
export async function detailByPlatListUsingPOST(
  body: API.BeanTableRequestqiweixiangqingliebiaoxiaoshouyejitongji,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultBeanTableResponseqiweixiaoshouyejixiangqingtongjixiangyingti>(
    '/wework/sales/statistics/detailByPlat/list',
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

/** 店铺平台列表 GET /wework/sales/statistics/plat/list */
export async function shopPlatListUsingGET(options?: { [key: string]: any }) {
  return request<API.BeanCommonResultListShopPlatInfo>('/wework/sales/statistics/plat/list', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取企微<群聊>销售业绩统计列表 POST /wework/sales/statistics/room/list */
export async function roomListUsingPOST(
  body: API.BeanTableRequestqiweiqunhuochengyuanliebiaoxiaoshouyejitongji,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultBeanTableResponseqiweiqunliaoxiaoshouyejitongjixiangyingti>(
    '/wework/sales/statistics/room/list',
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

/** 店铺列表 GET /wework/sales/statistics/shop/list */
export async function shopListUsingGET(options?: { [key: string]: any }) {
  return request<API.BeanCommonResultListCmShopVo>('/wework/sales/statistics/shop/list', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取企微<成员>销售业绩统计列表 POST /wework/sales/statistics/user/list */
export async function userListUsingPOST(
  body: API.BeanTableRequestqiweiqunhuochengyuanliebiaoxiaoshouyejitongji,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultBeanTableResponseqiweichengyuanxiaoshouyejitongjixiangyingti>(
    '/wework/sales/statistics/user/list',
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
