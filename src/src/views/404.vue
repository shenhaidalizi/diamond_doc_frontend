<template>
    
    <div background = "../assets/cover.png">
        <div style="font-size:128px;text-align:center;margin-top:200px"><b>404</b></div>
        <div style="text-align:center;font-size:18px;margin:0 0 24px 0">这里没有你想要的东西，只有想要摸鱼的小猫~</div>
        <a-button @click="toHome" key="console" type="primary" size="large" style="width:120px">
                返回工作台
            </a-button>
    </div>
    
</template>

<script>

  export default {
    name: 'DocDel',
    components: {
    },
    data() {
      return {
      }
    },
    methods:{
        toHome() {
            this.current = "home";
            this.$router.push({ path: "/" });
        },
    }
  }
</script>
