<template>
  <div class="">
    <div class="app-header">
      <div class="app-head-inner">
        <router-link :to="{path: '/'}" class="head-logo">
           <img src="../assets/logo.png">
         </router-link>
         <div class="head-nav">
           <ul class="nav-list">
             <li  @click="showDialog('isShowLogDialog')">登陆</li>
             <li >|注册</li>
             <li @click="showDialog('isShowAboutDialog')">|关于</li>
             <li>
               <router-link :to="{path: '/tab'}">
                 |关于tab
               </router-link>
               </li>
               <li>
                 <router-link :to="{path: '/car'}">
                   |关于购物车
                 </router-link>
                 </li>
           </ul>
         </div>
        <p class="route-nav">当前页：{{$route.name}}</p>
      </div>
    </div>
    <div class="app-content">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <div class="app-footer">
      <p>© 2016 fishenal MIT11111</p>
    </div>

    <my-dialog v-show="isShowAboutDialog"  @on-close="closeDialog('isShowAboutDialog')">
      <p>本报告在调研数据的基础上，采用定性与定量相结合的方式深入分析了专车市场发展的驱动因素与阻碍因素</p>
    </my-dialog>
    <my-dialog v-show="isShowLogDialog"  @on-close="closeDialog('isShowLogDialog')">
      <login-form></login-form>
    </my-dialog>
    
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Dialog from './base/dialog'
// 对于dialog来说，可能是登陆弹框或者注册弹框，样式比较复杂，所以可以使用插槽slot
import loginForm from './logForm'


export default {
  components: {
    MyDialog: Dialog,
    loginForm
  },
  data () {
    return {
      isShowAboutDialog:false,
      isShowLogDialog:false,
      isShowRegDialog:false
    }
  },
  mounted(){
    this.getdatalist();
  },
  methods:{
    getdatalist(){
      axios.get('api/getOrderList').then((response)=>{
        //var response = response.body;
          console.log(response.data);//需要这样获取到数组
      })
    },
    closeDialog (attr) {
      this[attr] = false
    },
    showDialog(attr){
      this[attr] = true;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
/* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a {
  color: inherit;
  text-decoration: none;
}
body {
  background: #f0f2f5;
  font-family: "Helvetica Neue",Helvetica,Arial,"Hiragino Sans GB","Hiragino Sans GB W3","Microsoft YaHei UI","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif;
  font-size: 14px;
  color: #444;
}
.route-nav{
  height: 30px;
  width:300px;
  color:red;
  position: absolute;
  top:50px;
  left:10px;
}
.app-header {
  background: #363636;
  color: #b2b2b2;
  height: 90px;
  line-height: 90px;
  width: 100%;
}

.app-head-inner {
  width: 1200px;
  margin: 0 auto;
}
.head-logo {
  float: left;
}
.app-head-inner img {
  width: 50px;
  margin-top: 20px;
}
.head-nav {
  float: right;
}
.head-nav ul {
  overflow: hidden;
}
.head-nav li {
  cursor: pointer;
  float: left;
}
.nav-pile {
  padding: 0 10px;
}
.app-foot {
  text-align: center;
  height: 80px;
  width: 100%;
  line-height: 80px;
  background: #e3e4e8;
  clear: both;
  margin-top: 30px;
}
.container {
  width: 1200px;
  margin: 0 auto;
}
.hr {
  height: 1px;
  width: 100%;
  background: #ddd;
}
.button {
  background: #4fc08d;
  color: #fff;
  display: inline-block;
  padding: 10px 20px;
  cursor: pointer;
}
.button:hover {
  background: #4fc08d;
}
.g-form {

}
.g-form-line {
  padding: 15px 0;
}
.g-form-label {
  width: 100px;
  font-size: 16px;
  display: inline-block;
}
.g-form-input {
  display: inline-block;
}
.g-form-input input {
  height: 30px;
  width: 200px;
  line-height: 30px;
  vertical-align: middle;
  padding: 0 10px;
  border: 1px solid #ccc;
}
.g-form-btn {
  padding-left: 100px;
}
.g-form-error {
  color: red;
  padding-left: 15px;
}
</style>
