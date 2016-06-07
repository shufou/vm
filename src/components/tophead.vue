<template>
    <div class="top_head">
      <div class="top_left">
          <ul class="logo_help" style="float:left;">
             <li>
                <a v-link="{ path: '/viewa' }" class="logo_index"><span style="height:100%;display:inline-block;vertical-align: middle;"></span><img src="../../static/imgs/logo.png" class="pingpong_logo"></a>
              </li>
              <li>设置</li> 
          </ul> 
          <div class="help_center" @mouseover="helpShow" @mouseout="helpHide">
              <p class="help_tip"> 帮助中心<span id="help_tu" class="icon-uniE61F" style="font-size:16px;"></span></p>
              <ul class="help_float clearfix">
                <li>FAQ</li>
                <li>资费标准</li>
              </ul>
          </div>
      </div>
      <div class="top_right">
            <span class="icon-icon-01" style="font-size:16px;font-weight:bold;"></span>
            <span class="user_name">12345@ppx.com</span> <span class="top_quit" style="color:#333;">安全退出</span>
      </div>
  </div>
</template>
<script>

  export default {

  methods: {
        helpShow: function() {
            $(".help_float").show();
            $("#help_tu").attr("class","icon-uniE620");
            },
            helpHide: function() {
            $(".help_float").hide();
            $("#help_tu").attr("class","icon-uniE61F");
            },
          }
  }
</script>