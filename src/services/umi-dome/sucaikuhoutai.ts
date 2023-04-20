// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** batchDeleteMaterial POST /guide/material/batchDeleteMaterial */
export async function batchDeleteMaterialUsingPOST(
  body: API.MaterialBatchOpsDTO,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/material/batchDeleteMaterial', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** batchMoveMaterial POST /guide/material/batchMoveMaterial */
export async function batchMoveMaterialUsingPOST(
  body: API.MaterialBatchMoveDTO,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/material/batchMoveMaterial', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** (过期)素材删除 可用批量删除接口代替 {@link #batchDeleteMaterial} POST /guide/material/delete */
export async function deleteUsingPOST4(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/material/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 标签-删除 POST /guide/material/deleteSubdivision */
export async function deleteSubdivisionUsingPOST(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/material/deleteSubdivision', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除指定导购补充素材 POST /guide/material/delScriptCompletionDetailByGuideId */
export async function delScriptCompletionDetailByGuideIdUsingPOST(
  body: API.MaterialCompletionScriptDetailByGuideQuery,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/material/delScriptCompletionDetailByGuideId', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 分组-排序 POST /guide/material/exchangeSort */
export async function exchangeSortUsingPOST(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/material/exchangeSort', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 导出剧本素材自创明细EXCEL 导出剧本素材自创明细EXCEL POST /guide/material/exportMaterialCompletionByExcel */
export async function exportMaterialCompletionByExcelUsingPOST(
  body: API.MaterialCompletionScriptDetailQuery,
  options?: { [key: string]: any },
) {
  return request<any>('/guide/material/exportMaterialCompletionByExcel', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询文件夹列表 POST /guide/material/findDirectoryList */
export async function findDirectoryListUsingPOST(
  body: API.DirectoryGetDTO,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/material/findDirectoryList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** (过期)任务管理 - 新建分享任务 POST /guide/material/findListByBrandId */
export async function findListByBrandIdUsingPOST(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/material/findListByBrandId', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findMaterialList POST /guide/material/findMaterialList */
export async function findMaterialListUsingPOST(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseRecord>('/guide/material/findMaterialList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据素材Id查询五坑位的素材的附件 POST /guide/material/findMaterialListByMaterialId */
export async function findMaterialListByMaterialIdUsingPOST(
  body: API.chaxunsucaifujiancanshu,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/material/findMaterialListByMaterialId', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findMaterialListByShare POST /guide/material/findMaterialListByShare */
export async function findMaterialListByShareUsingPOST(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseRecord>('/guide/material/findMaterialListByShare', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 指定导购补充素材明细 POST /guide/material/findScriptCompletionDetailByGuideId */
export async function findScriptCompletionDetailByGuideIdUsingPOST(
  body: API.MaterialCompletionScriptDetailByGuideQuery,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/material/findScriptCompletionDetailByGuideId', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 剧本素材自创明细报表 POST /guide/material/findScriptCompletionDetailList */
export async function findScriptCompletionDetailListUsingPOST(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseRecord>('/guide/material/findScriptCompletionDetailList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 所有标签查询 POST /guide/material/findSubdivisionAll */
export async function findSubdivisionAllUsingPOST(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/guide/material/findSubdivisionAll', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 标签列表分页查询 POST /guide/material/findSubdivisionList */
export async function findSubdivisionListUsingPOST(
  body: API.TableRequestVoMaterialSubdivisionGetDTO,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/material/findSubdivisionList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取素材创建人信息 POST /guide/material/getCreator */
export async function getCreatorUsingPOST(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultListstring>('/guide/material/getCreator', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询文件夹树 POST /guide/material/getDirectoryTree */
export async function getDirectoryTreeUsingPOST(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/guide/material/getDirectoryTree', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 构建父级文件夹路径 GET /guide/material/getParentPath */
export async function getParentPathUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getParentPathUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/material/getParentPath', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取素材分组最大排序序号 GET /guide/material/getSubdivisionMaxSortNum */
export async function getSubdivisionMaxSortNumUsingGET(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/guide/material/getSubdivisionMaxSortNum', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 查询当前公司方案 GET /guide/material/queryCompanyPlan */
export async function queryCompanyPlanUsingGET(options?: { [key: string]: any }) {
  return request<API.CommonResult>('/guide/material/queryCompanyPlan', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 查询素材详情 GET /guide/material/queryMaterial */
export async function queryMaterialUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.queryMaterialUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/material/queryMaterial', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 保存/更新素材 POST /guide/material/saveMaterial */
export async function saveMaterialUsingPOST(
  body: API.MaterialSaveDTO,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/material/saveMaterial', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** saveOrUpdateDirectory POST /guide/material/saveOrUpdateDirectory */
export async function saveOrUpdateDirectoryUsingPOST(
  body: API.MaterialSaveBaseDTO,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/material/saveOrUpdateDirectory', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 标签新增或编辑 POST /guide/material/saveOrUpdateSubdivision */
export async function saveOrUpdateSubdivisionUsingPOST(
  body: API.MaterialSubdivisionSaveDTO,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/material/saveOrUpdateSubdivision', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 给素材设置标签 POST /guide/material/setSubdivision */
export async function setSubdivisionUsingPOST(
  body: API.MaterialBatchSubdivisionSetDTO,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/material/setSubdivision', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 保存/更新素材 POST /guide/material/updateCurrentStatus */
export async function updateCurrentStatusUsingPOST(
  body: API.MaterialSaveDTO,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/material/updateCurrentStatus', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 素材密码验证 POST /guide/material/verifyPasswd */
export async function verifyPasswdUsingPOST(body: number, options?: { [key: string]: any }) {
  return request<API.CommonResult>('/guide/material/verifyPasswd', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
