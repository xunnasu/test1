<!--
 * @Author: suxunna
 * @Date: 2021-03-26 19:13:49
 * @LastEditTime: 2021-03-26 23:17:53
 * @LastEditors: dafengxiang
 * @Description: 登录页面
-->
<template>
 <el-row class="container" type="flex" align="middle" justify="end">
   <el-col 
      class="input-box"
      :xs="{ span: 18, pull:3}"
      :lg="{ span: 7, pull: 2}"
      style="max-width: 400px;">
      <span class="title">c2c运营管理平台登录</span>
      <el-form
        ref="ruleForm"
        :model="form"
        :rules="rules"
        style="width: 100%; margin-top: 20px;">
        <el-form-item prop="userCode">
          <el-input placeholder="请输入帐号" v-model.trim="form.userCode"></el-input>
        </el-form-item>
        <el-form-item prop="userPassword">
          <el-input placeholder="请输入密码" v-model.trim="form.userPassword" show-password/>
        </el-form-item>
         <el-form-item>
          <el-button  type="primary" block size="large" :loading="isLoading" @click="submitForm()">登录</el-button>
          <changePwd v-model="isShow"></changePwd>
        </el-form-item>
      </el-form>
   </el-col>
  </el-row>
</template>

<script>
import { useRouter } from 'vue-router'
import changePwd from '../components/changePwd'
import { reactive, toRefs } from 'vue'
export default {
  components:{
    changePwd
  },
  setup(){
    const state = reactive({
      isShow:false,
      value:1,
    })
    const handleChange = (val) =>{
      state.value = val
    }
    return {
      ...toRefs(state),
      handleChange
    }
  },
  data(){
    return {
      isLoading:false,
      form:{
        userCode:'',
        userPassword:''
      },
       rules: {
        userCode: { required: true, message: '请输入工号', trigger: 'blur' },
        userPassword: {
          required: true,
          message: '请输入密码',
          trigger: 'blur'
        }
      }
    }
  },
}
</script>

<style lang="less" scoped>
.container{
  background: url('../assets/bg.png');
  width:100vw;
  height:100vh;
  background-size: cover;
  &> .input-box{
    background: #fff;
    border-radius: 10px;
    box-sizing: border-box;
    padding: 40px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    &> span{
      padding: 5px;
      font-size: 16px;
      color: #333;
       &.title {
        font-size: 28px;
        font-weight: 800;
      }
      &.gray {
        color: #ccc;
      }
    }
  }
}
.el-button{
  width:100%;
  margin-top:5px;
}
</style>