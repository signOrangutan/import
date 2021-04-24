<template>
    <!-- 订单信息 -->
    <div class='order-page'>
        <div class="header d-flex justify-space-between align-center">
            <div class="header-info d-flex align-center">
                <span class="title">草缘食尚商业计划书V2.0</span>
                <span class="icon-word">WORD</span>
                <span class="icon-ppt">PPT</span>
            </div>
            <div class="amount">
                应付金额
                <span class="icon">¥</span>
                <span class="num">120.00</span>
            </div>
        </div>
        <div class="order-content">
            <p class="header">选择支付方式</p>
            <div class="pay-type">
                <div class="item"
                    :class="{'selected': pay=='wechat'}"
                    @click="changePay('wechat')"
                >
                    <span class="icon"></span>
                    <div class="wechat"></div>
                </div>
                <div class="item"
                    :class="{'selected': pay=='alipay'}"
                    @click="changePay('alipay')"
                >
                    <span class="icon"></span>
                    <div class="alipay"></div>
                </div>
            </div>
            <ul class="info-box">
                <li class="item">
                    <span class="label">订单总金额：</span>
                    <div class="num">
                        <span class="icon">¥</span>
                        40.00
                    </div>
                </li>
                <li class="item">
                    <span class="label">优惠券：</span>
                    <div class="num">
                        <span class="icon">¥</span>
                        -20.00
                    </div>
                </li>
                <li class="item">
                    <span class="label">PPT格式文档：</span>
                    <div class="num">
                        <span class="icon">¥</span>
                        100.00
                    </div>
                </li>
                <li class="item">
                    <span class="label">应付金额：</span>
                    <div class="num">
                        <span class="icon">¥</span>
                        120.00
                    </div>
                </li>
            </ul>
            <p class="btn-box">
                <v-btn color="primary" class="btn-pay">去支付</v-btn>
            </p>
            
        </div>
    </div>
</template>

<script>
    export default {
        data: function(){
            return {
                pay: ''
            }
        },
        methods: {
            changePay: function(type){
                this.pay = type
            }
        }
    }
</script>
<style lang='scss'>
    .order-page {
        .header{
           @extend .bg-white; 
            padding: 0 30px;
           .title {
               font-size: 20px !important;
               color: #333;
               font-weight: 500;
               line-height: 3.5;
               margin-right: 15px;
           }
           .icon-word, .icon-ppt {
               margin-left: 10px;
           } 
           .amount {
               font-size: 16px;
               color: #666;
               .icon, .num {
                   color: $primary-color;
               }
               .num {
                   font-size: 30px;
                   font-weight: 500;
               } 
           }
        }
        .order-content {
            @extend .bg-white;
            padding: 0 30px;
            padding-bottom: 60px;
            margin-top: 16px;
            color: #666;
            .header {
                padding: 0;
                font-size: 18px;
                line-height: 3.5;
                border-bottom: solid 1px #DCDCDC;
            }
            .pay-type {
                display: flex;
                padding-top: 15px;
                .item {
                    margin-left: 30px;
                    position: relative;
                    width: 160px;
                    height: 60px;
                    border: solid 1px #DCDCDC;
                    padding-top: 14px;

                    .wechat, .alipay {
                        margin: 0 auto;
                    }
                    .wechat {
                        width: 104px;
                        height:32px;
                        background: url('../../../assets/img/386.png') center/cover no-repeat;
                    }
                    .alipay {
                        width: 76px;
                        height: 32px;
                        background: url('../../../assets/img/387.png') center/cover no-repeat;
                    }

                    .icon {
                        position: absolute;
                        display: inline-block;
                        content: '';
                        width: 20px;
                        height: 20px;
                        border: solid 1px #DCDCDC;
                        border-radius: 50%;
                        top: 20px;
                        left: -30px;

                        &::before {
                            position: absolute;
                            display: inline-block;
                            width: 14px;
                            height: 14px;
                            content: '';
                            background-color: #ccc;
                            border-radius: 50%;
                            top: 2px;
                            left: 2px;
                        }
                    }
                    &:last-child {
                        margin-left: 80px;
                    }
                }
                .selected {
                    .icon{
                        &::before {
                            background-color: $primary-color;
                        }
                    }
                    
                }
            }
            .info-box {
                display: flex;
                flex-direction: column;
                
                margin-top: 50px;
                margin-left: auto;
                font-size: 16px;
                text-align: right;
                list-style-type: none;
                line-height: 2;
                .item {
                    width: 20%;
                    align-self: flex-end;
                    display: flex;
                    align-items: center;
                    .label{
                        width: 60%;
                    }
                    .num {
                        flex: 1;
                        color: $primary-color;
                        font-weight: 500;
                        .icon {
                            font-size: 12px;
                        }
                    }
                    &:last-child {
                        border-top: solid 1px #ccc;
                        .num {
                            font-size: 20px;
                        }
                    }
                    
                }
            }
            .btn-box {
                display: flex;
                justify-content: flex-end;
                
                .btn-pay {
                    margin-top: 10px;
                }
            }
            
        }
    }
</style>