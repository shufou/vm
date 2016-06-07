<template>
<div class="banner" style="margin-top:30px;">
          <img src="../../static/imgs/top.png" width="100%">
          <div class="banner_tip">
            Morning,{{usename}}！您有 <span class="notice_num">{{noticenum}}</span> 个新{{newceshi}}通知<a v-link="{ path: '/notice'}"><img src="../../static/imgs/notice.png" style="margin-left:5px;cursor: pointer;"></a>
            <span class="notice_tip"></span>
          </div>
        </div>
</template>

<script>
  export default {
    props: {
      usename: '',
      newceshi:''
  },
    data () {
    return {
    	noticenum:''
    }
  },
  ready: function () {
      var self=this;
      self.$http.get('noticenum.json').then(function(response) {
            this.$set('noticenum', response.data.number);
        },function(data, status, request) {
            console.log('fail' + status + "," + request);
        });
  },
     methods: {
 
  }
  }
</script>