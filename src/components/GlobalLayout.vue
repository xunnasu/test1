<!--
 * @Author: dafengxiang
 * @Date: 2021-03-25 20:57:18
 * @LastEditTime: 2021-03-26 11:30:08
 * @LastEditors: dafengxiang
 * @Description: 全局布局
-->
<template>
  <el-container>
    <el-header>
      <el-row>
        <el-col :span="12" class="logo-box">
          <img src="../assets/logo.png" alt="加载失败" />
          运营平台 {{ name }}
        </el-col>
        <el-col :span="12" class="info-box">
          <el-space :size="25">
            <span>用户名：username</span>
            <el-button type="text" @click="handlePwd">修改密码{{isShow}}</el-button>
            <el-button type="text">退出</el-button>
          </el-space>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside style="width: auto !important;">
        <PageSider />
      </el-aside>
      <el-main>
        <slot />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import PageSider from './PageSider'
import { ref } from 'vue'
name: 'GlobalLayout'
const name = ref(import.meta.env.VITE_NAME)
const isShow = ref(false);
const handlePwd = () => {
  isShow.value = !isShow.value
}
</script>

<style scoped lang="less">
.el-header {
  background-color: #b3c0d1;
  line-height: 60px;
  .logo-box,
  .info-box {
    display: flex;
    align-items: center;
  }
  .logo-box {
    font-size: 24px;
    font-weight: 600;
    img {
      height: 40px;
      margin-right: 20px;
    }
  }
  .info-box {
    justify-content: flex-end;
  }
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
</style>