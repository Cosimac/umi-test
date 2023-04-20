// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 判断是否首次进入,返回结果若小于0,则表示是首次进入 GET /intelligent/view/judgeFirstOpen */
export async function judgeFirstOpenUsingGET(options?: { [key: string]: any }) {
  return request<API.BeanCommonResultlong>('/intelligent/view/judgeFirstOpen', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取智能打标好友数据 POST /intelligent/view/queryExternal */
export async function queryExternalContactTableUsingPOST(
  body: API.BeanTableRequestzhinengdabiaohaoyouliebiaoqingqiushiti,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultTableResponsezhinengdabiaohaoyouliebiaofanhuishiti>(
    '/intelligent/view/queryExternal',
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

/** 根据场景id获取对应的任务 POST /intelligent/view/ruleList */
export async function ruleListUsingPOST(
  body: API.BeanTableRequestzhinengdabiaoguizeliebiaoqingqiushiti,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultTableResponsedabiaorenwuliebiaofanhuishiti>(
    '/intelligent/view/ruleList',
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

/** 场景树状列表 GET /intelligent/view/sceneList */
export async function sceneListUsingGET(options?: { [key: string]: any }) {
  return request<API.BeanCommonResultListMarkSceneTreeNode>('/intelligent/view/sceneList', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取任务列表标签数据 GET /intelligent/view/tagList */
export async function tagListUsingGET(options?: { [key: string]: any }) {
  return request<API.BeanCommonResultListbiaoqianzhishiti>('/intelligent/view/tagList', {
    method: 'GET',
    ...(options || {}),
  });
}
