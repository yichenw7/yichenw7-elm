<template>
  <div>
   <head-top>
   <span class="head_logo">yichen-elm</span>
   </head-top>
   
  </div>
</template>

<script>
  /*引入公共方法*/
  import { setCookie,getCookie,delCookie } from '../../assets/js/cookie.js'
  export default{
    data(){
      return{
      
      }
    },
    mounted(){
      /*页面挂载获取保存的cookie值，渲染到页面上*/
      let uname = getCookie('username')
      this.name = uname
      /*如果cookie不存在，则跳转到登录页*/
      if(uname == ""){
        this.$router.push('/')
      }
    },
    methods:{
      quit(){
        /*删除cookie*/
        delCookie('username')
      }
    }
  }
</script>
