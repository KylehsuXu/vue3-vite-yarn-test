<template>
  <h2 style="color: chocolate">vue3的生命周期钩子</h2>
  <el-button type="success" @click='isShowDemo = !isShowDemo'>显示/隐藏卡片中的DOM元素</el-button>
  <LifeCycleDemo v-if="isShowDemo"/>
</template>

<script>
  import {ref} from 'vue'
  import LifeCycleDemo from "./LifeCycleDemo.vue";
  export default {
    name: "LifeCycleTest",
    components: {LifeCycleDemo},
    setup(){
      let isShowDemo = ref(true)
      return {isShowDemo}
    }
  }
</script>

<style scoped>

</style>
