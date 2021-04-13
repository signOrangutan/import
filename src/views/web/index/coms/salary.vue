<template>
    <!-- 薪人薪事 -->
    <div class='com-salary'>
        <p class="header">已经被17,321,395人应用于工作，您的同行都在用</p>
        <div class="salary-box" >
            <div class="salary-item" v-for="(item,index) in [{},{},{}]" :key="index">
                <div class="header">
                    <p class="user-info">
                        <span class="ele flag">薪人薪事</span>
                        <span class="ele job">资深设计师</span>
                        <span class="ele name">小王</span>
                    </p>
                    <v-avatar class="avatar" color="orange" size="85">
                        <span class="white--text headline">85</span>
                    </v-avatar>
                </div>
                <div class="content">我是一个自由设计师，经常会接一些外包服务，在没有遇见报告易之前每一张表都需要自己创作，很费时。现在用表有授权，客户放心，我也更省心。</div>
                <span class="mark"></span>
            </div>
        </div>
        <p class="footer"><v-btn color="#ffffff">查看更多</v-btn></p>
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
    .com-salary {
        .header {
            text-align: center;
            margin-bottom: 50px;
        }
        .salary-box {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            
            .salary-item {
                // width: 390px;
                background: #FFFFFF;
                box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.1);
                border-radius: 6px;
                
                &:not(:last-child) {
                    margin-right: 15px;
                }

                .header {
                    position: relative;
                    display: flex;
                    justify-content: space-around;

                    .user-info {
                        margin-bottom: 0;
                        font-size: 16px;
                        line-height: 3;
                        .ele {
                            margin-left: 10px;
                        }
                        .flag {
                            font-weight: 500;
                        }
                    }
                    .avatar {
                        margin-top: -30px;
                    }
                    &::before {
                        position: absolute;
                        bottom: -70px;
                        left: 30px;
                        content: '“';
                        color: #ccc;
                        font-size: 70px;
                        vertical-align: bottom;
                    }
                    
                    
                }
                .content {
                    margin: 20px 30px;
                    font-size: 14px;
                    color: #333;
                    line-height: 1.2;
                }

                .mark {
                    border: 1px solid #ddd;
                    margin-left: 30px;
                    display: inline-block;
                    width: 142px;
                    height: 44px;
                    background: url('../../../../assets/img/26.png') center/cover no-repeat;
                }
            }
        }
        .footer {
            text-align: center;
            margin-top: 50px;
        }
    }
</style>