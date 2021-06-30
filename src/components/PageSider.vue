<!--
 * @Author: dafengxiang
 * @Date: 2021-03-25 21:59:13
 * @LastEditTime: 2021-03-26 09:02:30
 * @LastEditors: dafengxiang
 * @Description: 导航栏组件
-->
<template>
  <div :style="{ width: 'auto', display: 'flex', 'flex-direction': 'column' }">
    <el-menu
      :style="{
        height: 'calc(100vh - 100px)',
        overflowY: 'auto',
        overflowX: 'hidden',
      }"
      :uniqueOpened="true"
      :collapse="isCollapse"
      :router="true"
      default-active="/rolemanagement"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="/rolemanagement">
        <i class="el-icon-thumb"></i>
        <template #title>角色管理</template>
      </el-menu-item>
      <el-menu-item index="/usermanagement">
        <i class="el-icon-user"></i>
        <template #title>用户管理</template>
      </el-menu-item>
      <el-menu-item index="/channelmanagement">
        <i class="el-icon-s-data"></i>
        <template #title>渠道管理</template>
      </el-menu-item>
      <el-menu-item index="/policymanagement">
        <i class="el-icon-s-order"></i>
        <template #title>保单管理</template>
      </el-menu-item>
      <el-menu-item index="/settlementmanagement">
        <i class="el-icon-coin"></i>
        <template #title>结算管理</template>
      </el-menu-item>
      <el-menu-item index="/productmanagement">
        <i class="el-icon-copy-document"></i>
        <template #title>产品管理</template>
      </el-menu-item>
    </el-menu>
    <div
      style="
        text-align: center;
        background: #303133;
        padding: 10px;
        margin-right: 1px;
      "
    >
      <el-switch
        v-model="isCollapse"
        active-color="#666"
        inactive-color="#ffd04b"
      ></el-switch>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs,ref } from "vue";
// import { useRoute } from 'vue-router'

name: "PageSider";
export default {
  setup() {
      // const route = useRoute()
    const isCollapse = ref(false)
    return {
      isCollapse,
    };
  },
};
</script>
