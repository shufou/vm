<template>
      <div class="left_content">
          <ul class="left_menu">
              <li>
                  <a class="cg_menu_a" v-link="{ path: '/homepage'}" onfocus="this.blur();">
                  <div style="float:left;margin-top:5px;"><span class="icon-icon-01 icon_tool"></span></div><span class="user_name">用户信息</span>
                  </a>
              </li>
              <li>
                  <a class="cg_menu_a" v-link="{ path: '/accountmeg'}" onfocus="this.blur();">
                  <div style="float:left;margin-top:5px;"><span class="icon-icon-02 icon_tool"></span></div><span class="user_name">账户管理</span>
                  </a>
              </li>
              <li>
                  <a class="cg_menu_a" v-link="{ path: '/withcase'}" onfocus="this.blur();">
                  <div style="float:left;margin-top:5px;"><span class="icon-icon-03 icon_tool"></span></div><span class="user_name">提现</span>
                  </a>
              </li>
              <li>
                  <a class="cg_menu_a" onfocus="this.blur();">
                  <div style="float:left;margin-top:5px;"><span class="icon-icon-05 icon_tool"></span></div><span class="user_name">上传补充文件</span>
                  </a>
              </li>
              <li>
                  <a class="cg_menu_a" v-link="{ path: '/incomemag'}" onfocus="this.blur();">
                  <div style="float:left;margin-top:5px;"><span class="icon-icon-04 icon_tool"></span></div><span class="user_name">收益账户管理</span>
                  </a>
              </li>
          </ul>
      </div>
</template>

<script>
  export default {
    data () {
    return {
      messages:''
    }
  },
  events: {
      addtmsg: function (msg) {
        this.messages=msg;
        console.log(this.messages,"leftmenu");
      }
  },
  }
</script>
