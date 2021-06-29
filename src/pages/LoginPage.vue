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
      <span class="title">云服务平台登录</span>
      <span class="gray">Cloud service platform login</span>
      <el-form
        ref="ruleForm"
        :model="form"
        :rules="rules"
        style="width: 100%; margin-top: 20px;">
        <el-form-item prop="userCode">
          <el-input placeholder="请输入工号" v-model.trim="form.userCode"></el-input>
        </el-form-item>
        <el-form-item prop="userPassword">
          <el-input placeholder="请输入密码" v-model.trim="form.userPassword" show-password/>
        </el-form-item>
         <el-form-item>
          <el-button  type="primary" block size="large" :loading="isLoading" @click="submitForm()">登录</el-button>
          <div @click="handleShow">修改密码</div>
          <changePwd v-model="isShow"></changePwd>
          <!-- <btn :value="isValue" @change="handleChange"></btn> -->
          <btn v-model:value="value"></btn>
        </el-form-item>
      </el-form>
   </el-col>
  </el-row>
</template>

<script>
import { useRouter } from 'vue-router'
import changePwd from '../components/changePwd'
import btn from '../components/btn'
export default {
  components:{
    changePwd,btn
  },
  data(){
    return {
      isShow:false,
      value:1,
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
  methods:{
    handleShow(){
      this.isShow = !this.isShow
    },
    handleUpdate(val){
      this.isShow = val
      console.log('12 :>> ', 12);
    },
    handleChange(val){
      this.value = val
    }
  },
  setup(){
    const router = useRouter()
    const submitForm = () =>{
      router.replace({ path: '/' })
    }
    //setup函数中定义的变量和方法最后都是需要return出去的不然无法再模板中使用
    return {
      submitForm
    }
  }
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