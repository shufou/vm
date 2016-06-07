<template>
  <div class="user_message clearfix">
      <div class="user_meg_title">收益账户管理</div>
      <div class="user_meg_tip clearfix">
        <a class="user_category">类目：</a>
        <ul class="table_title clearfix">
          <li style="border-top:1px solid #0fb5ff;">收益人账户列表</li>
          <li style="border-bottom:1px solid #7f7f7f;"><a v-link="{ path: '/addaccout'}">添加收益账户</a></li>
        </ul>
      </div>
      <table class="user_meg_table">
        <tbody>
        <tr>
          <th>类型</th>
          <th>账户名称</th>
          <th>企业名称</th>
          <th>银行名称</th>
          <th>银行账号</th>
          <th>银行币种</th>
          <th>联系人</th>
          <th>审核</th>
        </tr>
        <tr v-for='incomeaccout in incomeaccouts'>
          <td>{{incomeaccout.type}}</td>
          <td>{{incomeaccout.accoutname}}</td>
          <td>{{incomeaccout.company}}</td>
          <td>{{incomeaccout.bankname}}</td>
          <td>{{incomeaccout.bankaccout}}</td>
          <td>{{incomeaccout.bankcur}}</td>
          <td>{{incomeaccout.contacks}}</td>
          <td>{{incomeaccout.review}}</td>
        </tr>
        </tbody>
      </table>
  </div>
  <div class="index_bottom">
    ©2015 www.pingpongx.com. All Rights Reserved. 浙ICP备15025700号-1
  </div>
</template>

<script>

  export default {
       data () {
    return {
      incomeaccouts:'',
      messages:''
    }
  },
   ready: function () {
      this.$http.get('incomeaccouts.json', function(data) {
            this.$set('incomeaccouts', data.data);
        }).error(function(data, status, request) {
            console.log('fail' + status + "," + request);
        });
         
  },
   events: {
      addtmsg: function (msg) {
        this.messages=msg;
        console.log(this.messages);

      }
  }
  }
</script>