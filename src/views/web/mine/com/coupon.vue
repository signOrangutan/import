<template>
    <!-- 优惠券 -->
    <div class='com-coupon'>
        <tabs 
            :current="current" 
            :tabData="tabData"
            @handleClick="handleClick"
            ></tabs>
            <!-- 优惠券列表 -->
        <div class="coupon-list">
            <div 
                class="coupon-item"
                v-for="(item,index) in couponList" :key="index"
                :class="{
                    used: item.status==2,
                    expire: item.status==3
                }"
            >
            <div class="content-header d-flex align-center">
                <div class="amount">
                    <span class="symbol">¥</span>
                    <span class="num">100</span>
                </div>
                <div class="caption" v-html="item.caption"></div>
            </div>
            <div class="content-footer">
                使用期限： 2017.10.27 - 2017.11.27
            </div>
            </div>
        </div>
    </div>
</template>

<script>
    import tabs from '@/components/web/tabs/tabs'
    export default {
        components:{
            tabs
        },
        data: function(){
            return {
                tabData:[
                    {name: '全部'},
                    {name: '未使用'},
                    {name: '已使用'},
                    {name: '已过期'},

                ],
                current: 0,
                couponList:[
                    {caption:'新用户专享优惠券<br/>注册即送', status: 1},
                    {caption:'新用户专享优惠券<br/>注册即送', status: 2},
                    {caption:'新用户专享优惠券<br/>注册即送', status: 3},
                    {caption:'新用户专享优惠券<br/>注册即送', status: 1}
                ]
            }
        },
        methods: {
            handleClick: function(index){
                this.current = index
            }
        }
    }
</script>
<style lang='scss'>
    .com-coupon {

        .coupon-list {
            margin-top: 50px;
            display: grid;
            grid-template-columns: repeat(2, 48%);
            grid-gap: 34px 24px;

            .coupon-item {
                position: relative;
                background: #FFFFFF;
                box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.08);
                border-radius: 14px;
                
                padding-top: 30px;

                &::after{
                    position: absolute;
                    content: '';
                    width: 79px;
                    height: 43px;
                    top: 40px;
                    right: 16px;
                }

                .content-header {
                    padding-left: 24px;
                    margin-bottom: 20px;
                    .amount {
                        border-right: solid 1px #FD5151;
                        padding-right: 20px;
                        margin-right: 23px;
                        line-height: 1.2;
                        .symbol {
                            font-size: 14.4px;
                            color: #FF4D6A;
                        }
                        .num {
                            color: #FD5151;
                            font-size: 36px;
                            font-weight: 500;
                        }
                    }
                    
                    .caption {
                        font-size: 22px;
                        color: #101010;
                    }
                }
                .content-footer {
                    margin: 0 18px;
                    padding-left: 7px ;
                    border-top: solid 1px #E1E1E1;
                    line-height: 3;
                    font-size: 16px;
                    color: #969696;
                }
            }

            .used {
                
                &::after {
                    background: url('../../../../assets/img/378.png') center/cover no-repeat;
                }
                .content-header{
                    .amount {
                        .num {
                            color: #999; 
                        }
                    }
                }
                
            }
            .expire {
                &::after {
                    background: url('../../../../assets/img/378.png') center/cover no-repeat;
                }
                .content-header{
                    .amount {
                        .num {
                            color: #999;
                        }
                    }
                    .caption {
                        color: #999;
                    }
                }
            }
        }
    }
</style>