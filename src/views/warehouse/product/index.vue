<!--
 * @Author: navalercon
 * @Date: 2023-02-14 14:16:23
 * @LastEditors: navalercon
 * @LastEditTime: 2023-02-14 17:34:45
 * @Description: 
-->
<template>
  <section>
    <main class="table">
      <el-table :data="tablesData">
        <el-table-column prop="id" label="ID"></el-table-column>
        <el-table-column prop="name" label="名称"></el-table-column>
        <el-table-column prop="num" label="数量"></el-table-column>
        <el-table-column prop="code" label="Code"></el-table-column>
        <el-table-column label="操作" width="300">
          <template #default="scope">
            <el-button type="primary" @click="showDialog('create')">新增</el-button>
            <el-button type="warning" >编辑</el-button>
            <el-popconfirm title="确认要删除吗">
              <template #reference>
                <el-button type="danger">删除</el-button>
              </template>
            </el-popconfirm>
          </template>
        </el-table-column>
      </el-table>
      <el-dialog 
        v-model="flag" 
        :title="type==='update'?'update':'create'"
      >
        <section>
          <el-form :model="formValue">
            <el-form-item label="名称">
              <el-input placeholder="请输入名称" v-model="formValue.name" type="text" />
            </el-form-item>
            <el-form-item label="数量">
              <el-input placeholder="请输入数量" v-model="formValue.num" type="number" />
            </el-form-item>
            <el-form-item label="Code">
              <el-input placeholder="请输入Code" v-model="formValue.code" type="text" />
            </el-form-item>
            <el-form-item>
              <el-button>确认</el-button>
            </el-form-item>
          </el-form>
        </section>
      </el-dialog>
    </main>
  </section>
</template>

<script lang="ts" setup name="Product">
import { obtainProduct } from "@/api";
import { Product } from "@/types";
import { onMounted, reactive, ref, shallowRef } from "vue";

const tablesData = shallowRef<Product[]>([]);

const flag = ref<boolean>(false);

const type = ref<'update' | 'create'>('update')

const formValue: Pick<Product, 'name' | 'num' | 'code'> = reactive<Pick<Product, 'name' | 'num' | 'code'>>({
  name: '',
  num: 0,
  code: '',
})

const showDialog = (typeValue: 'update' | 'create', data?: Product) => {
  type.value = typeValue
  formValue.name = ''
  formValue.num = 0
  formValue.code = ''
  if (data) {
    formValue.name = data.name
    formValue.num = data.num
    formValue.code = data.code
  }
}

const submitAction = () => {
  if (type.value === 'create') {
    tablesData.value.push({
      id: parseInt(Math.random() * 10000 + ''),
      name: formValue.name,
      num: formValue.num,
      code: formValue.code
    })
  }
}

onMounted(async () => {
  const res = await obtainProduct();

  console.log(res);

  tablesData.value = res;
});
</script>

<style lang="less" scoped>
@import '@/styles/tables.less';
</style>
