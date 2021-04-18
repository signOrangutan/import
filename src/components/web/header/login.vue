<template>
    <div class='com-login'>
        <v-btn 
            color="primary" 
            small 
            v-if="!token"
            @click="handleLogin"
            >登录注册</v-btn>
        <v-avatar v-else color="indigo" size="40">
            <span class="white--text headline">40</span>
        </v-avatar>
        <v-dialog
        v-model="dialog"
        max-width="765"
        >
        <v-card class="d-flex justify-space-between">
            <v-img 
                max-height="497"
                max-width="318"
                src="../../../assets/img/287.png"
            >
            </v-img>
            <div class="d-flex flex-column flex-grow-1">

                <div class="mt-auto bg-gray font-size-14" style="line-height:4.6">
                    <p class="mb-0 text-center">已有账号？<span class="text-primary">去登录</span></p>
                </div>
            </div>
            
        </v-card>
        </v-dialog>
    </div>
</template>

<script>
    export default {
        data: function(){
            return {
                dialog: false
            }
        },
        computed:{
            token: function(){
                let { token } = this.$store.state
                return token
            }
        },
        methods: {
            handleLogin:function(){
                this.dialog = true
            }
        }
    }
</script>
<style lang='scss'>
    .com-login {

        .login-footer {
            background-color: #f8f8f8; 
            border-radius:6px;
        }
    }
</style>