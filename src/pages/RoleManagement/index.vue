<!--
 * @Author:苏勋娜
 * @Date: 2021-03-26 08:34:47
 * @LastEditTime: 2021-07-05 10:56:05
 * @LastEditors: suxunna
 * @Description: 角色管理页面
-->
<template>
  <div>
    <c-table
      :tableData="tableData"
      :columns="columns"
      v-bind="pager"
      @sizeChange="clickhandleSizeChange"
    >
      <template #lastColumns>
        <el-table-column fixed="right" align="center" label="操作" width="100">
          <template #default="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small"
              >查看</el-button
            >
            <el-button type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </template>
      <!-- <template #tost> -->

      <!-- </template> -->
    </c-table>
    <div @click="handelDD">点的</div>
    <el-dialog title="关闭寄卖服务" v-model="isShow">
      <close-service-order
        v-if="isShow"
        v-model:orderStatus="orderStatus"
        @onClose="handleClose"
      ></close-service-order>
    </el-dialog>
  </div>
</template>

<script>
name: 'RoleManagement';
import { reactive, toRefs } from 'vue';
import CTable from '../../components/CTable.vue';
import CloseServiceOrder from './components/CloseServiceOrder.vue';
import configObj from './config'

export default {
  components: {
    CTable,
    CloseServiceOrder,
  },
  setup() {
    const { columns } = new configObj()
    const state = reactive({
      isShow: false,
      pager: {
        totalNum: 24, // 数据总数
        pagesizeNum: 10, // 单页数据量
        currentPageNum: 1, // 当前页码
      },
      tableDataList: [],
      columns,
      tableData: [
        {
          id: 1,
          date: '2020-1',
          name: '张三',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          id: 2,
          date: '2020-2',
          name: '李四',
          address: '上海市普陀区金沙江路 1517 弄',
        },
        {
          id: 3,
          date: '2020-4',
          name: '王五',
          address: '上海市普陀区金沙江路 1519 弄',
        },
        {
          id: 4,
          date: '2016-05-03',
          name: '赵6',
          address: '上海市普陀区金沙江路 1516 弄',
        },
        {
          id: 5,
          date: '2020-1',
          name: '张三',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          id: 6,
          date: '2020-2',
          name: '李四',
          address: '上海市普陀区金沙江路 1517 弄',
        },
        {
          id: 7,
          date: '2020-4',
          name: '王五',
          address: '上海市普陀区金沙江路 1519 弄',
        },
      ],
    });
    const handleClick = (data) => {
      console.log('data :>> ', data);
    };
    const handelDD = () => {
      state.isShow = true;
      console.log('object :>> ', 111);
    };
    const handleClose = (val) => {
      state.isShow = val;
    };
    const clickhandleSizeChange = (pagesize) => {
      state.pager.pagesizeNum = pagesize;
      this.getNewData();
    };
    const getNewData = () => {
      state.tableDataList = state.tableData.slice(
        (state.pager.currentPageNum - 1) * state.pager.pagesizeNum,
        state.pager.currentPageNum * state.pager.pagesizeNum
      );
    };
    // const clickhandleCurrentChange=(data) =>{
    //    state.pager.pagesizeNum = pagesize
    // },
    return {
      ...toRefs(state),
      handleClick,
      clickhandleSizeChange,
      getNewData,
      handelDD,
      handleClose
      // clickhandleCurrentChange
    };
  },
};
</script>

<style></style>
