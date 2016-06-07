<template>
<div>
<top-head></top-head>
  <div class="content clearfix">
     <left-menu></left-menu>
      <div class="right_content dis_block">
          <new-notice usename="aaa@com" :newceshi="messages"></new-notice>
          <router-view></router-view> 
      </div>
  </div>
</div>
</template>
<script type="text/javascript">
  import topHead from './components/tophead.vue'
  import leftMenu from './components/leftmenu.vue'
  import newNotice from './components/newnotice.vue'
  export default {
    data () {
      return {
        messages:''
      }
  },
    events: {
       addmsg: function (msg) {
          this.messages=msg;
          this.$broadcast('addtmsg', this.messages)
        }
  },
    components: {
          topHead,
          leftMenu,
          newNotice
  }
  }
</script>
<style>
.dis_block{
  display: block;
}
.content{
  padding-top:80px;
  background-color: #252525;
}
</style>