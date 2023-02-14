<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <el-container>
    <asides />
    <section class="page">
      <el-header>
        <div class="header">库存管理系统</div>
      </el-header>
      <main class="main">
        <router-view v-slot="{ Component }">
          <transition mode="out-in" appear>
            <keep-alive>
              <component :is="Component" />
            </keep-alive>
          </transition>
        </router-view>
      </main>
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
  background-color: rgba(230, 230, 230, 0.5);
}
.page {
  height: 100vh;
  width: calc(100% - 200px);
  position: relative;
  overflow: hidden;
  z-index: 0;
}

.main {
  width: 100%;
  height: calc(100% - 40px);
  position: relative;
  z-index: 0;
  &::before {
    position: relative;
    display: block;
    content: " ";
    width: 100%;
    height: 5px;
  }
}

:deep(.el-header) {
  padding: 0;
  height: 40px;
  position: relative;
  z-index: 0;
  background-color: rgba(230, 230, 230, 0.1);
  // background-color: bisque;
  // box-shadow: 0 0 1px 1px rgb(230, 230, 230);
}

.header {
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
}
</style>
