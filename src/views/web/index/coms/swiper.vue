<template>
    <!-- 轮播图 -->
    <div class='com-sub-swpier'>
        <div class="step-container">
            <p class="header">专业编辑能力，  用更少的时间完成工作</p>
            <p class="step-info">科技为创作赋能， 无需重复劳动， 更多时间留给演示创作</p>
            <p class="step-info">迅速上手操作， 只要会打字， 就能制作专业的演示效果</p>
            <div class="step-list">
                <div class="item" 
                :class="{'active': active == 'choose'}"
                @click="handleClick('choose')"
                >
                    <span class="icon choose"></span>
                    <span class="item-title">行业选择</span>
                </div>
                <div class="item"
                    :class="{'active': active == 'form'}"
                    @click="handleClick('form')"
                >
                    <span class="icon form"></span>
                    <span class="item-title">表格填写</span>
                </div>
                <div class="item"
                    :class="{'active': active == 'preview'}"
                    @click="handleClick('preview')"
                >
                    <span class="icon preview"></span>
                    <span class="item-title">预览付费</span>
                </div>
            </div>
            <p class="content-text">逻辑很重要，一键轻松搞定页面排版</p>
        </div>
        <div class="swiper-container">
            <img class="img" src="../../../../assets/img/15.png" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        data: function(){
            return {
                active: 'choose'
            }
        },
        methods:{
            handleClick: function(val){
                this.active = val
            }
        }
    }
</script>
<style lang='scss'>
    .com-sub-swpier {
        background-color: #D8F1EB;
        text-align: center;
        
        .step-container {
            padding-top: 30px;
            width: 936px;
            margin: 0 auto;
            overflow: auto;
            p {
                margin-bottom: 0;
            }
            .header {
                line-height: 2;
                font-size: 36px;
            }
            .step-info {
                font-size: 16px;
                line-height: 1.5;
            }
            .content-text {
                font-size: 24px;
                margin-bottom: 70px;
            }

            .step-list {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-top: 30px;
                border-bottom: 1px solid #D1D1D1;
                margin-bottom: 20px;
                .item {
                    position: relative;
                    .icon {
                        display: inline-block;
                        width: 36px;
                        height: 36px;
                    }
                    .choose {
                        background: url('../../../../assets/img/icon_01.png') center/cover no-repeat;
                    }
                    .form {
                        background: url('../../../../assets/img/icon_02.png') center/cover no-repeat;
                    }
                    .preview {
                        background: url('../../../../assets/img/icon_03.png') center/cover no-repeat;
                    }

                    .item-title {
                        font-size: 24px;
                        margin-left: 16px;
                        vertical-align: top;
                    }
                }
                .active {
                    &::after {
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        content: '';
                        width: 100px;
                        height: 4px;
                        background-color: #FC7E23;
                        border-radius: 2px;
                    }
                    .choose {
                        background: url('../../../../assets/img/01_light.png') center/cover no-repeat;
                    }
                    .form {
                        background: url('../../../../assets/img/02_light.png') center/cover no-repeat;
                    }
                    .preview {
                        background: url('../../../../assets/img/03_light.png') center/cover no-repeat;
                    }
                    .item-title {
                        color:#FC7E23;
                    }
                }
            }
        }
        
        .swiper-container {
            width: 100%;
            .img {
                margin: 0 auto;
                width: 936px;
            }
        }
    }
</style>