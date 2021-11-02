<template>
  <p style="color:rgb(172,160,153);font-size: 15px">建议使用watchEffect智能的数据监视！</p>
  <h1>{{sum}}</h1>
  <el-button @click="sum++">加一</el-button>
  <el-divider/>
  <h1>{{msg}}</h1>
  <el-button @click="msg+='~'">加字符</el-button>
  <el-divider/>
  <h1>{{emp.id}} ===> {{emp.name}}</h1>
  <el-button type="danger" size="small" @click="emp.id++">修改员工号</el-button>
  <el-button type="danger" size="small" @click="emp.name+=' Hsu'">修改姓名</el-button>
  <el-button type="danger" size="small" @click="++emp.job.j1.salary+'K'">deep watch</el-button>
</template>

<script>
  import {ref,watch,reactive,watchEffect} from 'vue'
  export default {
    name: "WatchedTest",
    setup(){
      let sum = ref(0)
      let msg = ref('Hello Vue3')
      let emp =reactive({
        id: 100749,
        name:'Kyle',
        job:{
          j1:{
            salary: 20
          }
        }
      })
      // 数据监听方式1：监视ref函数中的定义的多个数据
      watch([sum,msg],(newV,oldV)=>{
        console.log(newV,oldV)
      },{immediate:true,deep:true}) // watch的参数3：可配置选项:立即监听,深度监听

      // 数据监听方式2：监视reactive函数中的对象。存在问题，oldValue无法进行监听。如果需要监听oldValue相关的属性定义到ref中，并定义为基本数据类型
      watch(emp, (n, o) => {
          console.log(emp.id, emp.name)
          console.log('emp对象变化了~', n, o)
        }, {
          immediate: true, deep: true // 注意：其实vue3强制开启了深度监视，deep配置无效
        }
      )
      // 数据监听方式3：监视reactive函数中对象的某些属性
      watch([()=>emp.name,()=>emp.id],(n,o)=>{
        console.log('emp的属性们变化了~',n,o)
      })
      // 数据监听方式4：监视reactive函数中对象的多层对象，需要加深度监视【坑~】
      watch(()=>emp.job,(n,o)=>{
        console.log('emp对象的多层次对象改变了(need deep watch)~',n,o)
      },{deep:true})

      // 智能的数据监视：watchEffect: 不用写监视谁，回调函数中的数据都会被监视
      watchEffect(()=>{
        const x1 = emp.job.j1.salary
        const x2 = msg.value
        console.log('只要x1,x2 数据变化了，就执行下面的逻辑...')
        console.log('watchEffect立即被监视了吗？？？ ---> 默认开启了immediate: true')
      })
      return {
        sum,
        msg,
        emp,
      }
    }
  }
</script>

<style scoped>

</style>
