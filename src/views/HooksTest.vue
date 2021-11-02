<template>
  <h5 style="color:rgb(143,123,165)">自定义的hooks钩子函数可以共多个组件同时复用</h5>
  <el-divider></el-divider>
  <h4>使用第一个hook：当前点击时鼠标的坐标为：</h4>
  <p>x：{{point.x}}，y：{{point.y}}</p>
  <el-divider></el-divider>
  <h4>使用第二个hook：查看屏幕尺寸：</h4>
  <div>宽度：{{ width }}</div>
  <div>高度：{{ height }}</div>
</template>

<script>
  import usePoint from '../hooks/usePointe.js'
  import useWindowResize from '../hooks/useWindowResize.js'
  export default {
    name:'HooksTest',
		setup(){
			//数据 引入自定义的hook函数
			let point = usePoint()
      const {width,height} = useWindowResize();
			//返回一个对象（常用）
			return {point,width,height}
		}
  }
</script>
