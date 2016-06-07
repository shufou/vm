<template>
  <div class="cash_message clearfix" style="margin-top:30px;">
      <div class="withcash">提现</div>
      <form class="withcash_form">
          <ul class="withcash_list">
            <li class="clearfix">
              <div class="cashlist_left"><label>提现至银行：</label></div>
              <div class="cashlist_right"><input type="text" class="withcase_input" placeholder="请点击右边添加收益账户" v-model="bank"></div>
            </li>
            <li class="clearfix">
              <div class="cashlist_left"><label>提现金额：</label></div>
              <div class="cashlist_right"><input type="text" class="withcase_input" placeholder="输入金额，如100.00" style="width: 150px;" v-model="cashnum"></div>
            </li>
            <li class="clearfix">
              <div class="cashlist_left"><label>兑换货币：</label></div>
              <div class="cashlist_right">
                <select style="margin-top: 13px;" v-model="selected">
                <option selected>人民币</option>
                <option>美金</option>
              </select>
                </div>
            </li>
            <li class="clearfix">
              <div class="cashlist_left"><label>备注留言：</label></div>
              <div class="cashlist_right"><input type="text" class="withcase_input" placeholder="可不填写" v-model="leavemsg"></div>
            </li>
            <li class="clearfix" style="margin-left:20%;color: #000;">预计到账时间：2016年2月20日</li>
          </ul>
          <div class="submit_btn"><a class="cash_btn" @click = "postForm">确 认</a></div>
      </form>
  </div>
  <div class="index_bottom">
    ©2015 www.pingpongx.com. All Rights Reserved. 浙ICP备15025700号-1
  </div>
</template>

<script>
  export default {
    data () {
    return {
      bank:'',
      cashnum:'',
      selected:'',
      leavemsg:'',

    }
  },
     methods: {
        postForm: function () {
          this.$http.post('http://localhost:3000/api/', this.$data).then(function (successResponse) {
             console.log(11);
            }, function (errorResponse) {
              console.log(22);
            })
        }
  }
  }
</script>
