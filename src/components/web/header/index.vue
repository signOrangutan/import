<template>
    <!-- 组件头部 -->
    <div class='com-header'>
        <div class="header-left">
            <!-- logo -->
            <span class="logo"></span>
            <p class="top-text">
                <span class="content">让所有创业者平等</span>
                <span class="content">享受高品质咨询服务</span>
            </p>
        </div>

        <!-- 内容 -->
        <slot name="content">
        </slot>
        <div class="btn-login">登录注册</div>
    </div>
</template>

<script>
export default {
  name: 'Header',
  data: function () {
    return {

    }
  }
}
</script>
<style lang='scss'>
    .com-header {

        .header-left{
            margin-left: 30px;
            display: flex;
            align-items: center;
            .logo {
                width: 136px;
                height: 32px;
                display: inline-block;
                background: url('../../../assets/img/logo.png') center/cover no-repeat;
                margin-right: 25px;
            }
            .top-text {
                display: flex;
                flex-direction: column;
                .content {
                    font-size: 14px;
                    line-height: 1.1;
                    color: #FC7E23;
                }
            }
        }

        .btn-login {
            width: 88px;
        }
    }
</style>
