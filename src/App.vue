<template>
  <!-- 给子组件绑定了一个myclick事件，并传递了两个参数-->
  <GettingStarted @myclick="showMsg" msg='Hello' school="atguigu">
    <template v-slot:slot1>
      <p>开发者：KyleHsu</p>
    </template>
  </GettingStarted>
  <el-row>
    <el-col :span="4">
      <el-button type="default" round @click="show(0)">首页</el-button>
    </el-col>
    <el-col :span="4">
      <el-button type="primary" round @click="show(1)">computed计算属性</el-button>
    </el-col>
    <el-col :span="4">
      <el-button type="success" round @click="show(2)">watch数据监听</el-button>
    </el-col>
    <el-col :span="4">
      <el-button type="info" round @click="show(3)">LifeCycle生命周期</el-button>
    </el-col>
    <el-col :span="4">
      <el-button type="warning" round @click="show(4)">自定义hooks</el-button>
    </el-col>
    <el-col :span="4">
      <el-button type="danger" round @click="show(5)">toRef与toRefs</el-button>
    </el-col>
  </el-row>
  <router-view></router-view>
</template>

<script>
  import GettingStarted from './components/GettingStarted.vue'
  import router from "./router";
  export default {
    name:'App',
    components: {GettingStarted}, // 子组件
    setup() {
      function showMsg(value) {
        alert(`触发了我自定义的myclick事件，收到的参数是：${value}！`)
      }
      function show(index) {
        switch(index){
          case 0:
            router.push('/GettingStarted')
            break;
          case 1:
            router.push('/ComputedTest')
            break;
          case 2:
            router.push('/WatchedTest')
            break;
          case 3:
            router.push('/LifeCycleTest')
            break;
          case 4:
            router.push('/HooksTest')
            break;
          case 5:
            router.push('/toRefs')
            break;
          default:
            router.push('./App')
            break;
        }
      }
      return{
        showMsg,
        show
      }
    }
  }
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
</style>
