<!--
 * @Author: your name
 * @Date: 2021-03-29 13:47:33
 * @LastEditTime: 2021-04-01 22:48:00
 * @LastEditors: suxunna
 * @Description: In User Settings Edit
 * @FilePath: \cloud-services-pc\src\pages\PolicyManagement\policyDetails.vue
-->
<template>
  <div class="tableDataBox" >
    <div 
      v-for="table in tableGroup" 
      :key="table.value" >
      <div>{{table.label}}</div>
      <el-table 
        :data="table.tableData" 
        border 
        style="width: 100%;">
        <el-table-column  
          v-for="col in table.tableColums" 
          :key="col.prop" 
          v-bind="col" 
        ></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "PolicyManagement",
  props:{
    tableGroup:{
      type:Array,
      required: true
    },
  }
};
</script>

<style scoped lang="less">
.tableDataBox {
  width: 100%;
}
</style>
