/*
 * @Author: navalercon
 * @Date: 2023-02-13 11:30:06
 * @LastEditors: navalercon
 * @LastEditTime: 2023-02-14 08:44:55
 * @Description:
 */
import { defineComponent, shallowRef } from "vue";
import styles from "./index.module.less";
import { obtainEnter } from "@/api";

export default defineComponent({
  name: "WareHouse",
  setup() {
    const res = await obtainEnter();

    const tablesData = shallowRef(Enter);

    return () => <section class={styles.page}></section>;
  },
});
