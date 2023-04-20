// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 删除微信二维码海报配置 导购管理后台用于删除微信二维码海报配置 GET /weChat/qrCodePlacard/deleteByConfigId */
export async function deleteByConfigIdUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteByConfigIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultWeChatQrCodePlacardConfigDTO>(
    '/weChat/qrCodePlacard/deleteByConfigId',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 分页查询二维码海报配置列表 导购管理后台用于分页查询二维码海报配置列表 POST /weChat/qrCodePlacard/findList */
export async function findListUsingPOST20(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseBaseWeChatQrCodePlacardConfigDTO>(
    '/weChat/qrCodePlacard/findList',
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

/** 查询微信二维码海报配置 导购管理后台用于查询微信二维码海报配置 GET /weChat/qrCodePlacard/getByConfigId */
export async function getByConfigIdUsingGET1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getByConfigIdUsingGET1Params,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultWeChatQrCodePlacardConfigDTO>(
    '/weChat/qrCodePlacard/getByConfigId',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 获取公众号标签,此接口返回的标签id直接为wx的标签id,不是label表对应标签的id 获取公众号标签 POST /weChat/qrCodePlacard/getGuideTagList */
export async function getGuideTagListUsingPOST(body: string, options?: { [key: string]: any }) {
  return request<API.BeanCommonResultListMpTagDTO>('/weChat/qrCodePlacard/getGuideTagList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取公众号 导购管理后台用于获取公众号 GET /weChat/qrCodePlacard/getWeChatOfficialAccounts */
export async function getWeChatOfficialAccountsUsingGET(options?: { [key: string]: any }) {
  return request<API.BeanCommonResultListgongzhonghaoxinxi>(
    '/weChat/qrCodePlacard/getWeChatOfficialAccounts',
    {
      method: 'GET',
      ...(options || {}),
    },
  );
}

/** 保存更新微信二维码海报 导购管理后台用于保存更新微信二维码海报 POST /weChat/qrCodePlacard/saveOrUpdate */
export async function saveOrUpdateUsingPOST6(
  body: API.WeChatQrCodePlacardQuery,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResult>('/weChat/qrCodePlacard/saveOrUpdate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
