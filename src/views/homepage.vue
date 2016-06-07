<template>
    <div class="bank_info">
      <table class="bank_table">
        <tbody>
        <tr>
          <th>店名</th>
          <th>银行账户</th>
          <th>Routing Number</th>
          <th>所属公司</th>
        </tr>
        <tr class="bank_info_tr" v-for="accout in accouts">
          <td>{{accout.storename}}</td>
          <td>{{accout.bankaccout}}</td>
          <td>{{accout.routnum}}</td>
          <td>{{accout.company}}</td>
        </tr>
        </tbody>
      </table>
      <p class="bank_check_more " @click="addAcclist">查看更多</p>
    </div>
    <div class="content_message clearfix" style="margin-top:30px;height:470px;">
      <div class="left_message">
        <div class="company_info">
          <table class="company_table">
            <tbody>
            <tr>
              <td class="icon-icon-01" width="10%" style="text-align:right;color:#0fb6ff;font-weight:bold;"></td>
              <td class="info_tip" width="25%">认证</td>
              <td width="35%">姓名/企业</td>
              <td class="add_account" width="30%">添加多账号+</td>
            </tr>
            <tr>
              <td></td>
              <td class="info_tip">用户编号</td>
              <td>{{userinfo.usernum}}</td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td class="info_tip">用户状态</td>
              <td>{{userinfo.userstate}}</td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td class="info_tip">绑定邮箱</td>
              <td v-show="changemail">{{userinfo.bindmail}}</td>
              <td v-else><input type="text" v-model="userinfo.bindmail"></td>
              <td class="modify_mail">更换邮箱</td>
            </tr>
            <tr>
              <td></td>
              <td class="info_tip">绑定手机</td>
              <td>{{userinfo.bindphone}}</td>
              <td class="modify_phone">更换手机</td>
            </tr>
            </tbody>
          </table>
        </div>
        <div class="login_info">
          <table class="login_table">
            <tbody>
            <tr>
              <th>近期登录</th>
              <th>日期</th>
              <th>时间</th>
              <th>ip</th>
              <th>地点</th>
            </tr>
            <tr v-for='login in logins'>
              <td>{{login.loginequ}}</td>
              <td>{{login.logindate}}</td>
              <td>{{login.logintime}}</td>
              <td>{{login.loginip}}</td>
              <td>{{login.logincity}}</td>
            </tr>
            </tbody>
          </table>
          <p class="check_more">查看更多</p>
        </div>
      </div>
      <div class="right_message">
        <ul class="money_message clearfix">
          <li class="clearfix" style="padding:30px 0 25px;">
            <div class="money_detail_tip">
              <div class="summoney_pic">
                <img src="../../static/imgs/sum.png" class="money_tip_pic"></div>
              <div class="summoney_mes">
                <p style="color:#0fb6ff;font-size:16px;">总余额</p>
                <p style="font-size:18px;">
                  <span style="color:#0fb6ff">$</span>
                  <span class="summoney_num">{{case.sumnum}}</span>
                </p>
              </div>
            </div>
            <p class="home_add_equal">=</p>
            <div class="money_detail_tip"><div class="summoney_pic">
              <img src="../../static/imgs/allow.png" class="money_tip_pic"></div>
              <div class="summoney_mes">
                <p style="font-size:14px;">可提现金余额</p>
                <p style="font-size:18px;">
                  <span style="color:#fff929;">$</span>
                  <span class="summoney_num">{{case.pickup}}</span>
                </p>
              </div>
            </div>
            <p class="home_add_equal">+</p>
            <div class="money_detail_tip"><div class="summoney_pic">
              <img src="../../static/imgs/wait.png" class="money_tip_pic"></div>
              <div class="summoney_mes">
                <p style="font-size:14px;">待提款金额</p>
                <p style="font-size:18px;">
                  <span style="color:#cbe76d;">$</span>
                  <span class="summoney_num">{{case.waitnum}}</span>
                </p>
              </div></div>
          </li>
          <li class="clearfix">
              <div class="summoney_pic">
                <img src="../../static/imgs/exit.png"></div>
              <div class="summoney_mes">
                <p style="font-size:16px;margin:10px 0 5px;">预入账金额</p>
                <p style="font-size:22px;">
                  <span style="color:#d9d9d9;">$</span>
                  <span class="summoney_num">{{case.enternum}}</span>
                </p>
              </div>
          </li>
          <li class="clearfix">
            <div class="summoney_pic">
              <img src="../../static/imgs/cong.png"></div>
            <div class="summoney_mes">
              <p style="font-size:20px;margin:10px 0 5px;color:#ff5152;">恭喜！</p>
              <p style="font-size:20px;">
                您已从pingpong获得$
                <span class="summoney_num">{{case.getnum}}</span>
              </p>
            </div>
          </li>
          <li class="clearfix" style="padding:15px 0 5px;margin-bottom:0px;">
            <div class="summoney_pic">
              <img src="../../static/imgs/invit.png"></div>
            <div class="summoney_mes">
              <p style="font-size:16px;color:#828282;line-height:80px;">
                邀请好友立享
                <span class="summoney_num">{{case.award}}</span>
                现金奖励
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="index_bottom">
      ©2015 www.pingpongx.com. All Rights Reserved. 浙ICP备15025700号-1
    </div>
    <div class="contact_us" @click="contactUs">
        <img src="../../static/imgs/contact.png" class="contact_pic">
    </div>
</template>

<script>
import layer from '../../static/js/layer.js'
  export default {
    data () {
    return {
      accouts:[],
      userinfo:'',
      logins:'',
      case:'',
      changemail:true,
      messages:''
    }
  },
  ready: function () {
      var self=this;
      self.$http.get('accouts.json').then(function(response) {
            self.accouts=response.data;
            self.$nextTick(function(){
              var bank_info_tr=$('.bank_table').find('.bank_info_tr');
              var length=bank_info_tr.length;
              for(var i=0;i<length;i++){
                if(i>1){
                  bank_info_tr[i].style.display="none";
                }
              }
            })     
        },function(response) {
            console.log(response);
        });


      this.$http.get('userinfo.json').then(function(response) {
            this.$set('userinfo', response.data.data);
        },function(data, status, request) {
            console.log('fail' + status + "," + request);
        });

        this.$http.get('logins.json').then(function(response) {
            this.$set('logins', response.data.data);
        },function(data, status, request) {
            console.log('fail' + status + "," + request);
        });

        this.$http.get('case.json').then(function(response) {
            this.$set('case',response.data.data);
        },function(data, status, request) {
            console.log('fail' + status + "," + request);
        });

  },
  events: {
      addtmsg: function (msg) {
        this.messages=msg;
        console.log(this.messages,"homepage");
      }
  },
  methods: {
      addAcclist: function() {
        var $bank_check_more=$(".bank_check_more");
        var bank_info_tr=$('.bank_table').find('.bank_info_tr');
        var length=bank_info_tr.length;
        if($bank_check_more.text()=="查看更多"){
          bank_info_tr.show();
          $bank_check_more.text("收起");
        }else{
          for(var i=0;i<length;i++){
              if(i>1){
                bank_info_tr[i].style.display="none";
              }
            } 
            $bank_check_more.text("查看更多");
        }
          
          },
      contactUs:function(){
        var contact='<div class="contact_mag"><div class="contact_title"> <p style="font-size: 20px;color: #0fb5ff;">Contact Us</p><p style="font-size: 12px;color: #ddd;">联系我们</p> </div> <ul class="contact_classfiy"> <li style="font-size: 16px;"><img src="../../static/imgs/phone.png" class="service_pic" style="margin-right: 20px;">400 601 6666</li> <li><img src="../../static/imgs/qq.png" class="service_pic" style="margin-right: 10px;">98101666,90601666</li> <li><img src="../../static/imgs/mail.png" class="service_pic" style="margin-right: 5px;">service@pingpongx.com</li> </ul> </div>';

            layer.open({
                type: 1,
                title: false,
                closeBtn: 0,
                shadeClose: true,
                skin: 'yourclass',
                content: contact
            });
          }
      }
  }
</script>
