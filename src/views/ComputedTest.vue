<template>
  <el-input v-model="person.fullName" placeholder="输入您的姓名..." />
  <h3> 全名： {{person.fullName}} </h3>
  <el-input v-model="person.firstName" placeholder="Please input your firstName..." /> <h6>姓：{{person.firstName}}</h6>
  <el-input v-model="person.lastName" placeholder="Please input your lastName..." /> <h6>名：{{person.lastName}}</h6>
</template>

<script>
  import {ref,reactive,computed} from 'vue'
  export default {
    name: "ComputedTest",
    setup(){
      let person = reactive({
        firstName : '尤',
        lastName : '雨溪'
      })

      // 计算属性 --- 如果直接return是只读的不能修改的
      /* person.fullName = computed(()=>{
        return person.firstName + person.lastName
      })*/
      // 计算属性 --- 完整写法，可读可写
      person.fullName = computed({
        get(){
          return person.firstName +'-'+ person.lastName
        },
        set(value){
          const arr = value.split('-')
          person.firstName = arr[0]
          person.lastName = arr[1]
        }
      })

      return{
        person,
      }
    }
  }
</script>

<style scoped>
  .el-input{
    width: 30%;
  }
</style>
