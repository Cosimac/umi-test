// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 关闭banner GET /sop/canvas/closeBanner */
export async function closeBannerUsingGET(options?: { [key: string]: any }) {
  return request<API.BeanCommonResultobject>('/sop/canvas/closeBanner', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 创建或更新sop画布 POST /sop/canvas/createOrUpdateCanvas */
export async function createOrUpdateCanvasUsingPOST(
  body: API.Sophuabuxiangqing,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultlong>('/sop/canvas/createOrUpdateCanvas', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除sop画布 GET /sop/canvas/deleteSopCanvas */
export async function deleteSopCanvasUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteSopCanvasUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultobject>('/sop/canvas/deleteSopCanvas', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取当前环境可用的人群属性 GET /sop/canvas/getAvailableAttributeCode */
export async function getAvailableAttributeCodeUsingGET(options?: { [key: string]: any }) {
  return request<API.BeanCommonResultrenqunshuxingshaixuanxiangshiti>(
    '/sop/canvas/getAvailableAttributeCode',
    {
      method: 'GET',
      ...(options || {}),
    },
  );
}

/** 获取当前环境可用的人群行为,目标设置的code，type 4：行为，5：目标 GET /sop/canvas/getAvailableBehaviorCode */
export async function getAvailableBehaviorCodeUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getAvailableBehaviorCodeUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultListrenqunshuxingshaixuanxiangshiti>(
    '/sop/canvas/getAvailableBehaviorCode',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 获取当前环境可用的目标设置code GET /sop/canvas/getAvailableTargetCode */
export async function getAvailableTargetCodeUsingGET(options?: { [key: string]: any }) {
  return request<API.BeanCommonResultListrenqunshuxingshaixuanxiangshiti>(
    '/sop/canvas/getAvailableTargetCode',
    {
      method: 'GET',
      ...(options || {}),
    },
  );
}

/** 获取平台接口(new) GET /sop/canvas/getGroupPlatList */
export async function getGroupPlatListUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getGroupPlatListUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultListPlatDTO>('/sop/canvas/getGroupPlatList', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取店铺接口(new) POST /sop/canvas/getGroupShopList */
export async function getGroupShopListUsingPOST(
  body: API.SearchShopPageDTO,
  options?: { [key: string]: any },
) {
  return request<API.BeanTableResponseShopDTO>('/sop/canvas/getGroupShopList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取客道环境下的店铺列表 GET /sop/canvas/getKdShop */
export async function getKdShopUsingGET(options?: { [key: string]: any }) {
  return request<API.BeanCommonResultListKdShopDTO>('/sop/canvas/getKdShop', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取客道环境下的客户分组 POST /sop/canvas/getKdSubList */
export async function getKdSubListUsingPOST(
  body: API.Sopkedaokehufenzuhuoqujiekoucanshu,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultListSubdivisionDTO>('/sop/canvas/getKdSubList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取体系下的会员等级 GET /sop/canvas/getMemberLevel */
export async function getMemberLevelUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getMemberLevelUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultListsophuabuguolvxiangzhongdehuiyuandengjishiti>(
    '/sop/canvas/getMemberLevel',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 获取平台绑定的店铺列表 GET /sop/canvas/getPlatBindShopList */
export async function getPlatBindShopListUsingGET1(options?: { [key: string]: any }) {
  return request<API.BeanCommonResultListKdPlatShopDTO>('/sop/canvas/getPlatBindShopList', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取ecrp平台绑定的店铺列表 GET /sop/canvas/getPlatShopList */
export async function getPlatShopListUsingGET(options?: { [key: string]: any }) {
  return request<API.BeanCommonResultListecrpdianpupingtaishiti>('/sop/canvas/getPlatShopList', {
    method: 'GET',
    ...(options || {}),
  });
}

/** sop画布详情获取 GET /sop/canvas/getSopCanvasDetail */
export async function getSopCanvasDetailUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getSopCanvasDetailUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultSophuabuxiangqing>('/sop/canvas/getSopCanvasDetail', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** sop画布人群过滤条件获取,type:3.属性 4.事件 5.目标 GET /sop/canvas/getSopCanvasFilterItem */
export async function getSopCanvasFilterItemUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getSopCanvasFilterItemUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultListkepeizhideshaixuantiaojianxiangqing>(
    '/sop/canvas/getSopCanvasFilterItem',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 判断是否首次进入画布 GET /sop/canvas/judgeFirstOpen */
export async function judgeFirstOpenUsingGET1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.judgeFirstOpenUsingGET1Params,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultboolean>('/sop/canvas/judgeFirstOpen', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 判断用户是否有关闭banner GET /sop/canvas/judgeIfCloseBanner */
export async function judgeIfCloseBannerUsingGET(options?: { [key: string]: any }) {
  return request<API.BeanCommonResultboolean>('/sop/canvas/judgeIfCloseBanner', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 开始运行sop画布 GET /sop/canvas/startSopCanvas */
export async function startSopCanvasUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.startSopCanvasUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultobject>('/sop/canvas/startSopCanvas', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 暂停运行sop画布 GET /sop/canvas/stopSopCanvas */
export async function stopSopCanvasUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.stopSopCanvasUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultobject>('/sop/canvas/stopSopCanvas', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
