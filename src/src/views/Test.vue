<template>
  
  <div>
    <div class="hoverTest">

    </div>
    <a-popconfirm
      title="Are you sure delete this task?"
      ok-text="Yes"
      cancel-text="No"
      @confirm="confirm"
      @cancel="cancel"
    >
      <a href="#">Delete</a>
    </a-popconfirm>
    <div>
      <router-link to="/">上一页</router-link>
    </div>
    <div id="app">
      {{ info }}
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  data () {
    return {
      info: null
    }
  },
  mounted () {
    Vue.axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => (this.info = response))
  },
  methods: {
    confirm(e) {
      console.log(e);
      this.$message.success('Click on Yes');
    },
    cancel(e) {
      console.log(e);
      this.$message.error('Click on No');
    },
    
  },
}; 
/*
  export default {
    name: 'Submenu',
    props: {
      theme: String,
    },
    methods: {
      handleClick (vm, event) {
        console.log(vm, event)
      },
      handleSubmenuShow (vm, placement) {
        console.log(vm, placement)
      },
    },
  }*/
</script>

<style scoped>
  .box {
    width: 100%;
  }
  .hoverTest{
    min-width:100px;
    min-height:100px;
    background-color:red;
  }

  .hoverTest.hover{
    background-color:aqua;
  }
</style>