<!--
 * @Author: your name
 * @Date: 2021-06-29 16:14:04
 * @LastEditTime: 2021-06-30 09:59:20
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \testNew-c2c-admin\src\components\CTable.vue
-->
<template>
  <el-table border :data="tableData" style="width: 100%" size="mini">
    <el-table-column
      fixed="left"
      align="center"
      label="序号"
      :resizable="false"
      type="index"
      width="100"
      :index="indexMethod"
    >
    </el-table-column>
    <!-- <template v-for="(item, index) in columns">
      <el-table-column
        v-if="item.show != false"
        :key="index"
        :prop="item.prop"
        :resizable="false"
        :label="item.label"
        align="center"
        :width="item.width"
      >
      </el-table-column>
    </template> -->
    <el-table-column
      v-for="(item, k) in columns"
      :key="k"
      v-bind="item"
      :resizable="false"
      :formatter="(row, column, cellValue) => cellValue"
      align="center"
    >
    </el-table-column>
    <slot name="lastColumns"></slot>
  </el-table>

  <div class="pagination-box">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      style="margin-top: 20px"
      :current-page="currentPage"
      :page-size="pagesize"
      :page-sizes="[10, 20, 30, 40]"
      :total="total"
      layout="total, sizes, prev, pager, next, jumper"
    >
    </el-pagination>
  </div>
    <slot></slot>
    <slot></slot>

</template>
<script>
import { reactive, toRefs } from 'vue';

export default {
  props: {
    //表单数据
    tableData: {
      type: Array,
    },
    //表格数据
    columns: {
      type: Array,
    },
    // 分页数据总数
    total: {
      type: Number,
      default: 1000,
      required: false,
    },
    // 单页数据量
    pagesize: {
      type: Number,
      default: 10,
      required: false,
    },
    // 当前页码
    currentPage: {
      type: Number,
      default: 1,
      required: false,
    },
  },
  emit: ['sizeChange', 'currentChange'],
  setup(props, ctx) {
    console.log('props :>> ', props.pagesize);
    console.log('ctx :>> ', ctx);
    const indexMethod = (index) => {
      return index + 1;
    };
    const handleSizeChange = (val) => {
      ctx.emit('sizeChange', props.pagesize, val);
    };
    const handleCurrentChange = (val) => {
      ctx.emit('currentChange', val, props.currentPage);
    };

    return {
      indexMethod,
      handleSizeChange,
      handleCurrentChange,
    };
  },
};
</script>
<style scoped lang="less">
.pagination-box {
  display: flex;
  justify-content: flex-end;
}
</style>
