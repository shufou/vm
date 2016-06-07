<template>
    <div class="account_message clearfix" style="margin-top:30px;">
        <div class="message_title">点击账户查看详情</div>
        <ul class="account_meg clearfix">
            <li class="clearfix account_li acc_active" v-for='accoutlist in accoutlists'>
                <div class="amz_pic">
                    <span style="height:100%;display:inline-block;vertical-align: middle;"></span>
                    <img src="../../static/imgs/amazon.png"></div>
                <div class="account_tip">
                    <ul>
                        <li>{{accoutlist.company}}</li>
                        <li>{{accoutlist.merchant}}</li>
                        <li style="color: #0fb6ff;font-size: 12px;margin:7px 0 15px;">{{accoutlist.accountnum}}</li>
                        <li>
                            余额 $
                            <span class="balance_num" style="font-size: 16px;">{{accoutlist.amount}}</span>
                        </li>
                    </ul>
                </div>
            </li>
            <li class="clearfix account_li add_add" @click="addAccout">
                <div class="add_user">
                    <p style="font-size:67px;">+</p>

                    <p style="font-size: 20px;margin-top:-25px;">添加账户</p>
                </div>
            </li>
        </ul>
        <div class="account_detail">
            <div class="detail_nav">
                <ul class="trade_bill">
                    <li class="detail_active" @click="detailActive">交易明细</li>
                    <li @click="detailActive">账单明细</li>
                </ul>
                <div class="check_load">
                    <a class="check">查询</a>
                    <a class="load">下载</a>
                </div>
                <div class="choose_date">
                    <label>选择日期</label>
                    <input class="ck_date" type="text" onclick="laydate({istime: true, format: 'YYYY.MM.DD'})">
                    <label>至</label>
                    <input class="ck_date" type="text" onclick="laydate({istime: true, format: 'YYYY.MM.DD'})">
                </div>
            </div>
            <div class="trade_table acc_table_det">
                <table class="account_table">
                    <tbody>
                    <tr>
                        <th></th>
                        <th>交易ID</th>
                        <th>申请日期</th>
                        <th>收益类型</th>
                        <th>收益名</th>
                        <th>收益账号</th>
                        <th>提现金额</th>
                        <th>到账金额</th>
                        <th>状态</th>
                    </tr>
                    <tr v-for='tradelist in tradelists'>
                        <td>{{tradelist.number}}</td>
                        <td>{{tradelist.tradeid}}</td>
                        <td>{{tradelist.applydate}}</td>
                        <td>{{tradelist.incometype}}</td>
                        <td>{{tradelist.incomename}}</td>
                        <td>{{tradelist.incomeaccout}}</td>
                        <td>{{tradelist.pickcash}}</td>
                        <td>{{tradelist.entrycash}}</td>
                        <td class="ck_detail">查看</td>
                    </tr>
                    </tbody>
                </table>
                <div id="pagetrade" class="pagination"><!-- 这里显示分页 --></div>
            </div>
            <div class="bill_table acc_table_det" style="display:none;">
                <table class="account_table">
                    <tbody>
                    <tr>
                        <th>日期</th>
                        <th>交易ID</th>
                        <th>结汇日期</th>
                        <th>描述</th>
                        <th>出账</th>
                        <th>出账人民币金额</th>
                        <th>大陆银行账号</th>
                        <th>入账</th>
                        <th>余额</th>
                        <th>备注</th>
                    </tr>
                    <tr v-for='billlist in billlists'>
                        <td>{{billlist.applydate}}</td>
                        <td>{{billlist.billid}}</td>
                        <td>{{billlist.exchangetime}}</td>
                        <td>{{billlist.description}}</td>
                        <td>${{billlist.charge}}</td>
                        <td>${{billlist.chargermb}}</td>
                        <td>{{billlist.bankaccout}}</td>
                        <td>${{billlist.entrycash}}</td>
                        <td>${{billlist.amount}}</td>
                        <td class="ck_detail">{{billlist.remark}}</td>
                    </tr>
                    </tbody>
                </table>
                <div id="pagebill" class="pagination"><!-- 这里显示分页 --></div>
            </div>
        </div>
        <div class="index_bottom">
            ©2015 www.pingpongx.com. All Rights Reserved. 浙ICP备15025700号-1
        </div>
    </div>
</template>

<script>
import pagination from '../../static/js/jquery.pagination.js'
import laydate from '../../static/js/laydate.js'

  export default {
       data () {
    return {
      accoutlists:'',
      tradelists:'',
      billlists:''
    }
  },
   ready: function () {
    var _this=this;
    var _arrytrade=[];
    var _arrybill=[];
    //var _total;
        _this.$http.get('accoutlists.json').then(function(response) {
            _this.accoutlists=response.data;
        },function(response) {
            console.log(response);
        });

        //一次性返回数据
        var tradePagination = function() {
            $("#pagetrade").pagination(_arrytrade.length, {            
                 callback: tradeCallback,            
                 prev_text: '上一页',             
                 next_text: '下一页',              
                 items_per_page: 10,  
                 num_edge_entries: 1,            
                 num_display_entries: 4                             
            });
        };
        function tradeCallback(pageIndex) { 
                event.preventDefault();
                _this.tradelists=_arrytrade.slice(pageIndex*10,(pageIndex+1)*10);
         };

         _this.$http.get('tradelists.json').then(function(response) {
                _arrytrade=response.data;
                tradePagination();
            },function(response) {
            console.log(response);
        }); 

        /* //按页码返回数据
            PageCallback(0);
            
            $("#Pagination").pagination(_total, {            
                 callback: PageCallback,            
                 prev_text: '上一页',             
                 next_text: '下一页',              
                 items_per_page: 10,  
                 num_edge_entries: 1,            
                 num_display_entries: 4                             
            });

        function PageCallback(pageIndex) { 
             event.preventDefault();
            _this.$http.get('tradelists.json',{"pageIndex":pageIndex+1,"pageSize":10}).then(function(response) {
                _total=response.data.length;
                _this.tradelists=response.data;
            }); 
         }*/

           //一次性返回数据
        var billPagination = function() {
            $("#pagebill").pagination(_arrybill.length, {            
                 callback: billCallback,            
                 prev_text: '上一页',             
                 next_text: '下一页',              
                 items_per_page: 10,  
                 num_edge_entries: 1,            
                 num_display_entries: 4                             
            });
        };
        function billCallback(pageIndex) { 
                event.preventDefault();
                _this.billlists=_arrybill.slice(pageIndex*10,(pageIndex+1)*10);
         };

        this.$http.get('billlists.json').then(function(response) {
            _arrybill=response.data;
            billPagination();
        },function(response) {
            console.log(response);
        });  
  },
  methods: {
    detailActive: function(e){
        var _this=$(e.target);
        var _index=_this.index();
        var acc_table=$(".acc_table_det");
        _this.addClass("detail_active").siblings().removeClass("detail_active");
        acc_table.hide();
        acc_table.eq(_index).show();
    }
  }
  }
</script>