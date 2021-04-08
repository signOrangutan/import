<template>
    <!-- 组件头部 -->
    <div class='com-header'>
        <!-- logo -->
        <span class="logo"></span>
        <!-- 内容 -->
        <slot name="content">
        </slot>
        <div class="btn-login">登录注册</div>
    </div>
</template>

<script>
    export default {
        name: "Header",
        data:function(){
            return {
                
            }
        }
    }
</script>
<style lang='scss'>
    .com-header {
        padding: 19px 30px;

        display: grid;
        grid-template-columns: 1fr minmax(1fr, 1200px) minmax(1fr, 100px);

        .logo {
            width: 136px;
            height: 32px;
            display: inline-block;
            background: url('../../../assets/img/logo.png') center/cover no-repeat;
        }
        .btn-login {
            min-width: 100px;
            text-align: right;
        }
    }
</style>