<!--
 * @Author: navalercon
 * @Date: 2023-02-14 14:16:23
 * @LastEditors: navalercon
 * @LastEditTime: 2023-02-14 14:57:04
 * @Description: 
-->
<template>
  <section>
    <main class="table">
      <el-table :data="tablesData">
        <el-table-column prop="id" label="ID"></el-table-column>
        <el-table-column prop="id_product" label="产品ID"></el-table-column>
        <el-table-column prop="name" label="名称"></el-table-column>
        <el-table-column prop="num" label="数量"></el-table-column>
        <el-table-column prop="CreateTime" label="创建时间"></el-table-column>
        <el-table-column prop="code" label="Code"></el-table-column>
        <el-table-column label="操作" width="300">
          <template #default>
            <el-button type="primary">新增</el-button>
            <el-button type="warning">编辑</el-button>
            <el-button type="danger">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </main>
  </section>
</template>

<script lang="ts" setup name="Enter">
import { obtainEnter } from "@/api";
import { Enter } from "@/types";
import { onMounted, shallowRef } from "vue";

const tablesData = shallowRef<Enter[]>([]);

onMounted(async () => {
  const res = await obtainEnter();

  console.log(res);

  tablesData.value = res;
});
</script>

<style lang="less" scoped>
@import '@/styles/tables.less';
</style>
