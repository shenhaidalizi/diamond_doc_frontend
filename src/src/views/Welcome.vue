<template>

  <div class="welcome">
    <a-row>
        <a-row style="margin-top:200px;text-align:center;margin-bottom:20px"><b style="font-size:50px">金刚石文档</b></a-row>
        <a-row>
          <a-button size="large" @click="toRegister" style="width:100px;margin-right:20px;background-color: #e7e7e7; color: black;">注册</a-button>
          <a-button size="large" @click="toLogin" style="width:100px;background-color: #e7e7e7; color: black;">登录</a-button>
        </a-row>   
    </a-row>
  </div>
</template>

<style>
  .welcome {
  background: url("../assets/cover.png");
  background-size: 100% 100%;
  background-attachment: fixed;
}

#particles-js{
  width: 100%;
  height: calc(100% - 100px);
  position: absolute;    
}
</style>

<script>
// @ is an alias to /src

export default {
    name: 'Welcome',
    components: {
    },
    created(){
        this.$store.state.showNav = false
    },
    destroyed(){
        this.$store.state.showNav = true
    },
    methods: {
    toRegister() {
      this.current = "register";
      this.$router.push({ path: "/register" });
    },
    toLogin(){
      this.current='login';
      this.$router.push({path:"/login"});
    },
  },
}
</script>
