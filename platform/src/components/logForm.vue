<template>
  <div class="login-form">
    <div class="g-form">
      <div class="g-form-line">
        <span class="g-form-label">用户名：</span>
        <div class="g-form-input">
          <input type="text" placeholder="请输入用户名" v-model="usernameModel">
        </div>
        <span class="g-form-error"></span>
      </div>
      <div class="g-form-line">
        <span class="g-form-label" >密码：</span>
        <div class="g-form-input">
          <input type="password" placeholder="请输入密码" v-model="passwordModel">
        </div>
        <span class="g-form-error"></span>
      </div>
      <div class="g-form-line">
        <div class="g-form-btn">
          <a class="button" @click="onLogin">登录</a>
        </div>
      </div>
      <p></p>
    </div>
  </div>
</template>

<script>
// 表单使用v-model数据双向绑定
export default {
  data () {
    return {
      usernameModel:"",
      passwordModel:""
    }
  },
  computed: {
    
  },
  methods: {
      onLogin(){//登陆成功后需要告诉父组件
        console.log(this.usernameModel,this.passwordModel)

      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
