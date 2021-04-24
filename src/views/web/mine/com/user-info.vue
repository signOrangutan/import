<template>
    <div class='com-user-info'>
        <div class="header d-flex justify-space-between">
            <div class="content-left d-flex">
                <v-avatar color="orange" size="54"></v-avatar>
                <div class="header-info">
                    <p class="mb-0 name">
                        蹲墙角。画圈
                        <span class="icon"></span>
                    </p>
                    <span class="id-info">
                        ID：3913108
                    </span>
                </div>
            </div>
            <div class="content-right">
                <p class="mb-0">让所有创业者平等享受高品质咨询服务</p>
                <p class="mb-0">商业计划书智能生成可用于融资立项招商合作</p>
            </div>
        </div>
        <div class="list">
            <div class="item d-flex justify-space-between align-center">
                <div class="container d-flex">
                    <div class="text-title">手机</div>
                    <div class="tip">
                        已绑定: 182****9176
                    </div>
                    
                </div>
                <v-btn class="primary">更换手机</v-btn>
            </div>
            <div class="item d-flex justify-space-between align-center">
                <div class="container d-flex">
                    <div class="text-title">微信</div>
                    <div class="tip">
                        已绑定
                    </div>
                </div>
                <v-btn class="primary" @click="bindWechat(true)">解除绑定</v-btn>
            </div>
            <div class="item d-flex justify-space-between align-center">
                <div class="container d-flex">
                    <div class="text-title">账号密码</div>
                    <div class="tip">
                        已设置
                    </div>
                </div>
                <v-btn class="primary">更改密码</v-btn>
            </div>
        </div>
        <report-dialog
            :dialog="dialog"
            :title="title"
            :concelTxt="concelTxt"
            :confirmTxt="confirmTxt"
        >
            <div class="dialog-box" >
                <div v-if="type==1">解除微信绑定后将无法使用微信登录该账号，请谨慎操作！</div>
            </div>
        </report-dialog>
    </div>
</template>

<script>
    import reportDialog from '@/components/common/report-dialog.vue'
    
    export default {
        components:{
            reportDialog
        },
        data: function(){
            return {
                dialog: false,
                title: '解除微信绑定',
                type: 1
            }
        },
        computed: {
            confirmTxt: function(){
                let resStr = '确认'
                switch(this.type){
                    case 1:
                        resStr = "解除绑定"
                        break
                    default:
                        break
                }
                return resStr
            },
            concelTxt: function(){
                let resStr = '取消'
                switch(this.type){
                    case 1:
                        resStr = "暂不解除"
                        break
                    default:
                        break
                }
                return resStr
            }
        },
        methods: {
            bindWechat: function(flag){ // flag 绑定微信标记 true 绑定 false 解除
                console.log('bangd')
                this.dialog = true
            },
            dialogHide: function(){
                this.dialog = false
            },
            handleConfirm: function(){
                console.log('确认操作')
                this.dialogHide()
            },
            handleCancel: function(){
                this.dialogHide()
            }

        }
    }
</script>
<style lang='scss'>
    .com-user-info {
        .header {
            padding: 33px;
            background: url('../../../../assets/img/373.png');
            color: #666;
            font-size: 15px;
            line-height: 1.8;

            .header-info {
                margin-left: 10px;
                .name {
                    font-size: 20px;

                    .icon {
                        margin-left: 10px;
                        display: inline-block;
                        width: 18px;
                        height: 18px;
                        background: url('../../../../assets/img/367.png') center/cover no-repeat;
                    }
                }
            }
        }

        .list {
            .item {
                border-bottom: solid 1px #EBEDF0;
                .container {
                    flex: 1;
                    padding-left: 50px;
                    font-size: 16px;
                    color: #666;
                    line-height: 7.3;
                    .text-title {
                        width: 30%;
                        color: #333;
                        position: relative;
                        padding-left: 30px;
                        &::before{
                            position: absolute;
                            display: inline-block;
                            content: '';
                            width: 14px;
                            height: 20px;
                            top: calc(50% - 10px);
                            left: 0;
                        }
                    }
                    .tip{
                        position: relative;
                        padding-left: 30px;
                        &::before{
                            position: absolute;
                            display: inline-block;
                            content: '';
                            width: 21px;
                            height: 21px;
                            top: calc(50% - 10px);
                            left: 0;
                            background: url('../../../../assets/img/368.png') center/cover no-repeat;
                        }
                    }
                }
                &:nth-child(1) {
                        .text-title {
                            &::before {
                                background: url('../../../../assets/img/372.png') center/cover no-repeat;
                            }
                        }
                    }
                    &:nth-child(2) {
                        .text-title {
                            &::before {
                                width: 20px;
                                height: 20px;
                                background: url('../../../../assets/img/374.png') center/cover no-repeat;
                            }
                        }
                    }
                    &:nth-child(3) {
                        .text-title {
                            &::before {
                                width: 18px;
                                height: 20px;
                                background: url('../../../../assets/img/370.png') center/cover no-repeat;
                            }
                        }
                    }
            }
        }
    }
</style>