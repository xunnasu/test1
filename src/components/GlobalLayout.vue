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
          C2C运营管理平台 {{ name }}
        </el-col>
        <el-col :span="12" class="info-box">
          <el-space :size="25">
            <span>用户名：username</span>
            <el-button type="text" @click="handlePwd"
              >修改密码{{ isShow }}</el-button
            >
            <el-button type="text">退出</el-button>
          </el-space>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside style="width: auto !important">
        <PageSider />
      </el-aside>
      <el-main>
        <slot />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import PageSider from "./PageSider";
import { ref, toRefs, reactive, getCurrentInstance, onMounted } from "vue";
name: "GlobalLayout";
export default {
  components: {
    PageSider,
  },
  setup() {
    const name = ref(import.meta.env.VITE_NAME);
    const state = reactive({
      isShow: false,
      isCollapse: false,
    });
    const handlePwd = () => {
      state.isShow = !state.isShow;
    };
    return {
      name,
      handlePwd,
      ...toRefs(state),
    };
  },
};
</script>

<style scoped lang="less">
.el-header {
  background: url("@/assets/header-bg.png") no-repeat;
  line-height: 60px;
  color: #fff;
  .logo-box,
  .info-box {
    display: flex;
    align-items: center;
  }
  .logo-box {
    font-size: 22px;
    font-weight: 500;
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
  background-color: #fff;
  color: #333;
  padding: 15px;
  max-height: calc(100vh - 60px);
  overflow-y: scroll;
  padding: 0 15px 15px;
  .breadcrunb-box {
    position: sticky;
    top: 0px;
    z-index: 200;
    background: #fff;
    display: flex;
    align-items: center;
    .el-icon-s-fold,
    .el-icon-s-unfold {
      margin-right: 10px;
    }
  }
}
</style>
