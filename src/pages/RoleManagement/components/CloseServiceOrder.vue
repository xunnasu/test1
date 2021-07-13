<template>
  <div>
     <el-button @click="closed">取 消</el-button>
  </div>
</template>
<script>
import { defineComponent, reactive,toRefs, watch } from 'vue'

export default defineComponent({
  props: ['orderStatus'],
  emits: ['onClose'],
  setup(props, { emit }) {
    const state = reactive({
      // status:false
    })
    // watch(()=> props.orderStatus,()=>{
    //   state.status = props.orderStatus
    // })
    const closed = () => {
      emit('onClose', false)
    }
    return {
      ...toRefs(state),
      closed,
    }
  },
})
</script>
