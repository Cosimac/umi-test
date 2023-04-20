// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** findList GET /guide/rewardrule/findList */
export async function findListUsingGET8(
  body: API.TableRequestVoShopFindVo,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/guide/rewardrule/findList', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findList PUT /guide/rewardrule/findList */
export async function findListUsingPUT8(
  body: API.TableRequestVoShopFindVo,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/guide/rewardrule/findList', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findList POST /guide/rewardrule/findList */
export async function findListUsingPOST12(
  body: API.TableRequestVoShopFindVo,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/guide/rewardrule/findList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findList DELETE /guide/rewardrule/findList */
export async function findListUsingDELETE8(
  body: API.TableRequestVoShopFindVo,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/guide/rewardrule/findList', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findList PATCH /guide/rewardrule/findList */
export async function findListUsingPATCH8(
  body: API.TableRequestVoShopFindVo,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/guide/rewardrule/findList', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** save GET /guide/rewardrule/save */
export async function saveUsingGET2(body: API.RewardRuleVo, options?: { [key: string]: any }) {
  return request<Record<string, any>>('/guide/rewardrule/save', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** save PUT /guide/rewardrule/save */
export async function saveUsingPUT2(body: API.RewardRuleVo, options?: { [key: string]: any }) {
  return request<Record<string, any>>('/guide/rewardrule/save', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** save POST /guide/rewardrule/save */
export async function saveUsingPOST5(body: API.RewardRuleVo, options?: { [key: string]: any }) {
  return request<Record<string, any>>('/guide/rewardrule/save', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** save DELETE /guide/rewardrule/save */
export async function saveUsingDELETE2(body: API.RewardRuleVo, options?: { [key: string]: any }) {
  return request<Record<string, any>>('/guide/rewardrule/save', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** save PATCH /guide/rewardrule/save */
export async function saveUsingPATCH2(body: API.RewardRuleVo, options?: { [key: string]: any }) {
  return request<Record<string, any>>('/guide/rewardrule/save', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
