// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** queryBeDeleteCustomerList POST /wework/lossCustomer/queryBeDeleteCustomerList */
export async function queryBeDeleteCustomerListUsingPOST(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseRecord>('/wework/lossCustomer/queryBeDeleteCustomerList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** queryDeleteCustomerList POST /wework/lossCustomer/queryDeleteCustomerList */
export async function queryDeleteCustomerListUsingPOST(
  body: API.TableRequest,
  options?: { [key: string]: any },
) {
  return request<API.TableResponseRecord>('/wework/lossCustomer/queryDeleteCustomerList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
