<template>
  <el-alert
      title="success alert"
      type="success"
      description="您正在测试setup函数中的第二个参数里的slots"
      show-icon
      v-show="showAlert.alert1"
  >
  </el-alert>
  <div class="style1">
    <h1>
      <el-button plain type="info" size="medium" round @click="changeInfo(men.name)" :disabled="men.name==='Kyle'">打回原形</el-button>
      我是：{{men.name}}
      <el-button plain type="warning" size="medium" round @click="changeInfo(men.name)" :disabled="men.name.startsWith('E')">变形记</el-button>
    </h1>
    <h3>工作：{{men.type}}</h3>
    <h4>{{men.salary.desc}}：{{men.salary.first}}  <el-button type="success" size="mini" @click="addSalary" :disabled="men.name.startsWith('E')">加薪</el-button></h4>
    <h5>爱好：{{hobbys}}</h5>
  </div>
  <div class="style2">
    <h4>Composition API的舞台setup()函数与父组件传参：</h4>
    <p>{{msg}}</p>
    <p>{{school}}</p>
    <el-button type="primary" plain size="small" @click="test1">测试context.emits</el-button>
    <el-button type="success" plain size="small" @click="test2">测试setup函数中的第二个参数里的slots</el-button>
  </div>
</template>
<script>
  import {ref,reactive} from 'vue'
  export default {
    name:'Demo',
    props:['msg','school'],
    emits:['myclick'],  // 配置项emits：告诉子组件Demo，父组件给你绑定了一个事件，事件名是myclick
    // setup会在beforeCreated之前执行一次，可以接收到2个参数[props,]
    setup(props,context){
      // 打印一下setup函数传来的两个参数分别是什么
      console.log(props)
      console.log(context) // 是一个函数，参数有：attrs参数捡漏,emit:声名自定义事件 有点像props,expose:,slots:

      // 从vue中引入ref,用ref函数对数据进行加工变成响应式的数据【基本数据类型和对象都可以用ref函数定义，但是最常用的还是reactive函数】
      // let name = ref('Kyle')
      // let age = ref(18)
      let men = reactive({
        name:'Kyle', // 可以将基础数据类型以属性的方式写到reactive函数中，摒弃掉ref函数
        age:25,
        type:'前端工程师',
        salary:{
          first:'30K',
          end:'',
          desc:'月薪'
        }
      })
      let showAlert = reactive({
        alert1:false
      })
      // reactive函数也可以穿数组类型
      let hobbys = reactive(['抽烟','喝酒','烫头'])
      function changeInfo(name) {
        if(name === 'Kyle'){
          men.name = 'Evan You'
          men.age = 28
          men.type = '独立开发者'
          men.salary.first ='400K'
          men.salary.desc = '年薪'
          hobbys[0] = '学习'
          hobbys[1] = '赚钱'
          hobbys[2] = '秃头'
        }else if(name === 'Evan You'){
          men.name = 'Kyle'
          men.age = 18
          men.type = '前端工程师'
          men.salary.first = '30K'
          hobbys[0] = '抽烟'
          hobbys[1] = '喝酒'
          hobbys[2] = '烫头'
        }
      }
      function addSalary() {
        men.salary.end = '70K'
        men.salary.first = men.salary.end
      }
      function test1(){
        context.emit('myclick',100749) //给myclick自定义事件发送100749这个数据
      }
      function test2() {
        showAlert.alert1 = true
        //context.emit()
      }
      // setup函数的返回值： 1.可以是对象  2.也可以是render函数
      return{
        changeInfo,
        addSalary,
        men,
        hobbys,
        test1,
        test2,
        showAlert, //是否显示alert
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
  .style1{
    margin: 30px;
    border-radius: 20px;
    padding: 20px;
    background-color: rgb(89,47,26);
    font-family: "Microsoft YaHei UI",serif;
    color: rgb(220,215,207);
  }
  .style2{
    margin: 30px;
    border-radius: 20px;
    padding: 20px;
    background-color: rgb(118,44,6);
    font-family: "Microsoft YaHei UI",serif;
    color: rgb(220,215,207);
  }
</style>
