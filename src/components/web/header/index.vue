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
            <div class="header-content"></div>
        </slot>
        <div class="header-right">
            <login></login>
        </div>
    </div>
</template>

<script>
import Login from './login'
export default {
    name: 'Header',
    components:{
        Login
    },
    data: function () {
    return {

    }
  }
}
</script>
<style lang='scss'>
    .com-header {
        overflow-x: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 30px;

        .header-left{
            display: flex;
            margin-right: 20px;
            
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
                margin-bottom: 0;
                .content {
                    font-size: 14px;
                    line-height: 1.1;
                    color: #FC7E23;
                }
            }
        }
        .header-right {
            margin-left: auto;
            
        }
        
    }
</style>
