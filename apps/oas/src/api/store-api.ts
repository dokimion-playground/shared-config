// import { axiosInstance, PromiseAxiosResponse } from '@/worker/commands/config/apiInstance';
// import {
//   Order,
// } from '../model';

// const deleteOrderAxios = ({
//   orderId,
// }: {
//   orderId: number;
// }): PromiseAxiosResponse<void> => {
//   const localVarPath = `/store/order/{orderId}`
//     .replace(`{${"orderId"}}`, encodeURIComponent(String(orderId)));
//   return axiosInstance._delete(
//   localVarPath,
//   {
//     params: {
//       orderId,
//     }
//   })
// };

// const getInventoryAxios = ({
// }: {
// }): PromiseAxiosResponse<{ [key: string]: number; }> => {
//   const localVarPath = `/store/inventory`;
//   return axiosInstance.get(
//   localVarPath,
//   {
//     params: {
//     }
//   })
// };

// const getOrderByIdAxios = ({
//   orderId,
// }: {
//   orderId: number;
// }): PromiseAxiosResponse<Order> => {
//   const localVarPath = `/store/order/{orderId}`
//     .replace(`{${"orderId"}}`, encodeURIComponent(String(orderId)));
//   return axiosInstance.get(
//   localVarPath,
//   {
//     params: {
//       orderId,
//     }
//   })
// };

// const placeOrderAxios = ({
//   order,
// }: {
//   order?: Order;
// }): PromiseAxiosResponse<Order> => {
//   const localVarPath = `/store/order`;
//   return axiosInstance.post(
//   localVarPath,
//   {
//     params: {
//       order,
//     }
//   })
// };

// export {
//   deleteOrderAxios,
//   getInventoryAxios,
//   getOrderByIdAxios,
//   placeOrderAxios,
// };
