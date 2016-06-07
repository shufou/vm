<template>
    <div class="add_account_message clearfix" style="margin-top:30px;">
            <div class="step_title">
                添加收益账户&nbsp;&nbsp;
                <span style="font-size: 14px">(直接从您的PingPong账户提款到您的银行账户)</span>
            </div>
            <div class="add_content">

                <div class="pwd_header">
                    <p class="info" style="padding-top:3px;">*在您申请提现钱，我们需要对您的申请收益账户详细资料进行审核。</p>
                    <p class="info">*请提交完善的资料，我们会尽快审核你的申请。</p>
                </div>
                <div class="account_classfiy">
                    <label class="w200">账户持有人类别</label>
                    <label for="company" style="margin:0 50px;">
                        <input type="radio" name="accountType" id="company" checked/>
                        公司
                    </label>
                    <label for="personal">
                        <input type="radio" name="accountType" id="personal" />
                        个人
                    </label>
                </div>
                <form id="register_com" v-for="com_info in com_infos">
                    <div id="companyForm">
                        <div class="add_account_list">
                            <label class="w200">收款单位</label>
                            <input type="text" name="accountName" placeholder="举例： PingPong" v-model="com_info.com_payee"/>
                            <span class="reg-msg"></span>
                        </div>
                        <div class="add_account_list">
                            <label class="w200">组织机构代码</label>
                            <input type="text" name="IDNum" placeholder="举例：组织机构代码证" v-model="com_info.com_orgincode"/>
                            <span class="reg-msg"></span>
                        </div>
                        <div class="add_account_list">
                            <label class="w200">企业名称</label>
                            <input type="text" name="companyName" placeholder="需要和注册时的信息一致" v-model="com_info.com_company"/>
                            <span class="reg-msg"></span>
                        </div>
                        <div class="add_account_list">
                            <label class="w200">账户币种</label>
                            <select class="pp-select" name="accountCurrency" style="width: 220px" v-model="com_info.com_currency">
                                <option value="0" selected>人民币(CNY)</option>
                                <option value="1">美金</option>
                            </select>
                            <span class="reg-msg"></span>
                        </div>
                        <div class="add_account_list">
                            <label class="w200">银行名称</label>
                            <input type="text" name="bankName" placeholder="举例：中国建设银行" v-model="com_info.com_bankname"/>
                            <span class="reg-msg"></span>
                        </div>
                        <div class="add_account_list">
                            <label class="w200">银行账号</label>
                            <input type="text" name="bankAccount" placeholder="对公银行账户" v-model="com_info.com_bankaccout"/>
                            <span class="reg-msg"></span>
                        </div>
                        <div class="add_account_list">
                            <label class="w200">银行代码（Swift Code）</label>
                            <input type="text" name="swiftCode" placeholder="举例：PCBCNNB" v-model="com_info.com_bankcode"/>
                            <span class="reg-msg"></span>
                        </div>
                        <div class="add_account_list">
                            <label class="w200">支行名称</label>
                            <input type="text" name="branchName" placeholder="举例：杭州银行萧山支行" v-model="com_info.com_subbranch"/>
                            <span class="reg-msg"></span>
                        </div>
                        <div class="add_account_list">
                            <label class="w200">支行省份</label>
                            <input type="text" name="branchProvince" placeholder="举例：浙江省" v-model="com_info.com_province"/>
                            <span class="reg-msg"></span>
                        </div>
                        <div class="add_account_list">
                            <label class="w200">支行城市</label>
                            <input type="text" name="branchCity" placeholder="举例：杭州市" v-model="com_info.com_city"/>
                            <span class="reg-msg"></span>
                        </div>
                        <div class="add_account_list">
                            <label class="w200">联系人</label>
                            <input type="text" name="contact" placeholder="举例：张三" v-model="com_info.com_contact"/>
                            <span class="reg-msg"></span>
                        </div>
                        <div class="add_account_list">
                            <label class="w200">联系人电话</label>
                            <input type="text" name="contactTel" placeholder="举例：188 8888 8888" v-model="com_info.com_mobile"/>
                            <span class="reg-msg"></span>
                        </div>
                    </div>
                    <div class="submit_btn submit_com">
                        <input type="button" class="submit" value="确&nbsp;&nbsp;认" @click="comsubmit"/>
                    </div>
                </form>
                <form id="register_per" style="display:none;">
                    <div id="companyForm">
                        <div class="add_account_list">
                            <label class="w200">收款人名称</label>
                            <input type="text" name="personName" placeholder="举例： PingPong"/>
                            <span class="reg-msg"></span>
                        </div>
                        <div class="add_account_list">
                            <label class="w200">身份证号码</label>
                            <input type="text" name="personID" placeholder="举例：组织机构代码证"/>
                            <span class="reg-msg"></span>
                        </div>
                        <div class="add_account_list">
                            <label class="w200">企业名称</label>
                            <input type="text" name="companyName" placeholder="需要和注册时的信息一致"/>
                            <span class="reg-msg"></span>
                        </div>
                        <div class="add_account_list">
                            <label class="w200">账户币种</label>
                            <select class="pp-select" name="accountCurrency" style="width: 220px">
                                <option value="0">人民币(CNY)</option>
                                <option value="1">美金</option>
                            </select>
                            <span class="reg-msg"></span>
                        </div>
                        <div class="add_account_list">
                            <label class="w200">银行名称</label>
                            <input type="text" name="bankName" placeholder="举例：中国建设银行"/>
                            <span class="reg-msg"></span>
                        </div>
                        <div class="add_account_list">
                            <label class="w200">银行账号</label>
                            <input type="text" name="bankAccount" placeholder="对公银行账户"/>
                            <span class="reg-msg"></span>
                        </div>
                        <div class="add_account_list">
                            <label class="w200">银行代码（Swift Code）</label>
                            <input type="text" name="swiftCode" placeholder="举例：PCBCNNB" />
                            <span class="reg-msg"></span>
                        </div>
                        <div class="add_account_list">
                            <label class="w200">支行名称</label>
                            <input type="text" name="branchName" placeholder="举例：杭州银行萧山支行"/>
                            <span class="reg-msg"></span>
                        </div>
                        <div class="add_account_list">
                            <label class="w200">支行省份</label>
                            <input type="text" name="branchProvince" placeholder="举例：浙江省"/>
                            <span class="reg-msg"></span>
                        </div>
                        <div class="add_account_list">
                            <label class="w200">支行城市</label>
                            <input type="text" name="branchCity" placeholder="举例：杭州市"/>
                            <span class="reg-msg"></span>
                        </div>
                        <div class="add_account_list">
                            <label class="w200">联系人</label>
                            <input type="text" name="contact" placeholder="举例：张三"/>
                            <span class="reg-msg"></span>
                        </div>
                        <div class="add_account_list">
                            <label class="w200">联系人电话</label>
                            <input type="text" name="contactTel" placeholder="举例：188 8888 8888"/>
                            <span class="reg-msg"></span>
                        </div>
                    </div>
                    <div class="submit_btn submit_per">
                        <input type="submit" class="submit" value="确&nbsp;&nbsp;认" />
                    </div>
                </form>
            </div>
        </div>
        <div class="index_bottom">
            ©2015 www.pingpongx.com. All Rights Reserved. 浙ICP备15025700号-1
        </div>
</template>

<script>

  export default {
       data () {
        var com_info={
            com_payee:'',
            com_orgincode: '',
            com_company: '',
            com_currency: '',
            com_payee:'',
            com_orgincode: '',
            com_company: '',
            com_currency: '',
            com_bankname: '',
            com_bankaccout: '',
            com_bankcode: '',
            com_subbranch: '',
            com_province: '',
            com_city: '',
            com_contact: '',
            com_mobile: ''
        }
    return {
      com_infos:[com_info]
      
    }
  },
   ready: function () {
   
  },
  methods: {
    comsubmit: function () {
           function validateform(){

                jQuery.validator.addMethod("isTelephone", function(value, element) {
                var telephone = /^1([0-9]){10}$/;
                   return this.optional(element) || (telephone.test(value));
                },"请输入正确的手机格式");

                return $("#register_com").validate({
                rules: {
                    accountName: {
                        required: true
                    },
                    IDNum: {
                        required: true
                    },
                    personName: {
                        required: true
                    },
                    personID: {
                        required: true
                    },
                    companyName: {
                        required: true
                    },
                    bankName: {
                        required: true
                    },
                    bankAccount: {
                        required: true
                    },
                    accountCurrency: {
                        required: true
                    },
                    swiftCode: {
                        required: true
                    },
                    branchName: {
                        required: true
                    },
                    branchProvince: {
                        required: true
                    },
                    branchCity: {
                        required: true
                    },
                    contact: {
                        required: true
                    },
                    contactTel: {
                        required: true,
                        isTelephone: true
                    }
                },
                messages: {
                    accountName: {
                        required: "请输入您的收款单位"
                    },
                    IDNum: {
                        required: "请输入组织机构代码"
                    },
                    personName: {
                        required: "请输入收款人名称"
                    },
                    personID: {
                        required: "请输入身份证号码"
                    },
                    companyName: {
                        required: "请输入企业名称"
                    },
                    bankName: {
                        required: "请选择银行名称"
                    },
                    bankAccount: {
                        required: "请输入银行账号"
                    },
                    accountCurrency: {
                        required: "请选择账户币种"
                    },
                    swiftCode: {
                        required: "请输入银行代码"
                    },
                    branchName: {
                        required: "请输入支行名称"
                    },
                    branchProvince: {
                        required: "请输入支行省份"
                    },
                    branchCity: {
                        required: "请输入支行城市"
                    },
                    contact: {
                        required: "请输入联系人"
                    },
                    contactTel: {
                        required: "请输入联系人电话"
                    }
                },
                errorPlacement: function(error, element) {
                    var _errorText = error.html(),
                            $elem = element.closest("div").find("span.reg-msg");
                    if (_errorText != "") {
                        $elem.addClass("reg-error").removeClass("reg-right").html(_errorText);
                    } else {
                        $elem.addClass("reg-right").removeClass("reg-error").html("");
                    }
                },
                success: function (element){
                },
                submitHandler:function (form) {
                    alert ("验证通过");
                }
            }).form();

        }
   
        if( validateform() ){    
             this.$http.post('http://localhost:3000/api/', this.com_infos[0]).then(function (successResponse) {
             console.log(11);
             this.$dispatch('addmsg', this.com_infos[0])
             this.$route.router.go({path: '/incomemag', replace: true})
            }, function (errorResponse) {
              console.log(22);
            }) 
         }  
    }
  }
  }
</script>