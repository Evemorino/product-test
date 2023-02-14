<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <el-container>
    <asides />
    <section class="page">
      <router-view v-slot="{ Component }">
        <transition mode="out-in" appear>
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </transition>
      </router-view>
    </section>
  </el-container>
</template>

<script lang="ts" setup name="layout">
import { useRoute } from "vue-router";
import asides from "@/components/asides/index.vue";

const route = useRoute();
</script>

<style lang="less" scoped>
:deep(.el-aside) {
  height: 100vh;
  width: 200px;
  // box-shadow: 0 0 4px 4px rgba(0, 0, 0, 0.3);
  background-color: rgb(230, 230, 230);
}
.page {
  height: 100vh;
  width: calc(100% - 200px);
  position: relative;
  overflow: hidden;
  z-index: 0;
}
</style>
