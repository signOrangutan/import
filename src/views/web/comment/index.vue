<template>
    <!-- 评论反馈 -->
    <div class='comment-page'>
        <div class="comment-main mx-auto">
            <p class="header d-flex">
                <span class="icon"></span>
                <span class="header-title">客户评论</span>
            </p>
            <div class="comment-list">
                <div 
                    class="comment-item d-flex"
                    v-for="(item,index) in list" :key="index"
                >
                    <div class="item-left">
                        <v-avatar class="avatar" color="orange" size="70">
                            <span class="white--text headline">70</span>
                        </v-avatar>
                        <p class="member">龙***3</p>
                    </div>
                    <div class="item-right">
                        <p class="rate mb-0">
                            <span class="star" 
                                v-for="i in 5" :key="i"
                                :class="{'active': i <= 3}"
                            ></span>
                        </p>
                        <p class="comment">东东收到了！京东自营商品！实物与店家所提供的图片信息一般无二！商品包装严密无破损！快递小哥也很给力！昨天下单，今天收到了货！给孩子买的！看了
一下商品！质量不错！做工精细！无异味！一年一双！</p>
                        <div class="images d-flex">
                            <v-img 
                                class="image-item"
                                v-for="i in 4" :key="i" 
                                height="52" 
                                max-width="52"
                                src=""
                                ></v-img>
                        </div>
                        <p class="publish-date">2019-07-24 09:22</p>
                        <div class="replay">
                            <p class="mb-0 replay-header">
                                <span class="company">报告易 </span>
                                <span class="text">回复</span>
                            </p>
                            <p class="replay-content">不好意思,由于元旦期间公司放假导致未能及时回复您的消息,报告已经发送给您。给您带来不好的体验十分抱歉,工作人员这边也联系不上您</p>
                        </div>
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
                list:[{}, {}, {}, {}, {}, {}],
                page: 1
            }
        }
    }
</script>
<style lang='scss'>
    .comment-page {
        background: url('../../../assets/img/294.jpeg') center/cover no-repeat;
        padding-top: 42px;
        .comment-main {
            @extend .max-container;
            @extend .bg-white;
            padding: 40px 30px;
            // margin-top: 42px;

            .header {

                .icon {
                    display: inline-block;
                    width: 27px;
                    height: 27px;
                    background: url('../../../assets/img/363.png') center/cover no-repeat;
                    margin-right: 10px;
                }
                .header-title {
                    font-size: 21px;
                    font-weight: bold;
                }
            }
            
            .comment-list {
                margin-bottom: 60px;
                .comment-item {
                    border-top: solid 1px #DCDCDC;
                    padding-top: 35px;

                    &:last-child {
                        border-bottom: solid 1px #DCDCDC;
                    }
                    .item-left{
                        text-align: center;
                        margin-right: 20px;
                        .avatar {
                            margin-top: 10px;
                        }
                        .member {
                            font-size: 14px;
                            color: #333;
                        }
                    }
                    .item-right{
                        flex: 1;

                        .rate {
                            .star {
                                display: inline-block;
                                width: 16px;
                                height: 16px;
                                margin-left: 5px;
                                background: url('../../../assets/img/364.png') center/cover no-repeat;
                            }
                            .active {
                                background: url('../../../assets/img/365.png') center/cover no-repeat;
                            }
                        }
                        .comment {
                            font-size: 14px;
                        }
                        .images {
                            margin-bottom: 20px;
                            .image-item {
                                background: gray;
                                margin-left: 10px;
                            }
                        }
                        .publish-date {
                            font-size: 12px;
                            color: #666;
                        }

                        .replay {
                            border-top: 1px solid #DCDCDC;
                            font-size: 14px;
                            padding-top: 10px;
                            .replay-header {
                                font-weight: 500;
                                .company {
                                    color: #000;
                                }
                                .text {
                                    color: #666;
                                }
                            }
                            .replay-content {
                                font-weight: 1.4;
                            }
                        }
                    }
                }
            }
            .paginate {
                margin-bottom: 60px;
            } 
        }
    }
</style>