<!--
 * @Author: navalercon
 * @Date: 2023-02-13 11:03:23
 * @LastEditors: navalercon
 * @LastEditTime: 2023-02-14 08:35:01
 * @Description: 
-->
<template>
  <el-config-provider :locale="zhCn">
    <Layout />
  </el-config-provider>
</template>

<script setup lang="ts">
import zhCn from "element-plus/es/locale/lang/zh-cn";
import Layout from "@/layout/index.vue";
</script>

<style lang="less" scoped></style>
