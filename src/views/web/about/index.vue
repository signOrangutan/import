<template>
    <!-- 关于我们 -->
    <div class="about-page">
        <div class='about-main mx-auto d-flex flex-space-between'>
            <div class="menu d-flex flex-column">
                <div class="item text-center"
                    v-for="(nav, index) in menus" :key="index"
                    :class="{selected: current==nav.index}"
                    @click="handleMenu(nav)"
                >{{nav.title}}</div>
            </div>
            <!-- 公司简介 -->
            <div class="content company" v-show="current==0">
                <v-img src="../../../assets/img/366.png" alt="" />
                <p class="content-title">关于报告易</p>
                <p class="content-info">四川报告易科技股份有限公司（简称报告易）是一家助力中小企业数字化经营升级的企业，创立于2010年10月，于2015年7月成功上市国内“新三板”，股票代码：832828。多年来，坚持以“让中小企业经营更简单”的企业理念，为海量中小企业用户提供优质的互联网产品与服务。目前，旗下拥有职能生成报告业务板块，覆盖全场景营销门户、智慧电商零售、数字化门店、自助式营销、人工智能设计、智能销售推广等多种中小企业经营场景，帮助用户借助互联网技术的力量，更高效地进行经营。经过不断创新，凡科已获得高新技术企业、四川省守合同重信用企业等多项殊荣，现今用户已超过2400万，覆盖全国各地，并把业务拓展至海外。</p>
            </div>
            <!-- 产品简介 -->
            <div class="content production" v-show="current==1">
                产品简介
            </div>
            <!-- 联系我们 -->
            <div class="content contanct-us" v-show="current==2">
                <p class="contanct-title">
                    联系邮箱
                </p>
                <span class="email">service@aogaoyi.com</span>
                <p class="contanct-title">
                    联系客服
                </p>
                <v-btn class="primary">点击联系客服</v-btn>
                <p class="contanct">官方QQ群： 884573849</p>
            </div>
        </div>
    </div>
    
</template>

<script>
    export default {
        data: function(){
            return {
                menus: [
                    { title:'公司简介', index: 0},
                    { title:'产品简介', index: 1},
                    { title:'联系我们', index: 2}
                ],
                current: 0
            }
        },
        methods: {
            handleMenu: function(nav){
                this.current = nav.index
            }
        }
    }
</script>
<style lang='scss'>
    .about-page {
        @extend .content-bg;

        .about-main {
            @extend .max-container;
            
            padding-top: 30px;
            padding-bottom: 60px;
            
            .menu {
                width: 200px;
                height: 480px;
                margin-right: 10px;

                .item {
                    position: relative;
                    font-size: 18px;
                    line-height: 4.2;
                    border-bottom: solid 1px #E6E6E6;

                    &:last-child {
                        border-bottom: none;
                    }
                }
                .selected {
                    @extend .text-primary;
                    font-weight: bold;
                    &::before {
                        content: '';
                        position: absolute;
                        left: 0;
                        top: 24px;
                        display: inline-block;
                        width: 2px;
                        height: 26px;
                        background-color: $primary-color;
                    }
                }
            }

            .menu, .content {
                @extend .bg-white;
            }
            .content {
                flex: 1;

                padding: 35px;
            }
            .company {
                .content-title {
                    margin-top: 20px;
                    font-size: 24px;
                    font-weight: 500;
                    color: #333;
                }
                .content-info {
                    font-size: 14px;
                    color: #666;
                    font-weight: 400;
                    line-height: 1.8;
                }
            }

            .contanct-us {
                .contanct-title {
                    font-size: 24px;
                    font-weight: 500;
                    color: #333;

                    &:last-child{
                        margin-top: 40px;
                    }
                }
                .email {
                    margin-bottom: 40px;
                }
                .contanct {
                    margin-top: 10px;
                    font-size: 16px;
                }
            }
        }
    }
    
</style>