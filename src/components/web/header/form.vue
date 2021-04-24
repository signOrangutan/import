<template>
    <!-- 注册/登录表单 -->
    <div class="com-form d-flex flex-column flex-grow-1">
        <div class="form-box">
            <!-- 手机号登录 -->
            <div v-if="type==1" class="base login-phone">
                <p class="form-title text-center">手机号登录</p>
                <div class="phone">
                    <span class="prefix">+86</span>
                    <input type="text" maxlength="11" placeholder="输入手机号" />
                </div>
                <div class="code d-flex">
                    <input class="code-input" type="text" max-length="6" placeholder="输入短信中的验证码"/>
                    <div class="btn-code">获取验证码</div>
                </div>
                <p class="text-right" @click="handleForgetPwd"><span>忘记密码</span></p>
                <v-btn class="btn-login primary" @click="handleLogin">登录</v-btn>
                <div class="other-type d-flex text-center">
                    <div class="item" @click="handleLoginType(3)">
                        <span class="icon"></span>
                        <span>微信登录</span>
                    </div>
                    <div class="item" @click="handleLoginType(2)">
                        <span class="icon"></span>
                        <span>账号密码登录</span>
                    </div>
                </div>
            </div>
            <!-- 账号密码登录 -->
            <div v-else-if="type==2" class="base login-pwd">
                <p class="form-title text-center">登录</p>
                <div class="phone">
                    <input type="text" maxlength="11" placeholder="输入账号/手机号" />
                </div>
                <div class="code">
                    <input type="text" max-length="6" placeholder="输入密码"/>
                </div>
                <p class="text-right" @click="handleForgetPwd"><span>忘记密码</span></p>
                <v-btn class="btn-login primary" @click="handleLogin">登录</v-btn>
                <div class="other-type d-flex text-center">
                    <div class="item" @click="handleLoginType(3)">
                        <span class="icon"></span>
                        <span>微信登录</span>
                    </div>
                    <div class="item" @click="handleLoginType(1)">
                        <span class="icon"></span>
                        <span>验证码登录</span>
                    </div>
                </div>
            </div>
                <!-- 微信登录 -->
            <div v-else-if="type==3" class="base login-wechat">
                <p class="form-title text-center">微信扫码登录注册</p>
                <p class="text-center sub-title">登录开启设计新世界</p>
                <div class="qrcode-box">
                    <img class="img" src="" alt="">
                </div>
                <div class="other-type d-flex text-center">
                    <div class="item" @click="handleLoginType(3)">
                        <span class="icon"></span>
                        <span>微信登录</span>
                    </div>
                    <div class="item" @click="handleLoginType(1)">
                        <span class="icon"></span>
                        <span>验证码登录</span>
                    </div>
                </div>
            </div>

            <!--注册登录 -->
            <div v-else class="base reg">
                <p class="form-title text-center" v-if="type==0">注册登录</p>
                <p class="form-title text-center" v-else>忘记密码</p>
                <div class="phone">
                    <span class="prefix">+86</span>
                    <input type="text" maxlength="11" placeholder="输入手机号码" />
                </div>
                <div class="code d-flex">
                    <input class="code-input" type="text" max-length="6" placeholder="输入短信中的验证码"/>
                    <div class="btn-code">获取验证码</div>
                </div>
                <div class="pwd">
                    <input type="password" maxlength="30" placeholder="输入6-30位密码" />
                </div>
                <v-btn class="btn-login primary" @click="handleReg" v-if="type==0">注册账号</v-btn>
                <v-btn class="btn-login primary" @click="handleReg" v-else>确定</v-btn>
            </div>
        </div>
        
        <div class="mt-auto bg-gray font-size-14" style="line-height:4.6">
            <p class="mb-0 text-center" v-if="type!=0">没有账号？<span class="text-primary" @click="handleLoginType(0)">免费注册</span></p>
            <p class="mb-0 text-center" v-else>已有账号？<span class="text-primary" @click="handleLoginType(2)">去登录</span></p>
        </div>
    </div>
</template>

<script>
    export default {
        data: function(){
            return {
                type: 4 // 0: 注册 1:手机验证码登录 2:账号密码 3: 微信登录
            }
        },
        methods: {
            handleLoginType: function(type){
                this.type = type
            },
            handleReg: function(){
                console.log('注册账号')
            },
            handleLogin: function(){
                console.log('登录')
            },
            handleForgetPwd: function(){
                this.type = 4
            },
        }
        
    }
</script>
<style lang='scss'>
    .com-form {
        .form-box {
            margin: 0 auto;

            .login-pwd {
                .phone{
                    width: 240px;
                    padding-left: 16px;
                }
                .code {
                    margin-right: 0;
                    border-radius: 6px;
                    padding-left: 16px;
                    border: 1px solid #DCDCDC;
                }
            }
            .login-wechat {
                .form-title, .sub-title {
                    margin-bottom: 0;
                    line-height: 1;
                }
                .qrcode-box {
                    margin: 0 auto;
                    margin-top: 30px;
                    width: 162px;
                    height: 162px;
                    padding: 5px;
                    border: solid 1px #E0E0E0;
                    .img {
                        width: 100%;
                        height: 100%;
                        background-color: #E0E0E0;
                    }
                }
            }
            .base {
                width: 100%;
                font-size: 14px;
                line-height: 2.8;
                padding-bottom: 40px;
                input{
                    outline: none;
                }   
                
                .form-title {
                    margin-top: 40px;
                    font-size: 20px;
                    line-height: 2;
                }
                
                .phone {
                    margin-bottom: 10px;
                    border-radius: 6px;
                    border: 1px solid #DCDCDC;
                    
                    .prefix {
                        margin-left: 16px;
                        margin-right: 32px;
                    }
                }
                .code {
                    .code-input {
                        padding-left: 16px;
                        border-radius: 6px;
                        border: 1px solid #DCDCDC;
                    }
                    .btn-code {
                        margin-left: 10px;
                        padding-left: 8px;
                        padding-right: 8px;
                        background-color: #ECECEC;
                        border-radius: 6px;
                    }
                }
                .pwd {
                    margin-top: 10px;
                    margin-bottom: 40px;
                    padding-left:  16px;
                    border-radius: 6px;
                    border: 1px solid #DCDCDC;
                }
                .btn-login {
                    width: 100%;
                }
                .other-type {
                    min-width: 240px;
                    margin-top: 50px;
                    border-top: solid 1px #D6D6D6;
                    padding-top: 25px;
                    .item {
                        
                        flex: 1;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        line-height: 1;
                        .icon {
                            display: inline-block;
                            margin-right: 4px;
                        }
                        &:first-child {
                            border-right: solid 1px #E5E5E5;
                            .icon {
                                width: 15px;
                                height: 13px;
                                background: url('../../../assets/img/374.png') center/cover no-repeat;
                            }
                        }
                        &:last-child {
                            .icon {
                                width: 10px;
                                height: 16px;
                                background: url('../../../assets/img/372.png') center/cover no-repeat;
                            }
                        }
                    }
                }
            }
        }
        .login-footer {
            background-color: #f8f8f8; 
            border-radius:6px;
        }
    }
</style>