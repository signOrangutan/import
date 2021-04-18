<template>
    <!-- 个人中心 -->
    <div class='mine-page'>
        <div class="mine-main d-flex">
            <div class="mine-menu">
                <div class="member-info d-flex" @click="handleSelect(0)">
                    <v-avatar class="avatar mr-3" color="orange" size="44">
                        <span class="white--text headline">44</span>
                    </v-avatar>
                    <div class="title">
                        <p class="mb-0 name">蹲墙角。画圈</p>
                        <span class="id-info">ID: 3913108</span>
                    </div>
                </div>
                <div class="person d-flex align-center"
                    @click="handleSelect(1)"
                >
                    <span class="icon"></span>
                    <span>个人信息</span>
                </div>
                <div 
                    class="menu-item d-flex align-center" 
                    v-for="(nav,index) in navs" :key="index"
                    :class="{selected: current == nav.index}"
                    @click="handleSelect(nav.index)"
                    >
                    <span class="icon"></span>
                    <span>{{nav.title}}</span>
                </div>
            </div>
            <div class="content">
                <user-info v-if="current==0"></user-info>
                <coupon v-else-if="current==2"></coupon>
                <trade v-else-if="current==3"></trade>
                <historyDownload v-else-if="current==4"></historyDownload>
                <comment v-else-if="current==6"></comment>
            </div>
        </div>
    </div>
</template>

<script>
    import userInfo from './com/user-info'
    import coupon from './com/coupon'
    import trade from './com/trade'
    import historyDownload from './com/historyDownload'
    import comment from './com/comment/comment.vue'
    export default {
        components:{
            userInfo,
            coupon,
            trade,
            historyDownload,
            comment
        },
        data: function(){
            return {
                navs:[
                    {title: '优惠券', index: 2},
                    {title: '交易明细', index: 3},
                    {title: '历史下载记录', index: 4},
                    {title: '在线客服', index: 5},
                    {title: '评论反馈', index: 6},
                ],
                current: 0
            }
        },
        methods: {
            handleSelect: function(index){
                this.current = index
            }
        }
    }
</script>
<style lang='scss'>
    .mine-page {
        @extend .content-bg;
        .mine-main {
            @extend .max-container;
            
            padding-top: 30px;
            padding-bottom: 60px;

            .mine-menu,.content {
                @extend .bg-white;
            }
            .mine-menu {
                width: 247px;
                height: 650px;
                margin-right: 5px;

                // padding: 40px 27px;

                .member-info {
                    border-bottom: solid 1px #E6E6E6;
                    padding-top: 40px;
                    padding-left: 27px;
                    padding-bottom: 30px;
                    
                    .title {
                        .name {
                            font-size: 16px;
                            color: #333;
                        }
                        .id-info {
                            font-size: 12px;
                            color: #666;
                        }
                    }
                }
                .person {
                    line-height: 5.6;
                    .icon {
                        background: url('../../../assets/img/377.png') center/cover no-repeat;
                    }
                    border-bottom: solid 1px #E6E6E6;
                }

                .person, .menu-item {
                    font-size: 14px;
                    color: #333;
                    .icon {
                       display: inline-block;
                        width: 19px;
                        height: 19px;
                        margin-left: 26px;
                        margin-right: 18px;
                    }
                }

                .menu-item {
                    line-height: 2.9;
                    position: relative;
                    &:nth-child(3){
                        margin-top: 30px;
                        .icon {
                            background: url('../../../assets/img/375.png') center/cover no-repeat;
                        }
                    }
                    &:nth-child(4){
                        .icon {
                            background: url('../../../assets/img/369.png') center/cover no-repeat;
                        }
                    }
                    &:nth-child(5){
                        .icon {
                            background: url('../../../assets/img/369.png') center/cover no-repeat;
                        }
                    }
                    &:nth-child(6){
                        .icon {
                            background: url('../../../assets/img/376.png') center/cover no-repeat;
                        }
                    }
                    &:nth-child(7){
                        .icon {
                            background: url('../../../assets/img/371.png') center/cover no-repeat;
                        }
                    }
                }
                .selected {
                    background: #F6F7F9;
                    &::before {
                        position: absolute;
                        display: inline-block;
                        content: '';
                        width: 2px;
                        height: 20px;
                        top: 10px;
                        left: 0;
                        background-color: $primary-color;
                    }
                }
            }


            .content {
                flex: 1;
                padding: 40px 50px 0 50px;
            }
        }
    }
</style>