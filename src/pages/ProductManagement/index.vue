<!--
 * @Author: dafengxiang
 * @Date: 2021-03-26 08:34:47
 * @LastEditTime: 2021-03-26 08:42:20
 * @LastEditors: dafengxiang
 * @Description: 产品管理页面
-->
<template>
  <div>
    <el-button @click="handleShow">查询</el-button>
    <el-dialog v-model="isShow">
      <base-details :tableGroup="tableGroup"></base-details>
    </el-dialog>
  </div>
</template>

<script>
import { reactive, toRefs, getCurrentInstance, onMounted } from 'vue';
import { getTableGroup } from './config';
import BaseDetails from './details';
export default {
  name: 'index',
  components: { BaseDetails },
  setup() {
    const { ctx } = getCurrentInstance();
    console.log('ctx :>> ', ctx);
    const state = reactive({
      title: '',
      tableGroup: getTableGroup(),
      tableData: [
        {
          'insureds': [
            {
              name: 'xxxx',
              mobile: '159333322',
              age: '12'
            }
          ],
          'orderBen': [
            {
              address: 'zzzz',
              email: 'dddd',
              sex: '5555'
            }
          ]
        }
      ],
      isShow:false
    });
    // const isShow = ref(false);
    const handleShow = () => {
      state.isShow = true;
    };
    state.tableGroup = state.tableGroup.map(item => {
      console.log('state.tableData[0][item.value] :>> ', item);
      return {
        ...item,
        tableData: state.tableData[0][item.value] || []
      };
    });
    return {
      ...toRefs(state),
      // isShow,
      handleShow
    };
  },
  mounted() {
    console.log('1111 :>> ', 1111);
  }
};
</script>
<style scoped lang='less'>
</style>