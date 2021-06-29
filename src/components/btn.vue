<template>
  <div>
    <button  @click="handleClick">点击</button>
    <p>{{value}}</p>
  </div>
  
</template>

<script>
export default {
  props:{
    value:{
       type:Number,
    }
  },
  emits:['update:value'],
  methods:{
    handleClick(){
      this.$emit('update:value',this.value + 1)
    }
  }
}
</script>

<style>

</style>