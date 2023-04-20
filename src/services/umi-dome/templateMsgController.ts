// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** sendTemplateMsg GET /guide/outside.templatemsg/sendTemplateMsg */
export async function sendTemplateMsgUsingGET(
  body: API.TemplateMsgContentVo,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/outside.templatemsg/sendTemplateMsg', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** sendTemplateMsg PUT /guide/outside.templatemsg/sendTemplateMsg */
export async function sendTemplateMsgUsingPUT(
  body: API.TemplateMsgContentVo,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/outside.templatemsg/sendTemplateMsg', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** sendTemplateMsg POST /guide/outside.templatemsg/sendTemplateMsg */
export async function sendTemplateMsgUsingPOST(
  body: API.TemplateMsgContentVo,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/outside.templatemsg/sendTemplateMsg', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** sendTemplateMsg DELETE /guide/outside.templatemsg/sendTemplateMsg */
export async function sendTemplateMsgUsingDELETE(
  body: API.TemplateMsgContentVo,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/outside.templatemsg/sendTemplateMsg', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** sendTemplateMsg PATCH /guide/outside.templatemsg/sendTemplateMsg */
export async function sendTemplateMsgUsingPATCH(
  body: API.TemplateMsgContentVo,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/guide/outside.templatemsg/sendTemplateMsg', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
