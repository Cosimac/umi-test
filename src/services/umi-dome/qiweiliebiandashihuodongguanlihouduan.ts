// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 领取明细导出 POST /activity/guestCode/awardRecordTableExport */
export async function awardRecordTableExportUsingPOST(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<any>('/activity/guestCode/awardRecordTableExport', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 结束裂变大师活动 用于将裂变大师活动设置为已结束状态 GET /activity/guestCode/closeGuestCodeActivity */
export async function closeGuestCodeActivityUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.closeGuestCodeActivityUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResult>('/activity/guestCode/closeGuestCodeActivity', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 参与活动员工总数明细导出 POST /activity/guestCode/employeeListExport */
export async function employeeListExportUsingPOST(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<any>('/activity/guestCode/employeeListExport', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 裂变大师活动分析：获取好友明细列表导出EXCEL 获取好友明细列表EXCEL POST /activity/guestCode/exportFriendListByExcel */
export async function exportFriendListByExcelUsingPOST(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<any>('/activity/guestCode/exportFriendListByExcel', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询裂变大师活动奖励达标裂变大师列表 导购管理后台用于查询裂变大师活动奖励达标裂变大师列表 POST /activity/guestCode/findActivityReachStandard */
export async function findActivityReachStandardUsingPOST(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseGuestCodePromotionReachStandardDTO>(
    '/activity/guestCode/findActivityReachStandard',
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

/** 获取领取记录分析报表 导购管理后台用于查询领取记录分析报表 POST /activity/guestCode/findAwardRecordTable */
export async function findAwardRecordTableUsingPOST(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseGuestCodeAwardRecordDTO>(
    '/activity/guestCode/findAwardRecordTable',
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

/** 查询裂变大师活动下属员工列表 导购管理后台用于查询裂变大师活动下属员工列表<br/>.searchMap必须带有guestCodeId参数<br/>.searchMap中新增type字段（int） 关系类型：1=活动分享员工；2=聚合二维码员工，不传默认为1 POST /activity/guestCode/findGuideList */
export async function findGuideListUsingPOST(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseRecord>('/activity/guestCode/findGuideList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询裂变大师邀请好友明细 导购管理后台裂变大师活动分析用于查询裂变大师邀请好友明细<br/>.searchMap：必须带有guestCodeId参数;<br/>.searchMap：guideId=分享员工ID（与addGuideId不能同时为空）;<br/>.searchMap：addGuideId=添加好友员工ID（与guideId不能同时为空）;<br/>.searchMap：name=好友昵称;<br/>.searchMap：fissionMasterName=裂变大师昵称;<br/>.searchMap：promotionMasterIds=裂变大师unionIds;<br/>.searchMap：order=根据添加时间排序(desc = 降序, asc = 升序),区分大小写:使用小写; POST /activity/guestCode/findInviteDetailOfMasterFission */
export async function findInviteDetailOfMasterFissionUsingPOST(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseliebiandashiyaoqinghaoyouxiangqing>(
    '/activity/guestCode/findInviteDetailOfMasterFission',
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

/** 查询裂变大师活动列表 导购管理后台用于查询裂变大师活动列表 POST /activity/guestCode/findList */
export async function findListUsingPOST2(body: API.TableRequest, options?: { [key: string]: any }) {
  return request<API.TableResponseGuestCodeActivityDTO>('/activity/guestCode/findList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询弹出框端的裂变大师活动 查询弹出框端的裂变大师活动 POST /activity/guestCode/findPopupList */
export async function findPopupListUsingPOST(
  body: API.BeanTableRequestchaxundanchukuangduandeliebiandashihuodongqingqiuduixiang,
  options?: { [key: string]: any },
) {
  return request<API.BeanTableResponseGuestCodeActivityPopupResponse>(
    '/activity/guestCode/findPopupList',
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

/** 好友明细列表导出 POST /activity/guestCode/friendListExport */
export async function friendListExportUsingPOST(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<any>('/activity/guestCode/friendListExport', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询裂变大师活动 导购管理后台用于保存更新裂变大师活动. GET /activity/guestCode/getByGuestCodeId */
export async function getByGuestCodeIdUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getByGuestCodeIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultGuestCodeActivityAllDTO>(
    '/activity/guestCode/getByGuestCodeId',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 查询裂变大师活动分析所属员工明细列表 导购管理后台用于查询裂变大师活动下属员工明细列表 POST /activity/guestCode/getEmployeeListByGuestCodeId */
export async function getEmployeeListByGuestCodeIdUsingPOST(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseGuestCodeEmployeeDTO>(
    '/activity/guestCode/getEmployeeListByGuestCodeId',
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

/** 裂变大师活动分析：获取添加好友明细列表 获取好友明细列表 POST /activity/guestCode/getFriendListByParam */
export async function getFriendListByParamUsingPOST(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseGuestCodeFriendListDTO>(
    '/activity/guestCode/getFriendListByParam',
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

/** 查询邀请好友列表数据（按添加导购进行展示） 导购管理后台用于查询查询邀请好友列表数据（按添加导购进行展示）<br/>.searchMap：guestCodeId：必须带有guestCodeId参数;<br/>.searchMap：employeeName=员工姓名;<br/>.searchMap：guideIds=导购ids（注:使用英文逗号隔开,id首尾不可有空格,ids首尾不可有逗号）<br/>.searchMap：timeStart=添加好友起始时间;<br/>.searchMap：timeEnd=添加好友结束时间; POST /activity/guestCode/getFriendTableByAddGuide */
export async function getFriendTableByAddGuideUsingPOST(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseFriendTableByAddGuideDTO>(
    '/activity/guestCode/getFriendTableByAddGuide',
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

/** 查询裂变大师活动列表统计总数 查询裂变大师活动列表统计总数 POST /activity/guestCode/getGuestStatisticsCount */
export async function getGuestStatisticsCountUsingPOST(
  body: API.GuestCodeStatisticsQuery,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultGuestCodeStatisticsDTO>(
    '/activity/guestCode/getGuestStatisticsCount',
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

/** 查询裂变大师所添加的好友人员列表 导购管理后台用于查询裂变大师人员列表.searchMap必须带有guestCodeId参数 POST /activity/guestCode/getPromotionFriendsList */
export async function getPromotionFriendsListUsingPOST(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponsePromotionFriendsDTO>(
    '/activity/guestCode/getPromotionFriendsList',
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

/** 查询裂变大师人员列表 导购管理后台用于查询裂变大师人员列表.searchMap必须带有guestCodeId参数 POST /activity/guestCode/getPromotionListByGuestCodeId */
export async function getPromotionListByGuestCodeIdUsingPOST(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseGuideCodePromotionDTO>(
    '/activity/guestCode/getPromotionListByGuestCodeId',
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

/** 裂变大师活动分析：获取导购的裂变大师明细 获取导购的裂变大师明细 POST /activity/guestCode/getPromotionMasterInfoList */
export async function getPromotionMasterInfoListUsingPOST(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseGuestCodePromotionMasterDTO>(
    '/activity/guestCode/getPromotionMasterInfoList',
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

/** 裂变大师人员列表导出 POST /activity/guestCode/promotionListExport */
export async function promotionListExportUsingPOST(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<any>('/activity/guestCode/promotionListExport', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 当前达标总人数明细导出 POST /activity/guestCode/reachStandardExport */
export async function reachStandardExportUsingPOST(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<any>('/activity/guestCode/reachStandardExport', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 保存更新裂变大师活动 导购管理后台用于保存更新裂变大师活动. POST /activity/guestCode/saveOrUpdate */
export async function saveOrUpdateGuestCodeActivityUsingPOST(
  body: API.GuestCodeActivityQuery,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResult>('/activity/guestCode/saveOrUpdate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
