<template id="">
  <div class="tab-wrap">
    <div class="tab-tit">
      <a href="#" v-for="(item,index) in tabTit" @click="changeTab(index)" :class="{'cur':isTab==index}">{{item}}</a>
    
      
    </div>
    <div class="tab-con">
      <div v-for="(item,index) in tabCon" v-show="isTab==index">{{item}}</div>
      
    </div>
  </div>
</template>
<script type="text/javascript">
// 点第几个，第几个是选中状态，使用变量来设置tab的选中状态
export default{
  data(){
    return {
      isTab:0,//初始值
      tabTit:[
        "HTML","CSS","JS","SASS","ES6"
      ],
      tabCon:[
        "hello html","hello css","hello js","hello sass","hello es6"
      ]
      
    }
  },
  methods:{
    changeTab(index){
      this.isTab=index
    }
  }
}
  
</script>
<style>
body{
  font-family:"Microsoft YaHei";
}
.tab-wrap{
  width: 600px;
  margin: 0 auto;
}
.tab-tit{
  font-size: 0;
  width: 600px;
}
.tab-tit a{
  display: inline-block;
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  width: 20%;
  text-align: center;
  background: #ccc;
  color: #333;
  text-decoration: none;
}
.tab-tit .cur{
  background: #09f;
  color: #fff;
}
.tab-con div{
  border: 1px solid #ccc;
  height: 400px;
  padding-top: 20px;
}
</style>