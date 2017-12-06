<template>
  <div id="app">
    <transition :name="animation">
      <router-view class="page-container"></router-view>
    </transition>
    
  </div>
</template>
<script>

export default {
  name: "app",
  data: function() {
    return {
    };
  },
  computed: {
    animation: function() {
      return this.$root.animation;
    }
  },
  components:{
  },
  mounted(){
    
    
  },
  methods: {
    goTo(page) {
      this.$switchTo(page);
    }
  }
};
</script>
<style>
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}

html,
body {
  height: 100%;
  width: 100%;
  overflow: hidden;
}
#app {
  position: relative;
  height: 100%;
  width: 100%;
  background-color: #f3f3f5;
  display: flex;
}

.page-container {
  position: absolute;
  left: 0px;
  top: 0px;
  bottom: 0px;
  width: 100%;
  overflow: auto;
}

.el-header {
  /* border-bottom: 1px #e0e0e0 solid; */
  background-color: #477ccc;
  z-index: 1;
}

.el-aside {
  background-color: #fff;
}

.el-main{
  position: relative;
}

.proj-name{
  color: #fff;
  margin-top: 12px;
  font-weight: 400;
}

.el-menu{
  height: 100%;
  box-shadow: 1px 0px 6px 0px rgba(0,0,0, 0.1);
}

.top-header{
  display: flex;
  justify-content: space-between;
}

.setting{
  line-height: 60px;
  color: #fff;
}
.el-dropdown{
  color: #fff;
}
/* .page{
    position: absolute;
    height: 100%;
    width: 100%;
    background: #F17A7A;
    color: #fff;
} */
</style>