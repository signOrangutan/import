<template>
    <!-- 对接投资人 -->
    <div class='investor-page'>
        <div class="investor-main mx-auto">
            <div class="content-header d-flex justify-space-between">
                <div class="content-box">
                    <p class="content-title d-flex">
                        <span class="icon"></span>
                        <span>如何对接投资人</span>
                    </p>
                    <p class="tags">
                        <span class="item-tag">姓名</span>
                        <span  class="item-tag">投资人</span>
                        <span class="item-tag">投资人编号</span>
                        <span class="item-tag">商业计划书</span>
                    </p>
                    <p class="mb-0 content-info">请将以上信息及商业计划书投递到邮箱：</p>
                    <p class="content-email">yindi8431@dingtalk.com</p>
                    <p class="mb-0 content-info"> (如无匹配投资人可单独备注项目行业进行投递)</p>
                </div>
                <div class="content-chart"></div>
            </div>

            <div class="content">
                <div 
                    class="content-item d-flex" 
                    v-for="(item,index) in list" :key="index"
                >
                    <div class="item-left">
                        <p class="mb-0 info-name">
                            <span class="name">陈先生</span>
                            <span class="job"> 总监</span>
                        </p>
                        <p class="company">上海市某资产管理公司</p>
                        <p class="mb-0 item-info">投资领域：IT、通讯、金融</p>
                        <p class="mb-0 item-info">公司性质：民营</p>
                        <p class="mb-0 item-info">所在城市：深圳</p>

                    </div>
                    <div class="item-right">
                        <v-avatar class="avatar" color="indigo" size="100">
                            <span class="white--text headline">36</span>
                        </v-avatar>
                        <p class="serial text-center">投资人编号：001</p>
                    </div>
                </div>
            </div>
            <div class="paginate">
                <v-pagination
                    v-model="page"
                    :length="6"
                ></v-pagination>
                </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: function(){
            return {
                list: [{},{},{},{},{},{}],
                page: 1
            }
        }
    }
</script>
<style lang='scss'>
    .investor-page {
        background: url('../../../assets/img/294.jpeg') center/cover no-repeat;
        .investor-main {
            @extend .max-container;
            padding-top: 42px;
            .content-header {
                
                padding: 28px 96px 22px 24px;
                @extend .bg-white;
               box-shadow: 0px 8px 10px 0px rgba(38, 16, 0, 0.03);
               .content-box {

                   .content-title {
                       font-size: 22px;
                       font-weight: bold;
                       .icon {
                           margin-right: 10px;
                           display: inline-block;
                           width: 26px;
                           height: 26px;
                           background: url('../../../assets/img/360.png') center/cover no-repeat;
                       }
                   }
                   .tags {
                       .item-tag {
                           font-size: 18px;
                           margin-right: 12px;
                           display: inline-block;
                           padding: 13px 24px;
                           border-radius: 4px;
                           border: solid 1px #DCDCDC;
                           @extend .text-primary;
                           &:first-child {
                               margin-left: 20px;
                           }
                       }
                    }
                    .content-info {
                        margin-left: 20px;
                        font-size: 20px;
                    }
                    .content-email {
                        margin-left: 20px;
                        font-size: 24px;
                        @extend .text-primary;
                        font-weight: bold;
                    }
               }
               .content-chart {
                  width: 235px;
                  height: 235px;
                  background: url('../../../assets/img/361.png') center/cover no-repeat;
               }
            }

            .content {
                margin-top: 40px;
                margin-bottom: 65px;
                display: grid;
                grid-template-columns: repeat(3,383px);
                grid-gap: 31px 26px;

                .content-item {
                    width: 383px;
                    height: 220px;
                    background: url('../../../assets/img/362.png') center/cover no-repeat;
                
                    .item-left {
                        width: 60%;
                        line-height: 2;
                        padding-left: 20px;
                        padding-top: 30px;
                        .info-name {
                            font-size: 23px;
                            font-weight: bold;

                            .name {
                                color: #333;
                            }
                            .job {
                                color: #666;
                            }
                        }
                        .company {
                            font-size: 16px;
                            margin-bottom: 12px;
                        }
                        .item-info {
                            font-size: 14px;
                            
                        }
                    }
                    .item-right {
                        flex: 1;
                        .avatar {
                            margin-top: 30px;
                            margin-left: 20px;
                        }

                        .serial {
                            font-size: 14px;
                            @extend .text-primary;
                            margin-top: 50px;
                        }
                    }

                }
            }
            .paginate {
                margin-bottom: 70px;
            }
        }
    }
</style>