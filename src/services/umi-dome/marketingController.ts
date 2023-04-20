// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** findMallMarketingList GET /guide/marketing/findMallMarketingList */
export async function findMallMarketingListUsingGET(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/marketing/findMallMarketingList', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findMallMarketingList PUT /guide/marketing/findMallMarketingList */
export async function findMallMarketingListUsingPUT(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/marketing/findMallMarketingList', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findMallMarketingList POST /guide/marketing/findMallMarketingList */
export async function findMallMarketingListUsingPOST(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/marketing/findMallMarketingList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findMallMarketingList DELETE /guide/marketing/findMallMarketingList */
export async function findMallMarketingListUsingDELETE(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/marketing/findMallMarketingList', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findMallMarketingList PATCH /guide/marketing/findMallMarketingList */
export async function findMallMarketingListUsingPATCH(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/marketing/findMallMarketingList', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
