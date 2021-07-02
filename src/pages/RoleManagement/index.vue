<!--
 * @Author:苏勋娜
 * @Date: 2021-03-26 08:34:47
 * @LastEditTime: 2021-06-30 10:00:01
 * @LastEditors: Please set LastEditors
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
        <close-service-order v-model:orderStatus="isShow"></close-service-order>
      <!-- </template> -->
    </c-table>
    <div @click="handelDD">点的</div>
  </div>
</template>

<script>
name: 'RoleManagement'
import { reactive, toRefs } from 'vue'
import CTable from '../../components/CTable.vue'
import CloseServiceOrder from './components/CloseServiceOrder.vue'
export default {
  components: {
    CTable,
    CloseServiceOrder,
  },
  setup() {
    const state = reactive({
      isShow: false,
      pager: {
        totalNum: 24, // 数据总数
        pagesizeNum: 10, // 单页数据量
        currentPageNum: 1, // 当前页码
      },
      tableDataList: [],
      columns: [
        { prop: 'date', label: '日期' },
        { prop: 'name', label: '姓名' },
        { prop: 'address', label: '地址' },
      ],
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
    })
    const handleClick = (data) => {
      console.log('data :>> ', data)
    }
    const handelDD = () => {
      state.isShow = !state.isShow
      console.log('object :>> ', 111)
    }
    const clickhandleSizeChange = (pagesize) => {
      state.pager.pagesizeNum = pagesize
      this.getNewData()
    }
    const getNewData = () => {
      state.tableDataList = state.tableData.slice(
        (state.pager.currentPageNum - 1) * state.pager.pagesizeNum,
        state.pager.currentPageNum * state.pager.pagesizeNum
      )
    }
    // const clickhandleCurrentChange=(data) =>{
    //    state.pager.pagesizeNum = pagesize
    // },
    return {
      ...toRefs(state),
      handleClick,
      clickhandleSizeChange,
      getNewData,
      handelDD,
      // clickhandleCurrentChange
    }
  },
}
</script>

<style></style>
