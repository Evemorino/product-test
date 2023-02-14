<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <el-aside>
    <el-menu default-active="2" class="el-menu-vertical-demo">
      <el-sub-menu
        v-for="value in menus"
        :key="value.pid"
        :index="value.router"
      >
        <template #title>{{ value.name }}</template>
        <div v-if="value.children && value.children.length > 0">
          <el-menu-item
            v-for="child in value.children"
            :key="child.pid"
            :index="child.component ? child.component : child.router"
            v-show="child.visible"
            @click="handleOpen(child)"
          >
            {{ child.name }}
          </el-menu-item>
        </div>
      </el-sub-menu>
    </el-menu>
  </el-aside>
</template>

<script lang="ts" setup name="asides">
import { obtainMenu } from "@/api";
import { onMounted, shallowRef } from "vue";
import type { Menu, MenuChild } from "@/types";
import { useRouter } from "vue-router";

const router = useRouter();

const menus = shallowRef<Array<Menu>>([]);

const handleOpen = (child: MenuChild) => {
  if (child.router) {
    router.push(child.router);
  } else {
    router.push("/" + child.component);
  }
};

onMounted(async () => {
  const res = await obtainMenu();

  menus.value = res;

  menus.value.sort((a, b) => {
    return a.sort - b.sort;
  });
  console.log(menus.value);
});
</script>

<style lang="less" scoped></style>
