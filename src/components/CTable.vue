<template>
  <el-table border :data="tableData" style="width: 100%">
    <el-table-column
      align="center"
      label="序号"
      width="300"
      :resizable="false"
      type="index"
      :index="indexMethod"
    >
    </el-table-column>
    <template v-for="(item, index) in colums" :key="index">
      <el-table-column
        v-if="item.show != false"
        :prop="item.prop"
        :key="index"
        :label="item.label"
        :align="item.align ? item.align : 'center'"
        :widht="item.width"
      >
      </el-table-column>
    </template>
    <slot name="table_oper"></slot>
    <el-pagination
     @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      style="text-align: left;margin:20px 0;"
      :current-page="pager.pageNo"
      :page-size="pager.limit"
      :page-sizes="pager.sizes"
      :total="pager.total"
      layout="total, sizes, prev, pager, next, jumper"
    >
    </el-pagination>
  </el-table>
</template>
<script>
import { reactive, toRefs } from "vue";

export default {
  props: {
    //表单数据
    tableData: {
      type: Array,
    },
    columns:{
        type:Array
    },
    pager:{
        type:Object
    }
  },
  setup() {},
};
</script>
