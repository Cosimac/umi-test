// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** (新)查询最常使用功能 查询使用次数最多的九个功能 POST /Overview/commonFunctions */
export async function queryCommonFunctionsUsingPOST(options?: { [key: string]: any }) {
  return request<API.BeanCommonResultListzhanghaojishouyegailanzuichangshiyongshitu>(
    '/Overview/commonFunctions',
    {
      method: 'POST',
      ...(options || {}),
    },
  );
}

/** (新)查询数据概览信息 POST /Overview/dataOverview */
export async function queryDataOverviewUsingPOST(
  body: API.shouyegailanshujugailanchaxuntiaojian,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultshouyegailanshujugailanxinxi>('/Overview/dataOverview', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findDailyReward GET /Overview/findDailyReward */
export async function findDailyRewardUsingGET(
  body: API.OverviewFindVo,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/Overview/findDailyReward', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findDailyReward PUT /Overview/findDailyReward */
export async function findDailyRewardUsingPUT(
  body: API.OverviewFindVo,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/Overview/findDailyReward', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findDailyReward POST /Overview/findDailyReward */
export async function findDailyRewardUsingPOST(
  body: API.OverviewFindVo,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/Overview/findDailyReward', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findDailyReward DELETE /Overview/findDailyReward */
export async function findDailyRewardUsingDELETE(
  body: API.OverviewFindVo,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/Overview/findDailyReward', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findDailyReward PATCH /Overview/findDailyReward */
export async function findDailyRewardUsingPATCH(
  body: API.OverviewFindVo,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/Overview/findDailyReward', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findDailyTrend GET /Overview/findDailyTrend */
export async function findDailyTrendUsingGET(
  body: API.OverviewFindVo,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/Overview/findDailyTrend', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findDailyTrend PUT /Overview/findDailyTrend */
export async function findDailyTrendUsingPUT(
  body: API.OverviewFindVo,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/Overview/findDailyTrend', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findDailyTrend POST /Overview/findDailyTrend */
export async function findDailyTrendUsingPOST(
  body: API.OverviewFindVo,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/Overview/findDailyTrend', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findDailyTrend DELETE /Overview/findDailyTrend */
export async function findDailyTrendUsingDELETE(
  body: API.OverviewFindVo,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/Overview/findDailyTrend', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findDailyTrend PATCH /Overview/findDailyTrend */
export async function findDailyTrendUsingPATCH(
  body: API.OverviewFindVo,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/Overview/findDailyTrend', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findGuideRanking GET /Overview/findGuideRanking */
export async function findGuideRankingUsingGET(
  body: API.OverviewFindVo,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/Overview/findGuideRanking', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findGuideRanking PUT /Overview/findGuideRanking */
export async function findGuideRankingUsingPUT(
  body: API.OverviewFindVo,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/Overview/findGuideRanking', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findGuideRanking POST /Overview/findGuideRanking */
export async function findGuideRankingUsingPOST(
  body: API.OverviewFindVo,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/Overview/findGuideRanking', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findGuideRanking DELETE /Overview/findGuideRanking */
export async function findGuideRankingUsingDELETE(
  body: API.OverviewFindVo,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/Overview/findGuideRanking', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findGuideRanking PATCH /Overview/findGuideRanking */
export async function findGuideRankingUsingPATCH(
  body: API.OverviewFindVo,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/Overview/findGuideRanking', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findShopRanking GET /Overview/findShopRanking */
export async function findShopRankingUsingGET(
  body: API.OverviewFindVo,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/Overview/findShopRanking', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findShopRanking PUT /Overview/findShopRanking */
export async function findShopRankingUsingPUT(
  body: API.OverviewFindVo,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/Overview/findShopRanking', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findShopRanking POST /Overview/findShopRanking */
export async function findShopRankingUsingPOST(
  body: API.OverviewFindVo,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/Overview/findShopRanking', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findShopRanking DELETE /Overview/findShopRanking */
export async function findShopRankingUsingDELETE(
  body: API.OverviewFindVo,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/Overview/findShopRanking', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findShopRanking PATCH /Overview/findShopRanking */
export async function findShopRankingUsingPATCH(
  body: API.OverviewFindVo,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/Overview/findShopRanking', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** (新)获取账户级页面模板 GET /Overview/getAccountTemplate */
export async function getAccountTemplateUsingGET(options?: { [key: string]: any }) {
  return request<API.BeanCommonResultListzhanghaojishouyegailanyemianmoban>(
    '/Overview/getAccountTemplate',
    {
      method: 'GET',
      ...(options || {}),
    },
  );
}

/** getRewardInfo GET /Overview/getRewardInfo */
export async function getRewardInfoUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getRewardInfoUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/Overview/getRewardInfo', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getRewardInfo PUT /Overview/getRewardInfo */
export async function getRewardInfoUsingPUT(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getRewardInfoUsingPUTParams,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/Overview/getRewardInfo', {
    method: 'PUT',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getRewardInfo POST /Overview/getRewardInfo */
export async function getRewardInfoUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getRewardInfoUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/Overview/getRewardInfo', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getRewardInfo DELETE /Overview/getRewardInfo */
export async function getRewardInfoUsingDELETE(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getRewardInfoUsingDELETEParams,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/Overview/getRewardInfo', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getRewardInfo PATCH /Overview/getRewardInfo */
export async function getRewardInfoUsingPATCH(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getRewardInfoUsingPATCHParams,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/Overview/getRewardInfo', {
    method: 'PATCH',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** (新)查询智能打标功能 (新)查询智能打标功能 POST /Overview/intelligentMark */
export async function queryIntelligentMarkUsingPOST(options?: { [key: string]: any }) {
  return request<API.BeanCommonResultshouyegailanzhinengdabiao>('/Overview/intelligentMark', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 查询数据概览总计数据 GET /Overview/queryTotalData */
export async function queryTotalDataUsingGET(options?: { [key: string]: any }) {
  return request<API.BeanCommonResultzongjishujufanhuivo>('/Overview/queryTotalData', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 查询群数据趋势概览数据 POST /Overview/queryTrendOverviewOfChatRoom */
export async function queryTrendOverviewOfChatRoomUsingPOST(
  body: API.shujugailanshujuchaxunvo,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultListqunqushigailanshujufanhuivo>(
    '/Overview/queryTrendOverviewOfChatRoom',
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

/** 查询好友趋势概览数据 POST /Overview/queryTrendOverviewOfFriend */
export async function queryTrendOverviewOfFriendUsingPOST(
  body: API.shujugailanshujuchaxunvo,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultListhaoyouqushigailanshujufanhuivo>(
    '/Overview/queryTrendOverviewOfFriend',
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

/** (新)查询最近消息 参数仅需传页数和页大小 POST /Overview/recentNews */
export async function queryRecentNewsUsingPOST(
  body: API.fenyesousuoshouyegailanzuijinxiaoxi,
  options?: { [key: string]: any },
) {
  return request<API.PageResultDTOshouyegailanzuijinxiaoxixiangqing>('/Overview/recentNews', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** (新)查询推荐功能 参数仅需传页数和页大小 POST /Overview/recommendedFeatures */
export async function queryRecommendedFeaturesUsingPOST(
  body: API.fenyesousuoshouyegailantuijiangongneng,
  options?: { [key: string]: any },
) {
  return request<API.PageResultDTOshouyegailantuijiangongnengxiangqing>(
    '/Overview/recommendedFeatures',
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

/** (新)保存或更新账户级页面模板 POST /Overview/saveOrUpdateAccountTemplate */
export async function saveOrUpdateAccountTemplateUsingPOST(
  body: API.chuangjianzhanghaojishouyegailanyemianmoban[],
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultstring>('/Overview/saveOrUpdateAccountTemplate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** (新)门店分布 (新)门店分布, 查询本月信息 POST /Overview/shopDistribution */
export async function queryShopDistributionUsingPOST(
  body: API.shouyegailanchaxuntiaojian,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultshouyegailanmendianfenbudetu>('/Overview/shopDistribution', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** (新)查询sop信息 (新)查询sop信息 POST /Overview/sop */
export async function querySopUsingPOST(options?: { [key: string]: any }) {
  return request<API.BeanCommonResultshouyegailanSOP>('/Overview/sop', {
    method: 'POST',
    ...(options || {}),
  });
}

/** (新)查询趋势概览信息 该接口受时间筛选、门店筛选影响 POST /Overview/trendOverview */
export async function queryTrendOverviewUsingPOST(
  body: API.shouyegailanqushigailanchaxuntiaojian,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultshouyegailanqushigailan>('/Overview/trendOverview', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
