<template>
<!--  <el-card class="box-card">-->
    <div class="demo-rate-block">
      <span class="demonstration">Please rating vue3's lifecycle</span>
      <el-rate v-model="value2" :colors="colors"> </el-rate>
      <p style="color: darkgray;font-size: 15px">
        如果即使用了配置项的生命周期，又使用了组合式API，那么会先执行vue3的组合式API，因为它的优先级较高！
      </p>
    </div>

    <h1>add {{sum}}</h1>
    <el-button @click="sum++">加法：判断是否有执行了updated</el-button>
<!--  </el-card>-->
</template>

<script>
  import {ref,onBeforeMount,onMounted,onBeforeUpdate,onUpdated,onBeforeUnmount,onUnmounted} from "vue";
  export default {
    name: "LifeCycleDemo",
    setup() {
      let sum = ref(0)

      //通过组合式API的形式去使用生命周期钩子
      onBeforeMount(()=>{
        console.log('---onBeforeMount---')
      })
      onMounted(()=>{
        console.log('---onMounted---')
      })
      onBeforeUpdate(()=>{
        console.log('---onBeforeUpdate---')
      })
      onUpdated(()=>{
        console.log('---onUpdated---')
      })
      onBeforeUnmount(()=>{
        console.log('---onBeforeUnmount---')
      })
      onUnmounted(()=>{
        console.log('---onUnmounted---')
      })


      return {
        // element plus的评分组件
        value1: ref(null),
        value2: ref(null),
        colors: ref(['#99A9BF', '#F7BA2A', '#FF9900']),
        sum
      }
    },
    // 通过配置项的形式使用生命周期钩子 ----------- vue2
/*    beforeCreate() {
      console.log('---beforeCreate---')
    },
    created() {
      console.log('---created---')
    },
    beforeMount() {
      console.log('---beforeMount---')
    },
    mounted() {
      console.log('---mounted---')
    },
    beforeUpdate(){
      console.log('---beforeUpdate---')
    },
    updated() {
      console.log('---updated---')
    },
    beforeUnmount() {
      console.log('---beforeUnmount---')
    },
    unmounted() {
      console.log('---unmounted---')
    },*/
  }
</script>

<style scoped>
  .el-card{
    margin: 20px;
    width: 80%;
    left: 20%;
  }
</style>
