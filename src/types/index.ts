/*
 * @Author: navalercon
 * @Date: 2023-02-13 11:39:36
 * @LastEditors: navalercon
 * @LastEditTime: 2023-02-13 11:54:19
 * @Description:
 */
export type Product = {
  id: number;
  name: string;
  code: string;
  num: number;
};

export type Inventory = {
  id_product: number;
  CreateTime: string;
} & Product;

export type Enter = Inventory;

export type Out = Inventory;

type MenuChild = {
  id: number;
  pid: number;
  name: string;
  code: string;
  router: string;
  visible: boolean;
  sort: number;
};

export type Menu = {
  children: Array<MenuChild>;
} & MenuChild;
