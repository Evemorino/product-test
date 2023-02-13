<!--
 * @Author: navalercon
 * @Date: 2023-02-13 11:03:23
 * @LastEditors: navalercon
 * @LastEditTime: 2023-02-13 11:29:38
 * @Description: 
-->
<template>
  <el-config-provider :locale="zhCn">
    <routerView v-slot="{ Component }">
      <transition mode="out-in" appear>
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </transition>
    </routerView>
  </el-config-provider>
</template>

<script setup lang="ts">
import zhCn from "element-plus/es/locale/lang/zh-cn";
</script>

<style lang="less" scoped></style>
