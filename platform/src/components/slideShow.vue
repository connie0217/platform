<template id="">
  <div class="slide-show">
    <div class="slide-img">
        <a href="" v-show=true>
          <transition name="slide-trans">
            <img :src="slides[picNum].src" alt="" v-if="isShow">
          </transition>
          <transition name="slide-trans-old">
            <img :src="slides[picNum].src" alt="" v-if="!isShow">
          </transition>
        </a>
    </div>
    <h2>{{slides[picNum].title}}</h2>
    <ul class="slide-pages">
      <li @click="changePic(goPrev)">&lt;</li>
      <li v-for="(item,index) in slides" :class="{on:index==picNum}" @click="changePic(index)">{{(index+1)}}</li>
      <li @click="changePic(goNext)">&gt;</li>
    </ul>
  </div>
  
</template>
<script type="text/javascript">
/*
轮播图：是可以公用的，所以写成组件
父子组件的关系：
父组件把图片(数组)传递给子组件
子组件负责数据


 */
import Vue from 'vue'
export default{
  
  props:{
    slides:{
      type: Array,
      default: []
    }
  },
  data(){
    return {
      picNum:0,
      isShow:false
    }
  },
  mounted(){
    console.log(this.slides);
  },
  computed:{//专用来处理实例的数据//里面的函数不是事件的方法，而是处理数据的方法//常常用作方法里传入的参数，模板里传入的数据
    goPrev(){
      if(this.picNum>0){
        return this.picNum-1
      }else{
        return this.slides.length-1
      }
      
    },
    goNext(){
      if(this.picNum==(this.slides.length-1)){
        return 0
      }else{
        return this.picNum+1
      }
    }
  },
  methods:{
    changePic(number){
      this.isShow=false;
      setTimeout(() => {
        this.isShow = true
        this.picNum=number;
      },10)
      
    }
  }
}
  
</script>
<style scoped>
.slide-trans-enter-active {
  transition: all .5s;
}
.slide-trans-enter {
  transform: translateX(-900px);
}
.slide-trans-old-leave-active {
  transition: all .5s;
  transform: translateX(900px);
}
.slide-show {
  position: relative;
  margin: 15px 15px 15px 0;
  width: 900px;
  height: 500px;
  overflow: hidden;
}
.slide-show h2 {
  position: absolute;
  width: 100%;
  height: 100%;
  color: #fff;
  background: #000;
  opacity: .5;
  bottom: 0;
  height: 30px;
  text-align: left;
  padding-left: 15px;
}
.slide-img {
  width: 100%;
}
.slide-img img {
  width: 100%;
  position: absolute;
  top: 0;
}
.slide-pages {
  position: absolute;
  bottom: 10px;
  right: 15px;
}
.slide-pages li {
  display: inline-block;
  padding: 0 10px;
  cursor: pointer;
  color: #fff;
}
.slide-pages li.on {
  text-decoration: underline;
}
</style>

