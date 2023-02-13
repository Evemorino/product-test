/*
 * @Author: navalercon
 * @Date: 2023-02-13 11:30:06
 * @LastEditors: navalercon
 * @LastEditTime: 2023-02-13 11:37:03
 * @Description:
 */
import { defineComponent } from "vue";
import styles from "./dashboard.less";

export default defineComponent({
  name: "Dash-Board",
  setup() {
    return () => <section class={styles.page}></section>;
  },
});
