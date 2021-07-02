<template>
  <div>
    <el-dialog title="管理" v-model="status">
      <el-button @click="closed">取 消</el-button>
    </el-dialog>
  </div>
</template>
<script>
import { defineComponent, reactive,toRefs, watch } from 'vue'

export default defineComponent({
  props: ['orderStatus'],
  emits: ['update:orderStatus'],
  setup(props, { emit }) {
    const state = reactive({
      status:false
    })
    watch(()=> props.orderStatus,()=>{
      state.status = props.orderStatus
    })
    const closed = () => {
      emit('update:orderStatus', false)
    }
    return {
      ...toRefs(state),
      closed,
    }
  },
})
</script>
