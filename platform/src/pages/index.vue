<template id="">
  <div class="index-wrap">
    <div class="index-left">
      <div class="index-left-block">
        <h2>全部产品</h2>
        <div class="">
          <template v-for="item in productList">
            <h3>{{item.title}}</h3>
            <ul>
              <li v-for="val in item.list">
                <a :href="val.url">{{val.name}}</a>
              </li>
            </ul>
          </template>
          <!-- <h3>PC产品</h3>
          <ul>
            <li>数据统计</li>
          </ul>
          <h3>手机产品</h3>
          <ul>
            <li>数据统计</li>
          </ul> -->
        </div>
      </div>
      <div class="index-left-block lastest-news">
        <h2>最新消息</h2>
        <ul v-for="item in newsList">
          <li>
            <a :href="item.url">{{sliceText(item.title)}}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="index-right">
        <slideShow></slideShow>

        <div class="index-board-item" v-for="(item,index) in boardList" :class="[{'line-last':index%2==0},'index-board-' + item.id]">
          <div class="index-board-item-inner">
            <h2>{{item.title}}</h2>
            <p>{{item.description}}</p>
            <div class="index-board-button">
              <a href="#">立即购买</a>
            </div>
          </div>
            
            <!--<h2>开放产品</h2>
            <p>开放的产品</p>
            <div class="index-board-button">
              <a href="#">立即购买</a>
            </div>-->
        </div>

    </div>
  </div>
</template>

<script type="text/javascript">
import axios from 'axios'
import VueAxios from 'vue-axios'
import slideShow from '../components/slideShow'


export default({
  components:{
    slideShow
  },
  created:function(){//promise对象
    
  },
  mounted:function(){
    this.getProductList();
    this.getNewsList();
    //this.getProductList();
  },
  computed:{//在HTML DOM加载后马上执行的，如赋值；
    
  },
  
  data(){
    return {
      productList:{
        "pc":{
          "title": "PC产品",
          "list":[]
        },
        "app":{
          "title": "手机应用类",
          "last": true,
          "list":[]
        }
      },
      newsList:[],
      boardList: [
        {
          title: '开放产品',
          description: '开放产品是一款开放产品',
          id: 'car',
          toKey: 'analysis',
          saleout: false
        },
        {
          title: '品牌营销',
          description: '品牌营销帮助你的产品更好地找到定位',
          id: 'earth',
          toKey: 'count',
          saleout: false
        },
        {
          title: '使命必达',
          description: '使命必达快速迭代永远保持最前端的速度',
          id: 'loud',
          toKey: 'forecast',
          saleout: true
        },
        {
          title: '勇攀高峰',
          description: '帮你勇闯高峰，到达事业的顶峰',
          id: 'hill',
          toKey: 'publish',
          saleout: false
        }
      ],
      maxLength:8
    }
  },
  methods:{
    getProductList(){
      axios.get('api/getProductList').then((response)=>{
        this.productList=response.data.data;
      }).catch((response)=>{
        console.log(response);
      })
    },
    getNewsList(){
      axios.get('api/getNewsList').then((response)=>{
        this.newsList=response.data.data;
      }).catch((response)=>{
        console.log(response);
      })
    },
    
    sliceText(text){
      return text.length>this.maxLength?text.slice(0,this.maxLength)+'...':text
    }
  }
})
  
</script>
<style scoped>
.index-wrap {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}
.index-left {
  float: left;
  width: 300px;
  text-align: left;
}
.index-right {
  float: left;
  width: 900px;
}
.index-left-block {
  margin: 15px;
  background: #fff;
  box-shadow: 0 0 1px #ddd;
}
.index-left-block .hr {
  margin-bottom: 20px;
}
.index-left-block h2 {
  background: #4fc08d;
  color: #fff;
  padding: 10px 15px;
  margin-bottom: 20px;
}
.index-left-block h3 {
  padding: 0 15px 5px 15px;
  font-weight: bold;
  color: #222;
}
.index-left-block ul {
  padding: 10px 15px;
}
.index-left-block li {
  padding: 5px;
}
.index-board-list {
  overflow: hidden;
}
.index-board-item {
  float: left;
  width: 400px;
  background: #fff;
  box-shadow: 0 0 1px #ddd;
  padding: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
}
.index-board-item-inner {
  min-height: 125px;
  padding-left: 120px;
}
.index-board-car .index-board-item-inner{
  background: url(../assets/images/1.png) no-repeat;
}
.index-board-loud .index-board-item-inner{
  background: url(../assets/images/2.png) no-repeat;
}
.index-board-earth .index-board-item-inner{
  background: url(../assets/images/3.png) no-repeat;
}
.index-board-hill .index-board-item-inner{
  background: url(../assets/images/4.png) no-repeat;
}
.index-board-item h2 {
  font-size: 18px;
  font-weight: bold;
  color: #000;
  margin-bottom: 15px;
}
.line-last {
  margin-right: 0;
}
.index-board-button {
  margin-top: 20px;
}
.lastest-news {
  min-height: 512px;
}
.hot-tag {
  background: red;
  color: #fff;
}
.new-item {
  display: inline-block;
  width: 230px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>