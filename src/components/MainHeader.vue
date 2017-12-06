<template>
  <div class="main-header">
      <ul class="nav">
          <li class="active">首页</li>
          <li>用户登录</li>
          <li>解决方案</li>
          <li>开放平台</li>
          <li>了解爪爪</li>
      </ul>
  </div>
</template>
<script>
    export default {
        data: function() {
            return {

            }
        }
    }
</script>
<style scoped>
.main-header{
    height: 66px;
    background-image: url('../assets/image/logo.png');
    background-repeat: no-repeat;
    border-bottom: 1px solid #eee;
}

.nav{
    float: right;
    height: 100%;
    line-height: 66px;
    padding-right: 63px;
}

.nav li{
    position: relative;
    display: inline;
    font-size: 14px;
    margin: 0 10px;
    cursor: pointer;
}

.nav li:after{
    content: '';
    display: block;
    width: 1px;
    height: 16px;
    position: absolute;
    right: -12px;
    bottom: 0px;
    border-right: 1px solid #000;
    
}

.nav li:last-child::after{
    display: none;
}

.nav li.active{
    color: #ff914e;
}
</style>