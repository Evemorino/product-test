/*
 * @Author: navalercon
 * @Date: 2023-02-14 08:23:19
 * @LastEditors: navalercon
 * @LastEditTime: 2023-02-14 14:27:26
 * @Description:
 */
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/warehouse",
    },
    {
      path: "/warehouse",
      redirect: "/warehouse/product",
      // component: () => import("@/views/dashboard/index.tsx"),
      children: [
        {
          name: "warehouse-product",
          path: "/warehouse/product",
          component: () => import("@/views/warehouse/product/index.vue"),
        },
        {
          name: "warehouse-enter",
          path: "/warehouse/enter",
          component: () => import("@/views/warehouse/enter/index.vue"),
        },
        {
          name: "warehouse-out",
          path: "/warehouse/out",
          component: () => import("@/views/warehouse/out/index.vue"),
        },
      ],
    },
  ],
});

export default router;
