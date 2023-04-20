// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** addSpeech GET /Guide/speech/addSpeech */
export async function addSpeechUsingGET(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/Guide/speech/addSpeech', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** addSpeech PUT /Guide/speech/addSpeech */
export async function addSpeechUsingPUT(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/Guide/speech/addSpeech', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** addSpeech POST /Guide/speech/addSpeech */
export async function addSpeechUsingPOST(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/Guide/speech/addSpeech', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** addSpeech DELETE /Guide/speech/addSpeech */
export async function addSpeechUsingDELETE(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/Guide/speech/addSpeech', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** addSpeech PATCH /Guide/speech/addSpeech */
export async function addSpeechUsingPATCH(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/Guide/speech/addSpeech', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** adjustment GET /Guide/speech/adjustmentOrder */
export async function adjustmentUsingGET(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<any>('/Guide/speech/adjustmentOrder', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** adjustment PUT /Guide/speech/adjustmentOrder */
export async function adjustmentUsingPUT(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<any>('/Guide/speech/adjustmentOrder', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** adjustment POST /Guide/speech/adjustmentOrder */
export async function adjustmentUsingPOST(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<any>('/Guide/speech/adjustmentOrder', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** adjustment DELETE /Guide/speech/adjustmentOrder */
export async function adjustmentUsingDELETE(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<any>('/Guide/speech/adjustmentOrder', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** adjustment PATCH /Guide/speech/adjustmentOrder */
export async function adjustmentUsingPATCH(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<any>('/Guide/speech/adjustmentOrder', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** delete GET /Guide/speech/delete */
export async function deleteUsingGET4(body: Record<string, any>, options?: { [key: string]: any }) {
  return request<API.CommonResult>('/Guide/speech/delete', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** delete PUT /Guide/speech/delete */
export async function deleteUsingPUT2(body: Record<string, any>, options?: { [key: string]: any }) {
  return request<API.CommonResult>('/Guide/speech/delete', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** delete POST /Guide/speech/delete */
export async function deleteUsingPOST7(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/Guide/speech/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** delete DELETE /Guide/speech/delete */
export async function deleteUsingDELETE2(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/Guide/speech/delete', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** delete PATCH /Guide/speech/delete */
export async function deleteUsingPATCH2(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/Guide/speech/delete', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteSub GET /Guide/speech/deleteSub */
export async function deleteSubUsingGET(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/Guide/speech/deleteSub', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteSub PUT /Guide/speech/deleteSub */
export async function deleteSubUsingPUT(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/Guide/speech/deleteSub', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteSub POST /Guide/speech/deleteSub */
export async function deleteSubUsingPOST(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/Guide/speech/deleteSub', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteSub DELETE /Guide/speech/deleteSub */
export async function deleteSubUsingDELETE(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/Guide/speech/deleteSub', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteSub PATCH /Guide/speech/deleteSub */
export async function deleteSubUsingPATCH(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<API.CommonResult>('/Guide/speech/deleteSub', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findList GET /Guide/speech/findList */
export async function findListUsingGET11(body: API.TableRequest, options?: { [key: string]: any }) {
  return request<API.TableResponseRecord>('/Guide/speech/findList', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findList PUT /Guide/speech/findList */
export async function findListUsingPUT11(body: API.TableRequest, options?: { [key: string]: any }) {
  return request<API.TableResponseRecord>('/Guide/speech/findList', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findList POST /Guide/speech/findList */
export async function findListUsingPOST15(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseRecord>('/Guide/speech/findList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findList DELETE /Guide/speech/findList */
export async function findListUsingDELETE11(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseRecord>('/Guide/speech/findList', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findList PATCH /Guide/speech/findList */
export async function findListUsingPATCH11(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseRecord>('/Guide/speech/findList', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getSubSpeech GET /Guide/speech/getSubSpeech */
export async function getSubSpeechUsingGET(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/Guide/speech/getSubSpeech', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getSubSpeech PUT /Guide/speech/getSubSpeech */
export async function getSubSpeechUsingPUT(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/Guide/speech/getSubSpeech', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getSubSpeech POST /Guide/speech/getSubSpeech */
export async function getSubSpeechUsingPOST(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/Guide/speech/getSubSpeech', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getSubSpeech DELETE /Guide/speech/getSubSpeech */
export async function getSubSpeechUsingDELETE(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/Guide/speech/getSubSpeech', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getSubSpeech PATCH /Guide/speech/getSubSpeech */
export async function getSubSpeechUsingPATCH(
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/Guide/speech/getSubSpeech', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
