/*
 * @Author: navalercon
 * @Date: 2023-02-13 11:48:53
 * @LastEditors: navalercon
 * @LastEditTime: 2023-02-13 11:49:21
 * @Description:
 */
declare namespace Request {
  type ListParams<T = unknown> = {
    page: number;
    page_size: number;
  } & {
    [P in keyof T]?: T[P];
  };
  interface ListResponseData<T> {
    total: number;
    page: number;
    page_size: number;
    last_page: number;
    list: Array<T>;
  }
}
