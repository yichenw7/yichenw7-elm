<template>
  <div>
    <header>
     <router-link to="">
       <span class="login_span" v-if="userInfo">您已登录</span>
       <span class="login_span" v-else>登录|注册</span>
     </router-link>
    </header>
  
  </div>
</template>
<style>

</style>
<script>
  import {mapState, mapActions} from 'vuex'
  
  export default{
    data(){
      return {}
    },
    mounted(){
      //获取用户信息
      this.getUserInfo();
    },
    props: ['signinUp', 'headTitle', 'goBack'],
    computed: {
      ...mapState([
        'userInfo'
      ])
    },
    methods: {
      ...mapActions([
        'getUserInfo'
      ]),
      
      
    }
  }
</script>
