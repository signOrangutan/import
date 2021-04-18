<template>
    <!-- 定制服务 -->
    <div class='service-page'>
        <!-- 顶部封面 -->
        <div class="cover-box">
            <div class="cover-content mx-auto">
                <p class="mb-0 text-h4">专业定制</p>
                <p class="mb-0 text-h4">商业计划书及各类报告</p>
                <p class="mb-0 tip">百名咨询顾问 多对一服务 精心打造您的报告</p>
                <v-btn class="primary">我要申请定制</v-btn>
            </div>
        </div>
        <div class="production-show">
            <div class="prod-content mx-auto">
                <p class="mb-0 service-title">产品展示</p>
                <div class="content-list">
                    <div class="prod-item" v-for="(item, index) in prod" :key="index">
                        <span class="icon"></span>
                        <p class="mb-0 content-title">{{item.title}}</p>
                        <p class="item-info">{{item.info}}</p>
                        <v-btn >更多内容请联系客服咨询</v-btn>
                    </div>
                </div>
            </div>
            
        </div>
        <div class="service-guarantee">
            <p class="mb-0 service-title">服务保障</p>
            <div class="service-content mx-auto">
                <div 
                    class="service-item d-flex justify-space-between" 
                    v-for="(item, index) in service" :key="index">
                    <span class="icon"></span>
                    <div class="item-content">
                        <div class="item-title" v-html="item.title"></div>
                        <div class="item-info" v-html="item.info"></div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 流程服务 -->
        <div class="service-step">
            <p class="mb-0 service-title">流程服务</p>
            <div class="step-content max-container mx-auto">
                <img class="step-img" src="../../../assets/img/357.png" alt="">
            </div>
        </div>
        <!-- form表单 -->
        <div class="form-container">
            <div class="form-main text-center">
                <p class="form-title">提交表单，行业咨询顾问一对一沟通</p>
                <p class="form-title"> One to one communication with industry consultants</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: function(){
            return {
                prod: [
                    {
                        icon: '',
                        title:'商业计划书类',
                        info: '项目计划书、商业策划书、招商及刷书、创业计划书、私募、并购、合作等',
                        key:'proposal'
                    },
                    {
                        icon: '',
                        title:'可行性研究报告类',
                        info: '可行性研究报告、项目申请报告、项目建议书、立项报告等',
                        key:'feasibility'
                    },
                    {
                        icon: '',
                        title:'feasibility',
                        info: '项目计划书、商业策划书、招商及刷书、创业计划书、私募、并购、合作等',
                        key:'suggest'
                    },
                    {
                        icon: '',
                        title:'资金申请报告类',
                        info: '项目计划书、商业策划书、招商及刷书、创业计划书、私募、并购、合作等',
                        key:'apply'
                    },
                    {
                        icon: '',
                        title:'其他报告类',
                        info: '项目计划书、商业策划书、招商及刷书、创业计划书、私募、并购、合作等',
                        key:'other'
                    }
                ],
                service: [
                    {
                        title:'多对一定制服务',
                        info: '专属顾问沟通，项目组多对一策划，3-5个工作日交稿'
                    },
                    {
                        title:'10年经验,品质保证',
                        info: '专注资咨询行业10年，20000+项目实战经验，深谙投资人关注重点'
                    },
                    {
                        title:"全行业覆盖,<br/>项目快速落地",
                        info: '百名咨询顾问资源实力背书，助力各行业赛道优质项目快速落地'
                    },
                    {
                        title:'大量行业数据，<br/>海量数据库支撑',
                        info: '与国内知名数据调研机构强强联合，及时把握最新产业趋势'
                    },
                    {
                        title:'诚信至上,严格保密',
                        info: '按期交付，承诺违约退款，签订保密协议，后续项目保障无忧'
                    },
                    {
                        title:'售后无忧,免费协议提供',
                        info: '30日售后期免费修改，全程公司监察部跟进；免费提供项目执行过程中的协议/合同。'
                    }
                ]
            }
        }
    }
</script>
<style lang='scss'>
    .service-page {

        .cover-box {
            margin-top: -35px;
            width: 100%;
            // max-height: 678px;
            background: url('../../../assets/img/352.png') center/cover no-repeat;
            
            .cover-content {
                padding-top: 167px;
                padding-bottom: 177px;
                @extend .max-container;
                line-height: 1.4;
                .tip {
                    color: #555555;
                    line-height: 3;
                    @extend .font-size-18;
                }
            }
        }
        .production-show {
            @extend .content-bg;

            .prod-content {
                @extend .main-content;

                .content-list {
                    display: grid;
                    grid-template-columns: repeat(3, 31%);
                    grid-column-gap: 25px;
                    grid-row-gap: 25px;
                    padding-bottom: 5%;
                   
                   .prod-item {
                       @extend .bg-white;
                       padding: 30px 30px 25px 30px;
                       .icon {
                           display: inline-block;
                       }
                       &:nth-child(1) {
                            .icon {
                               width: 53px;
                               height: 58px;
                               background: url('../../../assets/img/354.png') center/cover no-repeat;
                           }
                       }
                       &:nth-child(2) {
                            .icon {
                               width: 60px;
                               height: 58px;
                               background: url('../../../assets/img/358.png') center/cover no-repeat;
                           }
                       }
                       &:nth-child(3) {
                            .icon {
                               width: 60px;
                               height: 60px;
                               background: url('../../../assets/img/359.png') center/cover no-repeat;
                           }
                       }
                       &:nth-child(4) {
                            .icon {
                               width: 63px;
                               height: 60px;
                               background: url('../../../assets/img/355.png') center/cover no-repeat;
                           }
                       }
                       &:nth-child(5) {
                            .icon {
                               width: 49px;
                               height: 58px;
                               background: url('../../../assets/img/356.png') center/cover no-repeat;
                           }
                       }
                       .content-title {
                           font-size: 30px;
                           font-weight: bold;
                           line-height: 2;
                       }
                       .item-info {
                           font-size: 18px;
                           
                       }
                   } 
                }
                
            }
        }

        .service-guarantee {
            .service-content {
                @extend .max-container;
                display: grid;
                grid-template-columns: repeat(3, 31%);
                grid-column-gap: 28px;
                grid-row-gap: 28px;
                padding-bottom: 5%;

                .service-item {
                    border: 1px solid #DFE2E3;
                    box-shadow: 0px 4px 30px 0px rgba(2, 0, 40, 0.06);
                    border-radius: 4px;
                    padding: 13px 28px auto 21px;

                    .icon {
                        display: inline-block;
                        width: 117px;
                        height: 117px;
                        border-radius: 50%;
                    }
                    &:nth-child(1) {
                        .icon {
                            background: url('../../../assets/img/344.png') center/cover no-repeat;
                        }
                    }
                    &:nth-child(2) {
                        .icon {
                            background: url('../../../assets/img/345.png') center/cover no-repeat;
                        }
                    }
                    &:nth-child(3) {
                        .icon {
                            background: url('../../../assets/img/346.png') center/cover no-repeat;
                        }
                    }
                    &:nth-child(4) {
                        .icon {
                            background: url('../../../assets/img/347.png') center/cover no-repeat;
                        }
                    }
                    &:nth-child(5) {
                        .icon {
                            background: url('../../../assets/img/348.png') center/cover no-repeat;
                        }
                    }
                    &:nth-child(6) {
                        .icon {
                            background: url('../../../assets/img/349.png') center/cover no-repeat;
                        }
                    }
                    .item-content {
                        flex: 1;
                        .item-title {
                            margin-top: 20px;
                            font-size: 22px;
                            font-weight: bold;
                            @extend .text-primary;
                        }
                        .item-info {
                            font-size: 16px;
                            color: #666666;
                            line-height: 2;
                        }
                    }
                } 
            }
        }
        
        .service-step {

            .step-content {
                margin-top: -30px;
                .step-img {
                    width: 100%;
                }
            }
        }
        .form-container {
            @extend .content-bg;

            .form-main {
                @extend .max-container;

            }
        }
    }
</style>