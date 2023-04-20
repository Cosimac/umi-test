// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 追加接收人 POST /open/wework/groupMessage/append */
export async function appendReceiversUsingPOST(
  body: API.AppendReceiverRequest,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultobject>('/open/wework/groupMessage/append', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 创建群发消息 1. 创建群发消息<br>2. 分批追加接收人<br>3. 发送群发消息<br>附件字段根据附件类型不同，含义不同。提交url即可，在发送前会将指定url上传到企业微信临时文件 POST /open/wework/groupMessage/create */
export async function createUsingPOST5(
  body: API.CreateGroupMessageRequest,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultMessageIdVo>('/open/wework/groupMessage/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 创建群发消息 一次性创建群发消息，接收人不能超过1000个，超过1000人请用create->append->send组合发送 POST /open/wework/groupMessage/createSimple */
export async function createSimpleUsingPOST(
  body: API.CreateSimpleGroupMessageRequest,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultMessageIdVo>('/open/wework/groupMessage/createSimple', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 发送群发消息 如果创建群发消息时设置了发送时间，且发送时间大于当前时间，则等到指定时间才会进行发送。否则立即发送 POST /open/wework/groupMessage/send */
export async function sendUsingPOST(
  body: API.SendMessageRequest,
  options?: { [key: string]: any },
) {
  return request<API.BeanCommonResultobject>('/open/wework/groupMessage/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
