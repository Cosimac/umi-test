// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 返现申请批量审核接口 POST /guide/cashback/batchReviewRecord */
export async function batchReviewRecordUsingPOST(
  body: API.piliangshenhejiekoucanshu,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultboolean>('/guide/cashback/batchReviewRecord', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 新建好评返现活动 POST /guide/cashback/create */
export async function saveUsingPOST3(
  body: API.baocunhaopingfanxian,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultboolean>('/guide/cashback/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 活动详情 GET /guide/cashback/detail */
export async function detailUsingGET2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.detailUsingGET2Params,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResulthaopingfanxianhuodongwanzhengxiangqing>(
    '/guide/cashback/detail',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 效果分析 POST /guide/cashback/effectAnalysis */
export async function effectAnalysisUsingPOST(
  body: API.BeanTableRequestxiaoguofenxiqingqiu,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultTableResponsehaopingfanxianhuodongcanyujilubiaoxiangqing>(
    '/guide/cashback/effectAnalysis',
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

/** 结束活动 POST /guide/cashback/end */
export async function endUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.endUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultboolean>('/guide/cashback/end', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 商品列表 POST /guide/cashback/goodsList */
export async function goodsListUsingPOST(
  body: API.BeanTableRequestshangpinliebiaoqingqiu,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultTableResponseshangpinliebiao>('/guide/cashback/goodsList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 导入好评返现商品 POST /guide/cashback/importCashBackGoods */
export async function importCashBackGoodsUsingPOST(
  body: API.haopingfanxiandaoruwenjianhuoshoudonglurushangpin,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultdaoruhaopingfanxianshangpinliebiaojieguo>(
    '/guide/cashback/importCashBackGoods',
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

/** 客道商品sku POST /guide/cashback/kdGoodsSku */
export async function kdGoodsSkuUsingPOST(
  body: API.shangpinSkuliebiaoqingqiu,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultListSkuVo>('/guide/cashback/kdGoodsSku', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询返现金额变更记录 POST /guide/cashback/queryAmountChangeLog */
export async function queryAmountChangeLogUsingPOST(
  body: API.BeanTableRequestchaxundiaozhengjinejilu,
  options?: { [key: string]: any },
) {
  return request<API.TableResponsehaopingfanxiandiaozhengjinejiluxingxiangmu>(
    '/guide/cashback/queryAmountChangeLog',
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

/** 查询好评返现活动列表 POST /guide/cashback/queryList */
export async function queryListUsingPOST(
  body: API.BeanTableRequestchaxunhaopingfanxian,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultTableResponsehaopingfanxianhuodongwanzhengxiangqing>(
    '/guide/cashback/queryList',
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

/** 调整金额记录审核账号下拉接口,参数只需要传入分页相关参数,公司和企微信息不用传入后端会从session中获取 POST /guide/cashback/queryReviewAccount */
export async function queryReviewAccountUsingPOST(
  body: API.BeanTableRequestobject,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseyuangongxinxi>('/guide/cashback/queryReviewAccount', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 审核记录查询 POST /guide/cashback/queryReviewRecord */
export async function queryReviewRecordUsingPOST(
  body: API.BeanTableRequestchaxunhaopingfanxianshenhejilu,
  options?: { [key: string]: any },
) {
  return request<API.TableResponsehaopingfanxianshenhejiluxingxiangmu>(
    '/guide/cashback/queryReviewRecord',
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

/** 查询店铺下拉接口,参数只需要传入分页相关参数 POST /guide/cashback/queryShopPage */
export async function queryShopPageUsingPOST(
  body: API.BeanTableRequestobject,
  options?: { [key: string]: any },
) {
  return request<API.TableResponsemendianjianyaoxinxi>('/guide/cashback/queryShopPage', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 领取记录查询 POST /guide/cashback/receiveList */
export async function receiveListUsingPOST(
  body: API.BeanTableRequestsousuocaiwuliushui,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultTableResponsehaopingfanxianlingquliebiao>(
    '/guide/cashback/receiveList',
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

/** 返现申请审核接口 POST /guide/cashback/reviewRecord */
export async function reviewRecordUsingPOST(
  body: API.dangeshenhejiekoucanshu,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultboolean>('/guide/cashback/reviewRecord', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新好评返现活动 POST /guide/cashback/update */
export async function updateUsingPOST5(
  body: API.gengxinhaopingfanxian,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultboolean>('/guide/cashback/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 上传商家编码excel文件 POST /guide/cashback/uploadGoodsFile */
export async function uploadGoodsFileUsingPOST(body: string, options?: { [key: string]: any }) {
  return request<API.BeanCommonResultshangchuanhaopingfanxianexcelshangpinjieguo>(
    '/guide/cashback/uploadGoodsFile',
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
