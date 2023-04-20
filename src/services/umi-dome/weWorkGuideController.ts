// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** findGuideList GET /wework/guide/findGuideList */
export async function findGuideListUsingGET(
  body: API.daogouyuangongliebiaovo,
  options?: { [key: string]: any },
) {
  return request<API.TableResponse>('/wework/guide/findGuideList', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findGuideList PUT /wework/guide/findGuideList */
export async function findGuideListUsingPUT(
  body: API.daogouyuangongliebiaovo,
  options?: { [key: string]: any },
) {
  return request<API.TableResponse>('/wework/guide/findGuideList', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findGuideList POST /wework/guide/findGuideList */
export async function findGuideListUsingPOST1(
  body: API.daogouyuangongliebiaovo,
  options?: { [key: string]: any },
) {
  return request<API.TableResponse>('/wework/guide/findGuideList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findGuideList DELETE /wework/guide/findGuideList */
export async function findGuideListUsingDELETE(
  body: API.daogouyuangongliebiaovo,
  options?: { [key: string]: any },
) {
  return request<API.TableResponse>('/wework/guide/findGuideList', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findGuideList PATCH /wework/guide/findGuideList */
export async function findGuideListUsingPATCH(
  body: API.daogouyuangongliebiaovo,
  options?: { [key: string]: any },
) {
  return request<API.TableResponse>('/wework/guide/findGuideList', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
