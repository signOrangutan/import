<template>
    <!-- 四大优势 -->
    <div class='com-sub-advantage'>
        <p class="title">四大优势</p>
        <div class="list">
            <div class="item">
                <span class="item-cover one"></span>
                <div class="content">
                    <p class="title">质量</p>
                    <p class="item-text active">百人团队匠心制作</p>
                    <p class="item-text">海量数据库智能生成</p>
                </div>
            </div>
            <div class="item">
                <span class="item-cover two"></span>
                <div class="content">
                    <p class="title">价格</p>
                    <p class="item-text">更高的品质</p>
                    <p class="item-text">更低的价格</p>
                </div>
            </div>
            <div class="item">
                <span class="item-cover three"></span>
                <div class="content">
                    <p class="title">交期</p>
                    <p class="item-text active">10秒生成优质报告</p>
                </div>
            </div>
            <div class="item">
                <span class="item-cover four"></span>
                <div class="content">
                    <p class="title">交付</p>
                    <p class="item-text">先看报告</p>
                    <p class="item-text active">满意后再付款</p>
                </div>
            </div>
        </div>
        <v-btn color="#fff" class="advantage-btn">一键智能生成</v-btn>
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
    .com-sub-advantage {
        text-align: center;
        padding-bottom: 70px;
        .title {
            font-size: 36px;
            line-height: 3;
            margin-bottom: 30px;
        }
        .list {
            display: flex;
            justify-content: space-around;
            margin-bottom: 50px;
            .item {
                text-align: center;
                .item-cover {
                    display: inline-block;
                    width: 150px;
                    height: 140px;
                }
                .content {
                    margin-top: -10px;
                    p {
                        margin-bottom: 0;
                    }
                    .title {
                        font-size: 22px;
                        color: #000;
                        font-weight: bold;
                    }
                    .item-text {
                        font-size: 20px;
                        line-height: 1.5;
                        color: #333;
                    }
                    .active {
                        color: #FD7D22;
                    }
                }
            }
            .one {
                background: url('../../../../assets/img/01.png') center/cover no-repeat;
            }
            .two {
                background: url('../../../../assets/img/49.png')  center/cover no-repeat;
            }
            .three {
                background: url('../../../../assets/img/03.png') center/cover no-repeat;
            }
            .four {
                background: url('../../../../assets/img/04.png') center/cover no-repeat;
            }
        }
        .advantage-btn {
            color: #333;
        }
    }
</style>