// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 修改导购优惠券状态 修改导购优惠券状态 POST /guide/sgactivitycoupon/editCouponGuideState */
export async function editCouponGuideStateUsingPOST(
  body: API.SgActivityCouponQuery,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/sgactivitycoupon/editCouponGuideState', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询导购体系活动优惠券列表 导购管理后台用于查询导购体系活动优惠券列表，table请求参数为后台公共table组件，searchMap{couponType：门店优惠券类型（0：未知，1：代金券、2：折扣券、3：兑换券）；coupon_title：优惠券标题；couponCode：优惠券编码} POST /guide/sgactivitycoupon/findActivityCouponList */
export async function findActivityCouponListUsingPOST(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseChannelActivityCouponDTO>(
    '/guide/sgactivitycoupon/findActivityCouponList',
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

/** 查询优惠券分配导购列表-v8.01 查询优惠券分配导购列表 POST /guide/sgactivitycoupon/findActivityGuideCoupon */
export async function findActivityGuideCouponUsingPOST(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/sgactivitycoupon/findActivityGuideCoupon', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findActivityShopCoupon GET /guide/sgactivitycoupon/findActivityShopCoupon */
export async function findActivityShopCouponUsingGET(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/sgactivitycoupon/findActivityShopCoupon', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findActivityShopCoupon PUT /guide/sgactivitycoupon/findActivityShopCoupon */
export async function findActivityShopCouponUsingPUT(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/sgactivitycoupon/findActivityShopCoupon', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findActivityShopCoupon POST /guide/sgactivitycoupon/findActivityShopCoupon */
export async function findActivityShopCouponUsingPOST(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/sgactivitycoupon/findActivityShopCoupon', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findActivityShopCoupon DELETE /guide/sgactivitycoupon/findActivityShopCoupon */
export async function findActivityShopCouponUsingDELETE(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/sgactivitycoupon/findActivityShopCoupon', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findActivityShopCoupon PATCH /guide/sgactivitycoupon/findActivityShopCoupon */
export async function findActivityShopCouponUsingPATCH(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/sgactivitycoupon/findActivityShopCoupon', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询优惠券可使用范围导购-v8.01 查询优惠券可使用范围导购 POST /guide/sgactivitycoupon/findCouponGuide */
export async function findCouponGuideUsingPOST(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseRecord>('/guide/sgactivitycoupon/findCouponGuide', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findCouponShop GET /guide/sgactivitycoupon/findCouponShop */
export async function findCouponShopUsingGET(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseRecord>('/guide/sgactivitycoupon/findCouponShop', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findCouponShop PUT /guide/sgactivitycoupon/findCouponShop */
export async function findCouponShopUsingPUT(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseRecord>('/guide/sgactivitycoupon/findCouponShop', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findCouponShop POST /guide/sgactivitycoupon/findCouponShop */
export async function findCouponShopUsingPOST(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseRecord>('/guide/sgactivitycoupon/findCouponShop', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findCouponShop DELETE /guide/sgactivitycoupon/findCouponShop */
export async function findCouponShopUsingDELETE(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseRecord>('/guide/sgactivitycoupon/findCouponShop', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findCouponShop PATCH /guide/sgactivitycoupon/findCouponShop */
export async function findCouponShopUsingPATCH(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseRecord>('/guide/sgactivitycoupon/findCouponShop', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getCommodityByCoupon GET /guide/sgactivitycoupon/getCommodityByCoupon */
export async function getCommodityByCouponUsingGET(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseCommodityByConversionQuery>(
    '/guide/sgactivitycoupon/getCommodityByCoupon',
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

/** getCommodityByCoupon PUT /guide/sgactivitycoupon/getCommodityByCoupon */
export async function getCommodityByCouponUsingPUT(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseCommodityByConversionQuery>(
    '/guide/sgactivitycoupon/getCommodityByCoupon',
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

/** getCommodityByCoupon POST /guide/sgactivitycoupon/getCommodityByCoupon */
export async function getCommodityByCouponUsingPOST(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseCommodityByConversionQuery>(
    '/guide/sgactivitycoupon/getCommodityByCoupon',
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

/** getCommodityByCoupon DELETE /guide/sgactivitycoupon/getCommodityByCoupon */
export async function getCommodityByCouponUsingDELETE(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseCommodityByConversionQuery>(
    '/guide/sgactivitycoupon/getCommodityByCoupon',
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

/** getCommodityByCoupon PATCH /guide/sgactivitycoupon/getCommodityByCoupon */
export async function getCommodityByCouponUsingPATCH(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseCommodityByConversionQuery>(
    '/guide/sgactivitycoupon/getCommodityByCoupon',
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

/** getCouponListByParam POST /guide/sgactivitycoupon/getCouponListByParam */
export async function getCouponListByParamUsingPOST(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseOpenCouponInfo>('/guide/sgactivitycoupon/getCouponListByParam', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询优惠券列表 导购管理后台用于查询优惠券列表 POST /guide/sgactivitycoupon/queryList */
export async function queryListUsingPOST1(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseRecord>('/guide/sgactivitycoupon/queryList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 保存优惠券 导购管理后台用于保存优惠券 POST /guide/sgactivitycoupon/saveActiviCoupon */
export async function saveActiviCouponUsingPOST(
  body: API.SgActivityCouponVo,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/sgactivitycoupon/saveActiviCoupon', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
