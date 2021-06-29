<template>
 <el-dialog
  title="提示"
  :modelValue="modelValue"
  @closed="closed"
  width="30%">
    <el-form-item prop="userCode">
      <el-input placeholder="请输入工号"></el-input>
    </el-form-item>
    <el-form-item prop="userPassword">
      <el-input placeholder="请输入密码"/>
    </el-form-item>
    <el-button @click="closed">取 消</el-button>
    <el-button type="primary" @click="closed">确 定</el-button>
</el-dialog>
</template>
<script >
export default {
  props:{
    modelValue:{
      type:Boolean,
      default:false
    },
    status:{
      type:Boolean,
    }
  },
  emits: ['update:modelValue'],
  // computed: {
  //   visable: {
  //     get() {
  //       return this.modelValue
  //     },
  //     set(val) {
  //       this.$emit('update:modelValue',val)
  //     }
  //   }
  // },
  methods:{
    // dialogVisible(){
    //   this.visable = false
    // },
    closed(){
      this.$emit('update:modelValue',false)
    }
  }
};
</script>
<style lang="less" scoped>
</style>