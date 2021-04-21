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
                width="6%"
                src="../../../assets/img/287.png"
            >
            </v-img>
            <comForm></comForm>
            
            
        </v-card>
        </v-dialog>
    </div>
</template>

<script>
    import comForm from './form'
    export default {
        components:{
            comForm
        },
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
        .v-card {
            .form-box {
                margin: 60px auto;
                border: solid 1px red;
            }
        }
        
        
    }
</style>