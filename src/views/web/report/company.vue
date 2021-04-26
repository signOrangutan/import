<template>
    <!-- 企业信息 -->
    <div class='company-page'>
        <p class="title text-center">公司资料</p>
        <div class="form-container d-flex">
            <div class="company flex-grow-1">
                
                <p class="text-center">
                    <span class="company-info">公司介绍</span>
                </p>
                <div class="form-item">
                    <label class="label required">请输入公司名称</label>
                    <input class="item-input" type="text">
                </div>
                <div class="form-item">
                    <label class="label  required">请选择成立时间</label>
                    <input class="item-input" type="text">
                </div>
                <div class="form-item">
                    <label class="label">请输入注册资金</label>
                    <input class="item-input" type="text">
                </div>
                <div class="form-item">
                    <label class="label">请输入股权结构</label>
                    <input class="item-input" type="text">
                </div>
                 <div class="form-item">
                    <label class="label">请输入经营范围</label>
                    <input class="item-input" type="text">
                </div>
            </div>
            <div class="team flex-grow-1">
                <p class="text-center">
                    <span class="company-info">团队介绍</span>
                </p>
                <div class="form-item">
                    <label class="label">请输入创始人姓名</label>
                    <input class="item-input" type="text">
                </div>
                <div class="form-item">
                    <label class="label">请输入创始人工作经历</label>
                    <input class="item-input" type="text">
                </div>
                <div class="form-item">
                    <label class="label">请输入运营负责人姓名</label>
                    <input class="item-input" type="text">
                </div>
                <div class="form-item">
                    <label class="label">请输入运营负责人工作经历</label>
                    <input class="item-input" type="text">
                </div>
                <div class="form-item">
                    <label class="label">请输入营销负责人</label>
                    <input class="item-input" type="text">
                </div>
                 <div class="form-item">
                    <label class="label">请输入营销负责人工作经历</label>
                    <input class="item-input" type="text">
                </div>
            </div>
        </div>
        <div class="btn-next">下一步</div>
    </div>
</template>

<script>
    export default {
        data: function(){
            return {

            }
        }
    }
</script>
<style lang='scss'>
    .company-page {
        @extend .main-content;
        @extend .bg-white;
        padding: 50px 110px 10px 110px;

        .title {
            font-size: 48px !important;
            color: #333;
            font-weight: 500;
            margin-bottom: 50px;
        }

        .form-container {
            .company, .team {
                .company-info {
                    text-align: center;
                    position: relative;
                    color:#333;
                    padding: 0 37px;
                    &::before, &::after{
                        position: absolute;
                        display:inline-block;
                        content: '';
                        width: 25px;
                        height: 16px;
                        top: 4px;
                    }

                    &::before {
                        left: 0;
                        background: url('../../../assets/img/391.png') center/cover no-repeat;
                    }
                    &::after {
                        right: 0;
                        background: url('../../../assets/img/390.png') center/cover no-repeat;
                    }
                }

                .form-item {
                    color: #666;
                    font-size: 14px;
                    display: flex;
                    flex-direction: column;
                    width: 90%;
                    line-height: 3;

                    .required {
                        &::after {
                            content: '*';
                            color: $primary-color;
                            font-size: 18px;
                            margin-left: 7px;
                        }
                    }
                    .item-input {
                        outline: none;
                        border:  solid 1px #D2D2D2;
                        color: #333;
                        font-size: 16px;
                        border-radius: 4px;

                    }
                }
            }
            
        }
        .btn-next {
            text-align: center;
            width: 180px;
            margin: 30px auto;
            border-radius: 4px;
            background-color: $primary-color;
            color: #fff;
            font-size: 18px;
            line-height: 2.7;

            &::after {
                display: inline-block;
                width: 22px;
                height: 6px;
                content: '';
                background: url('../../../assets/img/384.png') center/cover no-repeat;
                margin-left: 10px;
            }
        }
    }

</style>